-- =========================================================
-- Arquivo: ecommerce_treino_postgresql.sql
-- Objetivo: Base didática de e-commerce para treino de SQL
-- SGBD: PostgreSQL
-- Observação:
--   - Gera dados fictícios para consultas didáticas.
--   - Clientes ficam apenas em cidades do estado de São Paulo.
--   - Fornecedores podem ser de todo o Brasil.
--   - O script usa generate_series e random().
-- =========================================================

-- =========================================================
-- 1) LIMPEZA DAS TABELAS
-- =========================================================

DROP TABLE IF EXISTS notas_fiscais CASCADE;
DROP TABLE IF EXISTS itens_pedido CASCADE;
DROP TABLE IF EXISTS pedidos CASCADE;
DROP TABLE IF EXISTS produtos CASCADE;
DROP TABLE IF EXISTS categorias CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;
DROP TABLE IF EXISTS funcionarios CASCADE;
DROP TABLE IF EXISTS fornecedores CASCADE;
DROP TABLE IF EXISTS clientes CASCADE;

-- =========================================================
-- 2) CRIAÇÃO DAS TABELAS
-- =========================================================

CREATE TABLE clientes (
    id_cliente      SERIAL PRIMARY KEY,
    nome            VARCHAR(120) NOT NULL,
    email           VARCHAR(120) UNIQUE NOT NULL,
    telefone        VARCHAR(20),
    cpf             VARCHAR(14) UNIQUE NOT NULL,
    cidade          VARCHAR(80) NOT NULL,
    estado          CHAR(2) NOT NULL DEFAULT 'SP',
    data_cadastro   DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE fornecedores (
    id_fornecedor   SERIAL PRIMARY KEY,
    razao_social    VARCHAR(150) NOT NULL,
    nome_fantasia   VARCHAR(120),
    cnpj            VARCHAR(18) UNIQUE NOT NULL,
    cidade          VARCHAR(80) NOT NULL,
    estado          CHAR(2) NOT NULL,
    email           VARCHAR(120),
    telefone        VARCHAR(20)
);

CREATE TABLE funcionarios (
    id_funcionario  SERIAL PRIMARY KEY,
    nome            VARCHAR(120) NOT NULL,
    cargo           VARCHAR(80) NOT NULL,
    salario         NUMERIC(10,2) NOT NULL,
    cidade          VARCHAR(80) NOT NULL,
    estado          CHAR(2) NOT NULL DEFAULT 'SP',
    data_admissao   DATE NOT NULL
);

CREATE TABLE usuarios (
    id_usuario      SERIAL PRIMARY KEY,
    login           VARCHAR(50) UNIQUE NOT NULL,
    senha           VARCHAR(120) NOT NULL,
    perfil          VARCHAR(30) NOT NULL,
    ativo           BOOLEAN NOT NULL DEFAULT TRUE,
    id_funcionario  INT NOT NULL UNIQUE,
    CONSTRAINT fk_usuario_funcionario
        FOREIGN KEY (id_funcionario)
        REFERENCES funcionarios(id_funcionario)
);

CREATE TABLE categorias (
    id_categoria    SERIAL PRIMARY KEY,
    nome_categoria  VARCHAR(80) UNIQUE NOT NULL
);

CREATE TABLE produtos (
    id_produto      SERIAL PRIMARY KEY,
    nome_produto    VARCHAR(150) NOT NULL,
    preco           NUMERIC(10,2) NOT NULL,
    estoque         INT NOT NULL,
    id_categoria    INT NOT NULL,
    id_fornecedor   INT NOT NULL,
    CONSTRAINT fk_produto_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categorias(id_categoria),
    CONSTRAINT fk_produto_fornecedor
        FOREIGN KEY (id_fornecedor)
        REFERENCES fornecedores(id_fornecedor)
);

CREATE TABLE pedidos (
    id_pedido       SERIAL PRIMARY KEY,
    id_cliente      INT NOT NULL,
    id_usuario      INT NOT NULL,
    data_pedido     DATE NOT NULL,
    status          VARCHAR(30) NOT NULL,
    valor_total     NUMERIC(12,2) NOT NULL DEFAULT 0,
    CONSTRAINT fk_pedido_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES clientes(id_cliente),
    CONSTRAINT fk_pedido_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)
);

CREATE TABLE itens_pedido (
    id_item         SERIAL PRIMARY KEY,
    id_pedido       INT NOT NULL,
    id_produto      INT NOT NULL,
    quantidade      INT NOT NULL,
    preco_unitario  NUMERIC(10,2) NOT NULL,
    subtotal        NUMERIC(12,2) NOT NULL,
    CONSTRAINT fk_item_pedido
        FOREIGN KEY (id_pedido)
        REFERENCES pedidos(id_pedido),
    CONSTRAINT fk_item_produto
        FOREIGN KEY (id_produto)
        REFERENCES produtos(id_produto)
);

CREATE TABLE notas_fiscais (
    id_nota_fiscal  SERIAL PRIMARY KEY,
    id_pedido       INT NOT NULL UNIQUE,
    numero_nota     VARCHAR(20) UNIQUE NOT NULL,
    data_emissao    DATE NOT NULL,
    valor_nota      NUMERIC(12,2) NOT NULL,
    CONSTRAINT fk_nf_pedido
        FOREIGN KEY (id_pedido)
        REFERENCES pedidos(id_pedido)
);

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
-- 4) GERAÇÃO DE 1.000 CLIENTES
--    Todos os clientes em cidades do estado de São Paulo.
-- =========================================================

INSERT INTO clientes (nome, email, telefone, cpf, cidade, estado, data_cadastro)
SELECT
    'Cliente ' || gs AS nome,
    'cliente' || gs || '@email.com' AS email,
    '(11)9' || LPAD((10000000 + gs)::text, 8, '0') AS telefone,
    LPAD(gs::text, 11, '0') AS cpf,
    (
        ARRAY[
            'São Paulo','Campinas','Santos','Sorocaba','Ribeirão Preto',
            'São José dos Campos','Santo André','Osasco','Bauru','São José do Rio Preto',
            'Mogi das Cruzes','Jundiaí','Piracicaba','Praia Grande','Guarulhos'
        ]
    )[1 + floor(random()*15)::int] AS cidade,
    'SP' AS estado,
    CURRENT_DATE - ((random()*730)::int) AS data_cadastro
FROM generate_series(1, 1000) AS gs;

-- =========================================================
-- 5) GERAÇÃO DE 1.000 FORNECEDORES
--    Fornecedores distribuídos por várias UF do Brasil.
-- =========================================================

INSERT INTO fornecedores (razao_social, nome_fantasia, cnpj, cidade, estado, email, telefone)
SELECT
    'Fornecedor ' || gs || ' LTDA' AS razao_social,
    'Fantasia ' || gs AS nome_fantasia,
    LPAD((10000000000000 + gs)::text, 14, '0') AS cnpj,
    (
        ARRAY[
            'São Paulo','Rio de Janeiro','Belo Horizonte','Curitiba','Porto Alegre',
            'Florianópolis','Salvador','Recife','Fortaleza','Brasília',
            'Manaus','Goiânia','Belém','Vitória','Natal'
        ]
    )[1 + floor(random()*15)::int] AS cidade,
    (
        ARRAY[
            'SP','RJ','MG','PR','RS','SC','BA','PE','CE','DF',
            'AM','GO','PA','ES','RN'
        ]
    )[1 + floor(random()*15)::int] AS estado,
    'fornecedor' || gs || '@empresa.com' AS email,
    '(11)3' || LPAD((1000000 + gs)::text, 7, '0') AS telefone
FROM generate_series(1, 1000) AS gs;

-- =========================================================
-- 6) GERAÇÃO DE 1.000 FUNCIONÁRIOS
-- =========================================================

INSERT INTO funcionarios (nome, cargo, salario, cidade, estado, data_admissao)
SELECT
    'Funcionário ' || gs AS nome,
    (
        ARRAY[
            'Vendedor','Analista','Supervisor','Gerente',
            'Assistente','Coordenador','Estoquista','Financeiro'
        ]
    )[1 + floor(random()*8)::int] AS cargo,
    ROUND((2000 + random()*12000)::numeric, 2) AS salario,
    (
        ARRAY[
            'São Paulo','Campinas','Santos','Sorocaba',
            'Guarulhos','Osasco','Santo André','Jundiaí'
        ]
    )[1 + floor(random()*8)::int] AS cidade,
    'SP' AS estado,
    CURRENT_DATE - ((random()*2000)::int) AS data_admissao
FROM generate_series(1, 1000) AS gs;

-- =========================================================
-- 7) GERAÇÃO DE 1.000 USUÁRIOS
--    Um usuário para cada funcionário.
-- =========================================================

INSERT INTO usuarios (login, senha, perfil, ativo, id_funcionario)
SELECT
    'user' || id_funcionario AS login,
    md5('senha' || id_funcionario) AS senha,
    (
        ARRAY['admin','vendas','financeiro','estoque']
    )[1 + floor(random()*4)::int] AS perfil,
    (random() > 0.10) AS ativo,
    id_funcionario
FROM funcionarios;

-- =========================================================
-- 8) GERAÇÃO DE 1.000 PRODUTOS
-- =========================================================

INSERT INTO produtos (nome_produto, preco, estoque, id_categoria, id_fornecedor)
SELECT
    'Produto ' || gs AS nome_produto,
    ROUND((10 + random()*5000)::numeric, 2) AS preco,
    (random()*300)::int AS estoque,
    1 + floor(random()*10)::int AS id_categoria,
    1 + floor(random()*1000)::int AS id_fornecedor
FROM generate_series(1, 1000) AS gs;

-- =========================================================
-- 9) GERAÇÃO DE 1.000 PEDIDOS
-- =========================================================

INSERT INTO pedidos (id_cliente, id_usuario, data_pedido, status, valor_total)
SELECT
    1 + floor(random()*1000)::int AS id_cliente,
    1 + floor(random()*1000)::int AS id_usuario,
    CURRENT_DATE - ((random()*365)::int) AS data_pedido,
    (
        ARRAY['ABERTO','PAGO','CANCELADO','FATURADO','ENVIADO']
    )[1 + floor(random()*5)::int] AS status,
    0 AS valor_total
FROM generate_series(1, 1000);

-- =========================================================
-- 10) GERAÇÃO DE 3.000 ITENS DE PEDIDO
-- =========================================================

INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco_unitario, subtotal)
SELECT
    1 + floor(random()*1000)::int AS id_pedido,
    p.id_produto,
    x.qtd AS quantidade,
    p.preco AS preco_unitario,
    ROUND((x.qtd * p.preco)::numeric, 2) AS subtotal
FROM (
    SELECT
        1 + floor(random()*1000)::int AS id_produto,
        1 + floor(random()*5)::int AS qtd
    FROM generate_series(1, 3000)
) AS x
JOIN produtos p
    ON p.id_produto = x.id_produto;

-- =========================================================
-- 11) ATUALIZAÇÃO DO VALOR TOTAL DOS PEDIDOS
-- =========================================================

UPDATE pedidos p
SET valor_total = sub.total
FROM (
    SELECT
        id_pedido,
        ROUND(SUM(subtotal)::numeric, 2) AS total
    FROM itens_pedido
    GROUP BY id_pedido
) AS sub
WHERE p.id_pedido = sub.id_pedido;

-- =========================================================
-- 12) GERAÇÃO DE NOTAS FISCAIS
--    Apenas para pedidos com valor total maior que zero.
-- =========================================================

INSERT INTO notas_fiscais (id_pedido, numero_nota, data_emissao, valor_nota)
SELECT
    p.id_pedido,
    'NF-' || LPAD(p.id_pedido::text, 6, '0') AS numero_nota,
    p.data_pedido + ((random()*10)::int) AS data_emissao,
    p.valor_total AS valor_nota
FROM pedidos p
WHERE p.valor_total > 0;

-- =========================================================
-- 13) VIEWS DIDÁTICAS PARA NATURAL JOIN
-- =========================================================

CREATE OR REPLACE VIEW vw_pedido_cliente AS
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

CREATE OR REPLACE VIEW vw_nota_pedido AS
SELECT
    id_pedido,
    numero_nota,
    valor_nota
FROM notas_fiscais;

-- =========================================================
-- 14) CONSULTAS DIDÁTICAS
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
-- D) INTERSEÇÃO
-- Cidades que aparecem em clientes e funcionários
-- ---------------------------------------------------------
-- SELECT cidade
-- FROM clientes
-- INTERSECT
-- SELECT cidade
-- FROM funcionarios;

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
--     ROUND(SUM(p.valor_total)::numeric, 2) AS total_comprado
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
--     ROUND(SUM(ip.subtotal)::numeric, 2) AS total_vendido
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
-- 15) CONSULTAS DE CONFERÊNCIA DA CARGA
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
