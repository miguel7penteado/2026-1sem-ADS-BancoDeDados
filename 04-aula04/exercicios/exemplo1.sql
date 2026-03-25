DROP TABLE IF EXISTS cursos;
CREATE TABLE IF NOT EXISTS cursos
(
	nome varchar(200),
	duracao integer,
	coordenador varchar(200),
	cod_curso   integer
);

DROP TABLE IF EXISTS professores;
CREATE TABLE IF NOT EXISTS professores
(
	nome varchar(200),
	titulo varchar(50),
	cpf    integer
);

DROP TABLE IF EXISTS universidades ;
CREATE TABLE IF NOT EXISTS universidades
(
	nome varchar(200),
	cnpj bigint
);



DROP TABLE IF EXISTS disciplinas;
CREATE TABLE IF NOT EXISTS disciplinas
(
		nome varchar(200),
		codigo_disciplina integer
);

ALTER TABLE universidades add constraint primary key (cnpj);
ALTER TABLE cursos 	    ADD CONSTRAINT PRIMARY KEY (cod_curso);
ALTER TABLE professores ADD CONSTRAINT PRIMARY KEY (cpf);
ALTER TABLE disciplinas ADD CONSTRAINT PRIMARY KEY (codigo_disciplina);

ALTER TABLE cursos ADD COLUMN cnpj bigint;
ALTER TABLE cursos ADD CONSTRAINT foreign key (cnpj) references universidades(cnpj);

ALTER TABLE professores ADD COLUMN cnpj bigint;
ALTER TABLE professores ADD CONSTRAINT FOREIGN KEY (cnpj) references universidades(cnpj);

ALTER TABLE disciplinas ADD COLUMN cpf integer;
ALTER TABLE disciplinas ADD CONSTRAINT FOREIGN KEY (cpf) references professores(cpf);










