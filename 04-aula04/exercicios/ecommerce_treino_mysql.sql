-- =========================================================
-- Arquivo: ecommerce_treino_mysql.sql
-- Objetivo: Base didática de e-commerce para treino de SQL
-- SGBD: MySQL 8.0+
-- Observação:
--   - Gera dados fictícios para consultas didáticas.
--   - Clientes ficam apenas em cidades do estado de São Paulo.
--   - Fornecedores podem ser de todo o Brasil.
--   - O script usa CTE recursiva para gerar sequências numéricas.
-- =========================================================

-- =========================================================
-- 0) CRIAÇÃO DO BANCO
-- =========================================================

DROP DATABASE IF EXISTS ecommerce_treino;
CREATE DATABASE ecommerce_treino;
USE ecommerce_treino;

-- =========================================================
-- 1) LIMPEZA DAS TABELAS
-- =========================================================

DROP VIEW IF EXISTS vw_nota_pedido;
DROP VIEW IF EXISTS vw_pedido_cliente;

DROP TABLE IF EXISTS notas_fiscais;
DROP TABLE IF EXISTS itens_pedido;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS funcionarios;
DROP TABLE IF EXISTS fornecedores;
DROP TABLE IF EXISTS clientes;

-- =========================================================
-- 2) CRIAÇÃO DAS TABELAS
-- =========================================================

CREATE TABLE clientes (
    id_cliente      INT AUTO_INCREMENT PRIMARY KEY,
    nome            VARCHAR(120) NOT NULL,
    email           VARCHAR(120) NOT NULL UNIQUE,
    telefone        VARCHAR(20),
    cpf             VARCHAR(14) NOT NULL UNIQUE,
    cidade          VARCHAR(80) NOT NULL,
    estado          CHAR(2) NOT NULL DEFAULT 'SP',
    data_cadastro   DATE NOT NULL DEFAULT (CURRENT_DATE)
) ENGINE=InnoDB;

CREATE TABLE fornecedores (
    id_fornecedor   INT AUTO_INCREMENT PRIMARY KEY,
    razao_social    VARCHAR(150) NOT NULL,
    nome_fantasia   VARCHAR(120),
    cnpj            VARCHAR(18) NOT NULL UNIQUE,
    cidade          VARCHAR(80) NOT NULL,
    estado          CHAR(2) NOT NULL,
    email           VARCHAR(120),
    telefone        VARCHAR(20)
) ENGINE=InnoDB;

CREATE TABLE funcionarios (
    id_funcionario  INT AUTO_INCREMENT PRIMARY KEY,
    nome            VARCHAR(120) NOT NULL,
    cargo           VARCHAR(80) NOT NULL,
    salario         DECIMAL(10,2) NOT NULL,
    cidade          VARCHAR(80) NOT NULL,
    estado          CHAR(2) NOT NULL DEFAULT 'SP',
    data_admissao   DATE NOT NULL
) ENGINE=InnoDB;

CREATE TABLE usuarios (
    id_usuario      INT AUTO_INCREMENT PRIMARY KEY,
    login           VARCHAR(50) NOT NULL UNIQUE,
    senha           VARCHAR(120) NOT NULL,
    perfil          VARCHAR(30) NOT NULL,
    ativo           BOOLEAN NOT NULL DEFAULT TRUE,
    id_funcionario  INT NOT NULL UNIQUE,
    CONSTRAINT fk_usuario_funcionario
        FOREIGN KEY (id_funcionario)
        REFERENCES funcionarios(id_funcionario)
) ENGINE=InnoDB;

CREATE TABLE categorias (
    id_categoria    INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria  VARCHAR(80) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE produtos (
    id_produto      INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto    VARCHAR(150) NOT NULL,
    preco           DECIMAL(10,2) NOT NULL,
    estoque         INT NOT NULL,
    id_categoria    INT NOT NULL,
    id_fornecedor   INT NOT NULL,
    CONSTRAINT fk_produto_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categorias(id_categoria),
    CONSTRAINT fk_produto_fornecedor
        FOREIGN KEY (id_fornecedor)
        REFERENCES fornecedores(id_fornecedor)
) ENGINE=InnoDB;

CREATE TABLE pedidos (
    id_pedido       INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente      INT NOT NULL,
    id_usuario      INT NOT NULL,
    data_pedido     DATE NOT NULL,
    status          VARCHAR(30) NOT NULL,
    valor_total     DECIMAL(12,2) NOT NULL DEFAULT 0,
    CONSTRAINT fk_pedido_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES clientes(id_cliente),
    CONSTRAINT fk_pedido_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)
) ENGINE=InnoDB;

CREATE TABLE itens_pedido (
    id_item         INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido       INT NOT NULL,
    id_produto      INT NOT NULL,
    quantidade      INT NOT NULL,
    preco_unitario  DECIMAL(10,2) NOT NULL,
    subtotal        DECIMAL(12,2) NOT NULL,
    CONSTRAINT fk_item_pedido
        FOREIGN KEY (id_pedido)
        REFERENCES pedidos(id_pedido),
    CONSTRAINT fk_item_produto
        FOREIGN KEY (id_produto)
        REFERENCES produtos(id_produto)
) ENGINE=InnoDB;

CREATE TABLE notas_fiscais (
    id_nota_fiscal  INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido       INT NOT NULL UNIQUE,
    numero_nota     VARCHAR(20) NOT NULL UNIQUE,
    data_emissao    DATE NOT NULL,
    valor_nota      DECIMAL(12,2) NOT NULL,
    CONSTRAINT fk_nf_pedido
        FOREIGN KEY (id_pedido)
        REFERENCES pedidos(id_pedido)
) ENGINE=InnoDB;

-- =========================================================
-- 3) INSERÇÃO DE DADOS BÁSICOS
-- =========================================================

INSERT INTO categorias (nome_categoria) VALUES
('Eletrônicos'),
('Informática'),
('Celulares'),
('Periféricos'),
('Móveis'),
('Livros'),
('Papelaria'),
('Casa e Cozinha'),
('Esporte'),
('Moda');

-- =========================================================
-- 4) TABELA AUXILIAR DE NÚMEROS (1 a 3000)
--    Necessária para gerar dados fictícios.
-- =========================================================

DROP TEMPORARY TABLE IF EXISTS seq_numeros;

CREATE TEMPORARY TABLE seq_numeros (
    n INT PRIMARY KEY
);

INSERT INTO seq_numeros (n)
WITH RECURSIVE seq AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1
    FROM seq
    WHERE n < 3000
)
SELECT n
FROM seq;

-- =========================================================
-- 5) GERAÇÃO DE 1.000 CLIENTES
--    Todos os clientes em cidades do estado de São Paulo.
-- =========================================================

INSERT INTO clientes (nome, email, telefone, cpf, cidade, estado, data_cadastro)
SELECT
    CONCAT('Cliente ', n) AS nome,
    CONCAT('cliente', n, '@email.com') AS email,
    CONCAT('(11)9', LPAD(10000000 + n, 8, '0')) AS telefone,
    LPAD(n, 11, '0') AS cpf,
    ELT(1 + FLOOR(RAND() * 15),
        'São Paulo','Campinas','Santos','Sorocaba','Ribeirão Preto',
        'São José dos Campos','Santo André','Osasco','Bauru','São José do Rio Preto',
        'Mogi das Cruzes','Jundiaí','Piracicaba','Praia Grande','Guarulhos'
    ) AS cidade,
    'SP' AS estado,
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 730) DAY) AS data_cadastro
FROM seq_numeros
WHERE n <= 1000;

-- =========================================================
-- 6) GERAÇÃO DE 1.000 FORNECEDORES
-- =========================================================

INSERT INTO fornecedores (razao_social, nome_fantasia, cnpj, cidade, estado, email, telefone)
SELECT
    CONCAT('Fornecedor ', n, ' LTDA') AS razao_social,
    CONCAT('Fantasia ', n) AS nome_fantasia,
    LPAD(10000000000000 + n, 14, '0') AS cnpj,
    ELT(1 + FLOOR(RAND() * 15),
        'São Paulo','Rio de Janeiro','Belo Horizonte','Curitiba','Porto Alegre',
        'Florianópolis','Salvador','Recife','Fortaleza','Brasília',
        'Manaus','Goiânia','Belém','Vitória','Natal'
    ) AS cidade,
    ELT(1 + FLOOR(RAND() * 15),
        'SP','RJ','MG','PR','RS','SC','BA','PE','CE','DF',
        'AM','GO','PA','ES','RN'
    ) AS estado,
    CONCAT('fornecedor', n, '@empresa.com') AS email,
    CONCAT('(11)3', LPAD(1000000 + n, 7, '0')) AS telefone
FROM seq_numeros
WHERE n <= 1000;

-- =========================================================
-- 7) GERAÇÃO DE 1.000 FUNCIONÁRIOS
-- =========================================================

INSERT INTO funcionarios (nome, cargo, salario, cidade, estado, data_admissao)
SELECT
    CONCAT('Funcionário ', n) AS nome,
    ELT(1 + FLOOR(RAND() * 8),
        'Vendedor','Analista','Supervisor','Gerente',
        'Assistente','Coordenador','Estoquista','Financeiro'
    ) AS cargo,
    ROUND(2000 + RAND() * 12000, 2) AS salario,
    ELT(1 + FLOOR(RAND() * 8),
        'São Paulo','Campinas','Santos','Sorocaba',
        'Guarulhos','Osasco','Santo André','Jundiaí'
    ) AS cidade,
    'SP' AS estado,
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 2000) DAY) AS data_admissao
FROM seq_numeros
WHERE n <= 1000;

-- =========================================================
-- 8) GERAÇÃO DE 1.000 USUÁRIOS
--    Um usuário para cada funcionário.
-- =========================================================

INSERT INTO usuarios (login, senha, perfil, ativo, id_funcionario)
SELECT
    CONCAT('user', id_funcionario) AS login,
    MD5(CONCAT('senha', id_funcionario)) AS senha,
    ELT(1 + FLOOR(RAND() * 4),
        'admin','vendas','financeiro','estoque'
    ) AS perfil,
    IF(RAND() > 0.10, TRUE, FALSE) AS ativo,
    id_funcionario
FROM funcionarios;

-- =========================================================
-- 9) GERAÇÃO DE 1.000 PRODUTOS
-- =========================================================

INSERT INTO produtos (nome_produto, preco, estoque, id_categoria, id_fornecedor)
SELECT
    CONCAT('Produto ', n) AS nome_produto,
    ROUND(10 + RAND() * 5000, 2) AS preco,
    FLOOR(RAND() * 300) AS estoque,
    1 + FLOOR(RAND() * 10) AS id_categoria,
    1 + FLOOR(RAND() * 1000) AS id_fornecedor
FROM seq_numeros
WHERE n <= 1000;

-- =========================================================
-- 10) GERAÇÃO DE 1.000 PEDIDOS
-- =========================================================

INSERT INTO pedidos (id_cliente, id_usuario, data_pedido, status, valor_total)
SELECT
    1 + FLOOR(RAND() * 1000) AS id_cliente,
    1 + FLOOR(RAND() * 1000) AS id_usuario,
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365) DAY) AS data_pedido,
    ELT(1 + FLOOR(RAND() * 5),
        'ABERTO','PAGO','CANCELADO','FATURADO','ENVIADO'
    ) AS status,
    0 AS valor_total
FROM seq_numeros
WHERE n <= 1000;

-- =========================================================
-- 11) GERAÇÃO DE 3.000 ITENS DE PEDIDO
-- =========================================================

INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco_unitario, subtotal)
SELECT
    1 + FLOOR(RAND() * 1000) AS id_pedido,
    p.id_produto,
    x.qtd AS quantidade,
    p.preco AS preco_unitario,
    ROUND(x.qtd * p.preco, 2) AS subtotal
FROM (
    SELECT
        1 + FLOOR(RAND() * 1000) AS id_produto,
        1 + FLOOR(RAND() * 5) AS qtd
    FROM seq_numeros
    WHERE n <= 3000
) AS x
JOIN produtos p
    ON p.id_produto = x.id_produto;

-- =========================================================
-- 12) ATUALIZAÇÃO DO VALOR TOTAL DOS PEDIDOS
-- =========================================================

UPDATE pedidos p
JOIN (
    SELECT
        id_pedido,
        ROUND(SUM(subtotal), 2) AS total
    FROM itens_pedido
    GROUP BY id_pedido
) AS sub
    ON p.id_pedido = sub.id_pedido
SET p.valor_total = sub.total;

-- =========================================================
-- 13) GERAÇÃO DE NOTAS FISCAIS
--    Apenas para pedidos com valor total maior que zero.
-- =========================================================

INSERT INTO notas_fiscais (id_pedido, numero_nota, data_emissao, valor_nota)
SELECT
    p.id_pedido,
    CONCAT('NF-', LPAD(p.id_pedido, 6, '0')) AS numero_nota,
    DATE_ADD(p.data_pedido, INTERVAL FLOOR(RAND() * 10) DAY) AS data_emissao,
    p.valor_total AS valor_nota
FROM pedidos p
WHERE p.valor_total > 0;

-- =========================================================
-- 14) VIEWS DIDÁTICAS PARA NATURAL JOIN
-- =========================================================

CREATE VIEW vw_pedido_cliente AS
SELECT
    p.id_pedido,
    p.id_cliente,
    p.data_pedido,
    p.status,
    c.nome,
    c.cidade
FROM pedidos p
JOIN clientes c
    ON p.id_cliente = c.id_cliente;

CREATE VIEW vw_nota_pedido AS
SELECT
    id_pedido,
    numero_nota,
    valor_nota
FROM notas_fiscais;

-- =========================================================
-- 15) CONSULTAS DIDÁTICAS
--    Descomente as consultas abaixo para testar.
-- =========================================================

-- ---------------------------------------------------------
-- A) SELEÇÃO
-- Clientes da cidade de Campinas
-- ---------------------------------------------------------
-- SELECT *
-- FROM clientes
-- WHERE cidade = 'Campinas';

-- ---------------------------------------------------------
-- B) PROJEÇÃO
-- Mostrar apenas nome e email dos clientes
-- ---------------------------------------------------------
-- SELECT nome, email
-- FROM clientes;

-- ---------------------------------------------------------
-- C) PRODUTO CARTESIANO
-- Cada cliente combinado com cada categoria
-- ---------------------------------------------------------
-- SELECT c.nome, cat.nome_categoria
-- FROM clientes c
-- CROSS JOIN categorias cat
-- LIMIT 20;

-- ---------------------------------------------------------
-- D) INTERSEÇÃO (SIMULADA NO MYSQL)
-- Cidades que aparecem em clientes e funcionários
-- ---------------------------------------------------------
-- SELECT DISTINCT c.cidade
-- FROM clientes c
-- INNER JOIN funcionarios f
--     ON c.cidade = f.cidade
-- ORDER BY c.cidade;

-- ---------------------------------------------------------
-- E) NATURAL JOIN
-- Exemplo didático entre as views criadas
-- ---------------------------------------------------------
-- SELECT *
-- FROM vw_pedido_cliente
-- NATURAL JOIN vw_nota_pedido;

-- ---------------------------------------------------------
-- F) INNER JOIN
-- Pedidos com nome do cliente
-- ---------------------------------------------------------
-- SELECT
--     p.id_pedido,
--     p.data_pedido,
--     p.status,
--     c.nome AS cliente,
--     p.valor_total
-- FROM pedidos p
-- JOIN clientes c
--     ON p.id_cliente = c.id_cliente;

-- ---------------------------------------------------------
-- G) JOIN ENTRE VÁRIAS TABELAS
-- Pedido, cliente, item e produto
-- ---------------------------------------------------------
-- SELECT
--     p.id_pedido,
--     c.nome AS cliente,
--     pr.nome_produto,
--     ip.quantidade,
--     ip.preco_unitario,
--     ip.subtotal
-- FROM pedidos p
-- JOIN clientes c
--     ON p.id_cliente = c.id_cliente
-- JOIN itens_pedido ip
--     ON p.id_pedido = ip.id_pedido
-- JOIN produtos pr
--     ON ip.id_produto = pr.id_produto
-- ORDER BY p.id_pedido;

-- ---------------------------------------------------------
-- H) GROUP BY
-- Quantidade de clientes por cidade
-- ---------------------------------------------------------
-- SELECT
--     cidade,
--     COUNT(*) AS qtde_clientes
-- FROM clientes
-- GROUP BY cidade
-- ORDER BY qtde_clientes DESC;

-- ---------------------------------------------------------
-- I) GROUP BY + HAVING
-- Cidades com mais de 50 clientes
-- ---------------------------------------------------------
-- SELECT
--     cidade,
--     COUNT(*) AS qtde_clientes
-- FROM clientes
-- GROUP BY cidade
-- HAVING COUNT(*) > 50
-- ORDER BY qtde_clientes DESC;

-- ---------------------------------------------------------
-- J) TOTAL COMPRADO POR CLIENTE
-- ---------------------------------------------------------
-- SELECT
--     c.id_cliente,
--     c.nome,
--     ROUND(SUM(p.valor_total), 2) AS total_comprado
-- FROM clientes c
-- JOIN pedidos p
--     ON c.id_cliente = p.id_cliente
-- GROUP BY c.id_cliente, c.nome
-- ORDER BY total_comprado DESC;

-- ---------------------------------------------------------
-- K) TOTAL VENDIDO POR CATEGORIA
-- ---------------------------------------------------------
-- SELECT
--     cat.nome_categoria,
--     ROUND(SUM(ip.subtotal), 2) AS total_vendido
-- FROM itens_pedido ip
-- JOIN produtos pr
--     ON ip.id_produto = pr.id_produto
-- JOIN categorias cat
--     ON pr.id_categoria = cat.id_categoria
-- GROUP BY cat.nome_categoria
-- ORDER BY total_vendido DESC;

-- ---------------------------------------------------------
-- L) FORNECEDORES COM MAIS DE 20 PRODUTOS
-- ---------------------------------------------------------
-- SELECT
--     f.id_fornecedor,
--     f.nome_fantasia,
--     COUNT(pr.id_produto) AS qtde_produtos
-- FROM fornecedores f
-- JOIN produtos pr
--     ON f.id_fornecedor = pr.id_fornecedor
-- GROUP BY f.id_fornecedor, f.nome_fantasia
-- HAVING COUNT(pr.id_produto) > 20
-- ORDER BY qtde_produtos DESC;

-- =========================================================
-- 16) CONSULTAS DE CONFERÊNCIA DA CARGA
-- =========================================================

-- SELECT COUNT(*) AS total_clientes      FROM clientes;
-- SELECT COUNT(*) AS total_fornecedores  FROM fornecedores;
-- SELECT COUNT(*) AS total_funcionarios  FROM funcionarios;
-- SELECT COUNT(*) AS total_usuarios      FROM usuarios;
-- SELECT COUNT(*) AS total_produtos      FROM produtos;
-- SELECT COUNT(*) AS total_pedidos       FROM pedidos;
-- SELECT COUNT(*) AS total_itens         FROM itens_pedido;
-- SELECT COUNT(*) AS total_notas         FROM notas_fiscais;

-- =========================================================
-- FIM DO SCRIPT
-- =========================================================
