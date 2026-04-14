---
title: "ADS - Banco de dados e No-SQL - 2026 - Anotações de aula"
author: "Professor Miguél Suares"
date: "2026-04-14"
site: bookdown::bookdown_site
documentclass: book
bibliography: [book.bib]
url: your book url like https://bookdown.org/yihui/bookdown
cover-image: images/cover.jpg
description: |
  Este livreto reúne anotações, reflexões e conteúdos desenvolvidos ao longo das aulas da  disciplina Banco de Dados, ministrada pelo Professor Miguél Suares. Elaborado com base em experiências práticas, referências acadêmicas e diretrizes atualizadas sobre o tema, o material busca fornecer uma visão crítica e aplicada sobre análise de dados nas organizações contemporâneas.
link-citations: yes
github-repo: miguel7penteado/2026-1sem-ADS-BancoDeDados
---



# Sobre estas anotações {.unnumbered}

—————————————————————————————————————————————

Estas anotações são apenas lembretes das aulas expostas em sala, durante a disciplina de Banco de dados.

## ACESSO AO GITBOOK CELULAR

—————————————————————————————————————————————

#### <https://github.com/miguel7penteado/2026-1sem-ADS-BancoDeDados>

[![Endereço do Site da Disciplina no GITHUB](01-aula01/media/02-endereco-site-disciplina.jpg){width="534"}](https://github.com/miguel7penteado/2026-1sem-ADS-BancoDeDados)

## Leitores de formato de arquivo EPUB para SmartPhone

—————————————————————————————————————————————

### ANDROID

#### **Moon+ Reader**

[![Endereço app leitor Moon Reader Plus para ANDROID](01-aula01/media/03-endereco-moon-reader-plus.jpg)](https://play.google.com/store/apps/details?id=com.flyersoft.moonreader)

## Livros Texto da Disciplina

—————————————————————————————————————————————

### ["Fundamentos matemáticos para a ciência da computação Matemática Discreta e Suas Aplicações" da autora "**Judith L. Gersting**"](https://www.kufunda.net/publicdocs/Fundamentos%20matem%C3%A1ticos%20para%20a%20ci%C3%AAncia%20da%20computa%C3%A7%C3%A3o%20Matem%C3%A1tica%20Discreta%20e%20Suas%20Aplica%C3%A7%C3%B5es%20(Judith%20L.%20Gersting).pdf)

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| [![Fundamentos matemáticos para a ciência da computação Matemática Discreta e Suas Aplicações](01-aula01/media/livro0-Judith_Gersting.jpg)](https://www.kufunda.net/publicdocs/Fundamentos%20matem%C3%A1ticos%20para%20a%20ci%C3%AAncia%20da%20computa%C3%A7%C3%A3o%20Matem%C3%A1tica%20Discreta%20e%20Suas%20Aplica%C3%A7%C3%B5es%20(Judith%20L.%20Gersting).pdf) | [![Fundamentos matemáticos para a ciência da computação Matemática Discreta e Suas Aplicações](01-aula01/media/livro-judith_Gersting.jpg)](https://www.kufunda.net/publicdocs/Fundamentos%20matem%C3%A1ticos%20para%20a%20ci%C3%AAncia%20da%20computa%C3%A7%C3%A3o%20Matem%C3%A1tica%20Discreta%20e%20Suas%20Aplica%C3%A7%C3%B5es%20(Judith%20L.%20Gersting).pdf) |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

+-----------------------+---------------------------------------------------------------------------------+
| **Autor(es)**         | ### [**Judith L. Gersting**](https://en.wikipedia.org/wiki/Christopher_J._Date) |
+-----------------------+---------------------------------------------------------------------------------+
| **Editora**           | LTC                                                                             |
+-----------------------+---------------------------------------------------------------------------------+
| **Idioma**            | Português                                                                       |
+-----------------------+---------------------------------------------------------------------------------+
| **ISBN**              | 978-8521632597                                                                  |
+-----------------------+---------------------------------------------------------------------------------+
| **Formato**           | Capa dura                                                                       |
+-----------------------+---------------------------------------------------------------------------------+
| **Páginas**           | 749                                                                             |
+-----------------------+---------------------------------------------------------------------------------+
| **Código Biblioteca** |                                                                                 |
+-----------------------+---------------------------------------------------------------------------------+

### ["Introdução a sistemas de bancos de dados" do autor "**Christopher John Date**"](https://www.kufunda.net/publicdocs/Introdu%C3%A7%C3%A3o%20a%20Sistemas%20de%20Bancos%20de%20Dados%20(C.%20J.%20Date)%20(z-lib.org).pdf)

+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+
| [![C. J. Date - Instrodução a Sistemas de Banco de Dados](01-aula01/media/livro1-CJ-Date.jpg)](https://www.kufunda.net/publicdocs/Introdu%C3%A7%C3%A3o%20a%20Sistemas%20de%20Bancos%20de%20Dados%20(C.%20J.%20Date)%20(z-lib.org).pdf) | ![Acesso ao livro C. J. Date na internet](01-aula01/media/livro-cj-date_qr-code.jpg) |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+

+-----------------------+------------------------------------------------------------------------------------+
| **Autor(es)**         | ### [**Christopher John Date**](https://en.wikipedia.org/wiki/Christopher_J._Date) |
+-----------------------+------------------------------------------------------------------------------------+
| **Editora**           | LTC                                                                                |
+-----------------------+------------------------------------------------------------------------------------+
| **Idioma**            | Português                                                                          |
+-----------------------+------------------------------------------------------------------------------------+
| **ISBN**              | 978-85-352-8445-4                                                                  |
+-----------------------+------------------------------------------------------------------------------------+
| **Formato**           | Capa dura                                                                          |
+-----------------------+------------------------------------------------------------------------------------+
| **Páginas**           | 1623                                                                               |
+-----------------------+------------------------------------------------------------------------------------+
| **Código Biblioteca** |                                                                                    |
+-----------------------+------------------------------------------------------------------------------------+

### ["**Projeto de bancos de dados**" do autor "Carlos Alberto HEUSER"](https://drive.google.com/file/d/0B452rmbcudPSVFdCZ09vVkJUUUd2dlpMNS1vaEczUQ/view?pli=1&resourcekey=0-3MTcHlAYjPX6YSvBQGweUQ)

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| [![Livro "Projeto de Banco de Dados" do autor Carlos Alberto HEUSER](01-aula01/media/livro2-Carlos-Alberto-Heuser.jpg)](https://drive.google.com/file/d/0B452rmbcudPSVFdCZ09vVkJUUUd2dlpMNS1vaEczUQ/view?pli=1&resourcekey=0-3MTcHlAYjPX6YSvBQGweUQ) | [![QR-Code para acessar o livro "Projeto de Banco de Dados" do Carlos Alberto HEUSER na internet](01-aula01/media/livro_Heuser_qr-code.jpg)](https://drive.google.com/file/d/0B452rmbcudPSVFdCZ09vVkJUUUd2dlpMNS1vaEczUQ/view?pli=1&resourcekey=0-3MTcHlAYjPX6YSvBQGweUQ) |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

+-----------------------+-------------------------------------------------------------------------------------------+
| **Autor(es)**         | ### [Carlos Alberto HEUSER](https://www.inf.ufrgs.br/site/docente/carlos-alberto-heuser/) |
+-----------------------+-------------------------------------------------------------------------------------------+
| **Editora**           | Bookman                                                                                   |
+-----------------------+-------------------------------------------------------------------------------------------+
| **Idioma**            | Português                                                                                 |
+-----------------------+-------------------------------------------------------------------------------------------+
| **ISBN-10**           | 8577803821                                                                                |
+-----------------------+-------------------------------------------------------------------------------------------+
| **Formato**           | Impresso                                                                                  |
+-----------------------+-------------------------------------------------------------------------------------------+
| **Páginas**           | 282                                                                                       |
+-----------------------+-------------------------------------------------------------------------------------------+
| **Código Biblioteca** |                                                                                           |
+-----------------------+-------------------------------------------------------------------------------------------+

## Calendário das aulas

### Fevereiro de 2026

—————————————————————————————————————————————

+-------------+---------------+----------------+------------------------------------+
| Data        | Dia da Semana | Aulas          | Conteúdo                           |
+=============+===============+================+====================================+
| 10/02/2026  | Terça-Feira   | Aula Inaugural | Apresentação da disciplina         |
+-------------+---------------+----------------+------------------------------------+
| 17/02/2026  | Terça-Feira   | —              | **Carnaval – Não haverá aula**     |
+-------------+---------------+----------------+------------------------------------+
| 24/02/2026  | Terça-Feira   | Aula 2         | **Fundamentos de Bancos de Dados** |
+-------------+---------------+----------------+------------------------------------+

### Março de 2026

—————————————————————————————————————————————

+----------------+----------------+----------------+---------------------------------------------------------+
| Data           | Dia da Semana  | Aulas          | Conteúdo                                                |
+================+================+================+=========================================================+
| 03/03/2026     | Terça-Feira    | Aula 3         | **Modelagem de Banco de Dados (I)**                     |
+----------------+----------------+----------------+---------------------------------------------------------+
| 10/03/2026     | Terça-Feira    | Aula 4         | **Modelagem de Banco de Dados (II)**                    |
+----------------+----------------+----------------+---------------------------------------------------------+
| 17/03/2026     | Terça-Feira    | Aula 5         | **SQL - Operações Relacionais**                         |
+----------------+----------------+----------------+---------------------------------------------------------+
| 24/03/2026     | Terça-Feira    | Aula 6         | **Administração e Gerenciamento de Banco de Dados - 1** |
+----------------+----------------+----------------+---------------------------------------------------------+
| 31/03/2026     | Terça-Feira    | NP1            | **REVISÃO**                                             |
+----------------+----------------+----------------+---------------------------------------------------------+

### Abril de 2026

—————————————————————————————————————————————

+------------+---------------+-----------+-----------------------------------------+
| Data       | Dia da Semana | Aulas     | Conteúdo                                |
+============+===============+===========+=========================================+
| 07/04/2026 | Terça-Feira   | Aula 7    | **NP1**                                 |
+------------+---------------+-----------+-----------------------------------------+
| 14/04/2026 | Terça-Feira   | Aula 8    | **NoSQL**                               |
+------------+---------------+-----------+-----------------------------------------+
| 21/04/2026 | Terça-Feira   | —         | **Dia de Tiradentes – Não haverá aula** |
+------------+---------------+-----------+-----------------------------------------+
| 28/04/2026 | Terça-Feira   | Aula 9    | **Aplicação e operação CRUD - parte 1** |
+------------+---------------+-----------+-----------------------------------------+

### Maio de 2026

—————————————————————————————————————————————

+------------+---------------+-----------+-----------------------------------------+
| Data       | Dia da Semana | Aulas     | Conteúdo                                |
+============+===============+===========+=========================================+
| 05/05/2026 | Terça-Feira   | Aula 10   | **Aplicação e operação CRUD - parte 2** |
+------------+---------------+-----------+-----------------------------------------+
| 12/05/2026 | Terça-Feira   | Aula 11   | **Análise 1**                           |
+------------+---------------+-----------+-----------------------------------------+
| 19/05/2026 | Terça-Feira   | NP2       | **PROVA**                               |
+------------+---------------+-----------+-----------------------------------------+
| 26/05/2026 | Terça-Feira   | SUB       | **PROVA SUBSTITUTIVA**                  |
+------------+---------------+-----------+-----------------------------------------+

### Junho de 2026

—————————————————————————————————————————————

+------------+---------------+------------+--------------------------------+
| Data       | Dia da Semana | Aulas      | Conteúdo                       |
+============+===============+============+================================+
| 02/06/2026 | Terça-Feira   | Aula 12    | **Análise 2**                  |
+------------+---------------+------------+--------------------------------+
| 09/06/2026 | Terça-Feira   | EXA        | **EXAME – PROVA SUBSTITUTIVA** |
+------------+---------------+------------+--------------------------------+
| 16/06/2026 | Terça-Feira   | Aula 13    | **Análise 3**                  |
+------------+---------------+------------+--------------------------------+
| 23/06/2026 | Terça-Feira   | Aula 14    | **Análise 4**                  |
+------------+---------------+------------+--------------------------------+
| 30/06/2026 | Terça-Feira   | Aula 15    | Encerramento da disciplina     |
+------------+---------------+------------+--------------------------------+

## Alunos 2026 - 1o Semestre

—————————————————————————————————————————————

### Campus Chácara Santo Antônio

Nota técnica: fazendo servidor postgresql funcionar no windows, versão sem instalador:

# Postgres (Zip Version) Windows Starting Guide {.unnumbered}

Download postgresql from <https://www.enterprisedb.com/download-postgresql-binaries>;

Unzip it;

Open a cmd;

Enter into the ‘bin’ directory;

Init the database:

``` powershell
initdb.exe -D ../data –username=postgres –auth=trust
```

Start the database:

``` powershell
pg_ctl.exe start -D ../data
```

Open another cmd;

Enter into the ‘bin’ directory;

Log into the database:

``` cmd
psql.exe –username=postgres
```

Create a password for your user:

``` sql
ALTER USER postgres WITH PASSWORD ‘VeryVerySecret’;
```

Install adminpack extension:

``` sql
CREATE EXTENSION adminpack;
```

Reference: <https://feilerdev.wordpress.com/2017/12/05/installing-postgresql-on-windows-using-zip-archive-without-the-installer/>



<!--chapter:end:index.Rmd-->

---
output: 
  html_document: 
    highlight: tango
    theme: cerulean
    df_print: kable
---

# **Aula Inaugural**

#### **2026/10/02** {.unnumbered}

#### Professor **Miguél Suares** {.unnumbered}

## Disciplina: **Banco de Dados**

-   Curso: Análise e Desenvolvimento de Sistemas (ADS)
-   Período: **Noturno**
-   Turma: **1º semestre de 2026**
-   Campus: **Chácara Santo Antônio**

> "Dados são o novo petróleo." – Clive Humby!

------------------------------------------------------------------------

## 👨‍🏫 Sobre o Professor

-   Nome: Prof. Miguél Suares
-   Formação: Mestre em Engenharia da Computação e Energia da Agricultura
-   Experiência: +10 anos com bancos de dados relacionais e análise de dados
-   Contato: [miguel.penteado\@docente.unip.br](mailto:miguel.penteado@docente.unip.br)

------------------------------------------------------------------------

## 🎯 Objetivos da Disciplina

-   Compreender os fundamentos de bancos de dados

-   Modelar dados com diagramas ER

-   Implementar e consultar bases de dados com SQL

-   Utilizar ferramentas como MySQL, PostgreSQL, QGIS e R

-   Desenvolver raciocínio lógico para resolver problemas com dados

    ![](01-aula01/media/logos.jpg)

------------------------------------------------------------------------

## 📅 Calendário da Disciplina

| Data       | Aula    | Tema                          |
|------------|---------|-------------------------------|
| 04/08/2025 | Aula 1  | Aula Inaugural                |
| 11/08/2025 | Aula 2  | Fundamentos                   |
| 18/08/2025 | Aula 3  | Modelagem e Diagramas         |
| 25/08/2025 | Aula 4  | Administração e Gerenciamento |
| 01/09/2025 | Aula 5  | Aplicação CRUD                |
| 08/09/2025 | Aula 6  | MySQL                         |
| 15/09/2025 | **NP1** | **Prova**                     |
| 22/09/2025 | Aula 7  | Postgres                      |
| 29/09/2025 | Aula 8  | QGIS                          |
| 06/10/2025 | Aula 9  | RStudio                       |
| 13/10/2025 | Aula 10 | Análise I                     |
| 20/10/2025 | Aula 11 | Análise II                    |
| 27/10/2025 | Aula 12 | Análise III                   |
| 03/11/2025 | **NP2** | **Prova**                     |

------------------------------------------------------------------------

## 📚 Ementa Resumida

-   Introdução a bancos de dados relacionais (RDBMS)

-   Modelagem de dados (M.E.R.) e diagramas Entidade Relacionamento (D.E.R.)

-   Linguagem SQL: DDL, DML, DCL

-   Ferramentas: MySQL, PostgreSQL

-   Visualização geoespacial (QGIS)

-   Análise e exploração de dados (R e RStudio)

    ![](01-aula01/media/modelagem.jpg)

------------------------------------------------------------------------

## 📝 Avaliação

-   **Provas (NP1 + NP2)**
-   **Prova Substitutiva**
-   **Exame**

------------------------------------------------------------------------

## 🛠️ Ferramentas da Disciplina

-   **Servidores de Banco de Dados**: MySQL, PostgreSQL
-   **Servidores de Banco de Dados**: pgAdmin, MySQL Workbench, DBeaver\\
-   **Geoprocessamento**: QGIS\\
-   **Análise de Dados**: R + RStudio\\
-   **Versionamento e Organização**: GitHub, Teams

------------------------------------------------------------------------

## 📌 Expectativas e Regras

-   Pontualidade e entrega de atividades no prazo
-   Trabalhos devem ser originais (sem plágio)
-   Participação ativa nas discussões e práticas
-   Uso responsável das ferramentas
-   Respeito e colaboração entre colegas

------------------------------------------------------------------------

## 💡 Dicas para Mandar Bem

-   Faça os exercícios logo após a aula
-   Participe das práticas com base real
-   Mantenha o repositório do projeto atualizado
-   Refaça consultas SQL até entender
-   Teste e documente suas soluções

------------------------------------------------------------------------

## 🙌 Encerramento

## Estamos prontos?

📧 Dúvidas? Estou à disposição\
📊 Vamos construir conhecimento juntos!





<!--chapter:end:01-2026-02-10_Inaugural.Rmd-->

---
output: 
  html_document: 
    highlight: tango
    theme: cerulean
    df_print: kable
---

# Fundamentos de Sistemas de Bancos de Dados

#### 24/02/2026 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}

## Parte I — Linha do Tempo dos SGBDs

> > > Onde posso obter a apresentação de sildes dessa aula ?
> > >
> > > ![](02-aula02/media/00-qr-code_aula02-pptx.jpg){width="338"}

### O Início do Modelo Relacional

### Edgar F. Codd (1923–2003)

![](02-aula02/media/01-codd.jpg)

-   Matemático da IBM
-   1970: Publica o artigo:

> [**“A Relational Model of Data for Large Shared Data Banks”**](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf) (Um modelo relacional de dados para grandes bancos de dados compartilhados)

Base matemática do modelo:

-   Teoria dos Conjuntos
-   Lógica de Predicados
-   Álgebra Relacional

### System R e SQL

-   1970–1974: Desenvolvimento do **System R**
-   1974: Criação da linguagem **SQL**

+-----------------------------------+-------------------------------------------------------------+
| ### Raymond F. Boyce (SQL)        | ### Donald D. Chamberlin (SQL)                              |
+===================================+=============================================================+
| ![](02-aula02/media/05-Boyce.jpg) | ![](02-aula02/media/05-Donald_Chamberlain.jpg){width="342"} |
+-----------------------------------+-------------------------------------------------------------+

### Modelo Entidade-Relacionamento

### Prof Peter Chen

![](02-aula02/media/05-Peter_Chen.jpg){width="214"}

![](02-aula02/media/modelagem.jpg)

-   1976: Modelo ER
-   Ponte entre modelagem conceitual e implementação relacional

### Escola de Berkeley

### Prof Michael Stonebraker

![](02-aula02/media/07-Michael_StoneBraker.jpg)

-   Projeto INGRES
-   Origem do Postgres

### Décadas de Consolidação

#### 1980 - Grandes Sistemas de Gerênciamento de Banco de Dados COMERCIAIS

-   IBM DB2
-   Oracle
-   Sybase/Microsoft SQL SERVER

#### 1990 - Sistemas de Gerênciamento de Banco de Dados "POPULARES"

-   PostgreSQL
-   MySQL

![](02-aula02/media/09-mysql.jpg){width="389"} ![](02-aula02/media/10-postgresql.jpg){width="291"}

### Anos 2000 — Big Data e NoSQL

![](02-aula02/media/11-mongodb.jpg){width="170"} ![](02-aula02/media/12-cassandra.jpg){width="130"} ![](02-aula02/media/13-hadoop.jpg){width="306"}

## Parte II — Fundamentos Matemáticos do Modelo Relacional

Agora entramos na base formal que sustenta os SGBDs.

Os conceitos a seguir estão no **Capítulo 5** do livro *"**Fundamentos matemáticos para a ciência da computação Matemática Discreta e Suas Aplicações**" da autora "**Judith L. Gersting**"*

![Fundamentos matemáticos para a ciência da computação Matemática Discreta e Suas Aplicações" da autora "Judith L. Gersting](02-aula02/media/livro0-Judith_Gersting.jpg)

## 1. Conceito de Relação

Codd queria utilizar a Matemática, mais específicamente, a teoria de conjuntos para criar um Sistema de Banco de Dados. A Matemática trataria de garantir a consistência dos dados armazenados.

+--------------------+-------------+--------------------------------------------+
| Operação           | Símbolo     | Descrição                                  |
+====================+=============+============================================+
| União              | ∪           | Elementos que pertencem a A ou B           |
+--------------------+-------------+--------------------------------------------+
| Interseção         | ∩           | Elementos comuns a A e B                   |
+--------------------+-------------+--------------------------------------------+
| Diferença          | −           | Elementos de A que não pertencem a B       |
+--------------------+-------------+--------------------------------------------+
| Produto Cartesiano | ×           | Conjunto de todos os pares ordenados (a,b) |
+--------------------+-------------+--------------------------------------------+

Inicialmente a idéia era associar conjuntos de dados e garantir a consistência da informação. Assim nasceu o conceito de **RELAÇÃO**

Sejam dois conjuntos A e B.

O **produto cartesiano** é:

```         
A × B = { (a,b) | a ∈ A e b ∈ B }
```

Uma **relação R de A em B** é qualquer subconjunto de A × B.

```         
R ⊆ A × B
```

*(lembrando que o simbolo "⊆" significa "está contido em" ou "é subconjunto de")*

#### Exemplo 1.

Uma website vende camisetas **básicas** e camisetas **esportivas** nos tamanhos **pequeno**, **médio** e **grande**. Usando matemática, coloque as camisetas no **conjunto A** e os tamanhos no **conjunto B**. Utilize o **produto cartesiano** para gerar toda a **grade de camisetas e tamanhos** na página do website.

<div class="figure">
<img src="01-aula01/media/latex/aula02-exemplo-01-1.png" alt="Camisetas X Tamanhos" width="672" />
<p class="caption">(\#fig:aula02-exemplo-01)Camisetas X Tamanhos</p>
</div>

No exemplo anterior, o conjunto C foi criado fazendo produto cartesiano de A x B. O **conjunto C** é uma **Relação.**

Contudo as operações da teoria dos conjuntos da matemática não eram suficientes para resolver algumas situações:

#### Exemplo 2.

Considere uma **cadastro de países** denominado **conjunto A = {Brasil, Argentina, Chile }** e um **cadastro de capitais** chamado **conjunto B = {Brasilia, Buenos Aires, Santiago}**. `Verifique se é possível` criar um **conjunto C** utilizando o **produto cartesiano** entre **A x B**, ou seja, uma **Relação**. Nesta **relação C**, **`cada país deve estar associado a sua capital`**.

<div class="figure">
<img src="01-aula01/media/latex/aula02-exemplo-02-1.png" alt="Capital X Países" width="672" />
<p class="caption">(\#fig:aula02-exemplo-02)Capital X Países</p>
</div>

Verificando a operação de **produto cartesiano** que gerou o **conjunto C** produziu **9 pares ordenados**. Mas para nosso contexto (**associar países e suas capitais**) dos **9 pares** gerados, apenas **`3 pares ordenados fazem sentido`**: C= {(**Brasil, Brasilia**), (**Argentina, Buenos Aires**), (**Chile, Santiago**)} ; os outros **6 pares não fazem sentido** na associação de Países e Capitais.

Portanto, para este contexto, apenas a operação de produto cartesiano não atendeu os requisitos para gerar um conjunto de dados consistente a partir de dois cadastros (dois conjuntos) fornecidos.

### A Solução vem da Matemática: FUNÇÕES como RELACIONAMENTOS:

Uma **função** é uma relação especial entre dois conjuntos.

Sejam ( A ) e ( B ) conjuntos.

Uma função

$f: A \to B$

é um subconjunto do produto cartesiano

$f \subseteq A \times B$

em bom português: \>\> Uma função f(x) é uma regra que associa cada elemento de A a exatamente um elemento de B.

As funções f(x) agem como uma filtragem para selecionar do produto cartesiano apenas os pares de elementos que fazem sentido:

As funções podem ser vistas como setas mapeando cada ponto de um conjunto no outro.

No exemplo da loja de camisetas, temos cada elemento do "conjunto A" mapeando todos os elementos do "conjunto B". É a representação gráfica do produto cartesiano e seus pares ordenados.

<div class="figure">
<img src="01-aula01/media/latex/aula02-exemplo-03-1.png" alt="camisetas X Tamanhos" width="672" />
<p class="caption">(\#fig:aula02-exemplo-03)camisetas X Tamanhos</p>
</div>

No exemplo dos países e suas capitais, temos um elemento do "conjunto A" mapeando um elemento do "conjunto B". É um subconjunto do produto cartesiano de A X B, ou seja, uma filtragem aplicada ao produto cartesiano. Na terminologia das funções, é uma função bijetora.

<div class="figure">
<img src="01-aula01/media/latex/aula02-exemplo-04-1.png" alt="Países X Capitais" width="672" />
<p class="caption">(\#fig:aula02-exemplo-04)Países X Capitais</p>
</div>

Conclusão de Codd: apenas as operações convencionais da teoria de conjuntos não seria suficiente para projetar sistema de banco de dados. Seria necessária a adição de elementos teoria das funções aplicada a teoria das relações.

Professor Codd cria as operações de Algebra Relacional associada a Relações.

Nasce o conceito de Banco de Dados Relacional e os conceitos que irão criar a linguagem SQL (Structured Query Language).

### Relação em Banco de Dados

Considere:

| Terminologia Relacional | Banco de Dados | Origem Matemática |
|:--:|:--:|:--:|
| RELAÇÃO | **TABELA** | CONJUNTO ou SUBCONJUNTO |
| ATRIBUTO | **COLUNAS** | Não aparece explicitamente |
| TUPLA | **LINHA** | ELEMENTO DO CONJUNTO OU PAR ORDENADO |

## 2. Operações Relacionais

Baseadas na Álgebra Relacional de Codd.

| Operação           | Símbolo | Descrição                    |
|--------------------|---------|------------------------------|
| Seleção            | σ       | Filtra linhas                |
| Projeção           | π       | Seleciona colunas            |
| União              | ∪       | Combina relações compatíveis |
| Interseção         | ∩       | Elementos comuns             |
| Diferença          | −       | Subtração                    |
| Produto Cartesiano | ×       | Combinação total             |
| Junção             | ⋈       | Produto + Seleção            |
| Divisão            | ÷       | Consulta universal           |

Todas as operações Relacionais são operações SQL e serão estudadas na aula 4 (Modelagem parte 2).

## 3. Propriedades de Relações

Seja R ⊆ A × A.

### 3.1 Reflexiva

"Todo elemento é equivalente a si mesmo"

```         
∀x ∈ A, (x,x) ∈ R
```

#### Exemplo "Cadastro de Produtos - Popriedade "Reflexiva" da Relação:

Em um cadastro de produtos, o produto Teclado tem a mesma categoria que o produto Teclado (ele mesmo). Consequentemente, em uma tabela do Banco de Dados, o valor da coluna "CategoriaID" de um registro é sempre igual ao "CategoriaID" dele mesmo.

![](02-aula02/media/20-teclado-1.jpg)

### 3.2 Simétrica

"Se o **primeiro equivale ao segundo**, então o **segundo equivale ao primeiro**"

```         
Se (x,y) ∈ R então (y,x) ∈ R
```

#### Exemplo: "Cadastro de Produtos - Popriedade "Simétrica" da Relação:

Se o **Teclado** (1) **é equivalente** ao **Mouse** (2) (ambos são da categoria **Eletrônicos**), então o **Mouse** (2) **é equivalente** ao **Teclado** (1). Consequentemente, no Banco de Dados, **Teclado.CategoriaID** = **Mouse.CategoriaID.**

![](02-aula02/media/21-teclado-mouse.jpg)

Essa propriedade é utilizada para fazer "pareamento" entre tabelas.

### 3.3 Transitiva

"Se o **primeiro equivale ao segundo**, e o **segundo equivale ao terceiro**", então **primeiro equivale ao terceiro."**

```         
Se (x,y) ∈ R e (y,z) ∈ R então (x,z) ∈ R
```

#### Exemplo: "Cadastro de Produtos - Popriedade "Transitiva" da Relação:

Se **Teclado** (1) **é equivalente** ao **Mouse** (2) e **Mouse** (2) **é equivalente** ao **Monitor** (3), então obrigatoriamente **Teclado** (1) **é equivalente** ao **Monitor** (3), **pois todos são da categoria "Eletrônicos"**.

+-------------------------------------------+-------------------------------------------+---------------------------------------------+
| ![](02-aula02/media/21-teclado-mouse.jpg) | ![](02-aula02/media/22-mouse-monitor.jpg) | ![](02-aula02/media/23-teclado-monitor.jpg) |
+-------------------------------------------+-------------------------------------------+---------------------------------------------+

Isso garante que todos os elementos de uma categoria formem um grupo fechado e coeso.

### 3.4 Antissimétrica

"Se o **primeiro equivale ao segundo**, então o **segundo NÃO PODE equivaler ao primeiro**"

```         
Se (x,y) ∈ R e (y,x) ∈ R então x = y
```

#### Exemplo: "Cadastro de Funcionários - Popriedade "Anti-Simétrica" da Relação:

Se o **João é gerente da Maria**, a **Maria NÃO PODE ser gerente do João**. Em uma tabela de funcionários, o Banco de dados garante HIERARQUIA na regra de negócio.

![](02-aula02/media/24-joao-maria.jpg)

## 4. Relação de Equivalência

Uma relação é de equivalência se é:

-   Reflexiva
-   Simétrica
-   Transitiva

#### Exemplo: "Cadastro de Produtos - "Teste de Relação e Equivalência":

Tenho uma tabela de produtos. Todos os produtos estão classificados em categorias. Prove nesta tabela que 2 produtos são equivalentes.

|                   |                     |                          |
|-------------------|---------------------|--------------------------|
| **ID (Elemento)** | **Nome do Produto** | **CategoriaID (Classe)** |
| 1                 | Teclado             | 1 (Eletrônicos)          |
| 2                 | Mouse               | 1 (Eletrônicos)          |
| 3                 | Monitor             | 1 (Eletrônicos)          |
| 4                 | Camisa              | 2 (Vestuário)            |
| 5                 | Calça               | 2 (Vestuário)            |
| 6                 | Tênis               | 2 (Vestuário)            |
| 7                 | Livro SQL           | 3 (Livraria)             |
| 8                 | Livro Java          | 3 (Livraria)             |
| 9                 | Livro Redes         | 3 (Livraria)             |
| 10                | Cadeira             | 4 (Móveis)               |
| 11                | Mesa                | 4 (Móveis)               |
| 12                | Sofá                | 4 (Móveis)               |

##### Resolução:

"Dois produtos são equivalentes se pertencerem à mesma categoria."

"Dois produtos não são equivalentes se pertencerem a categorias diferentes."

Para provar isso, é preciso testar as 3 propriedades de relações (Reflexiva, Simétrica e Transitiva) em relação ao ponto comum entre eles, que é no caso "categoria".

Tomarei como exemplo "Cadeira, Mesa, Sofá". Analisarei segundo a caracteristica comum "categoria":

-   Reflexiva - Cadeira é da mesma categoria que cadeira ? Sim - OK

-   Simétrica - Cadeira é da mesma categoria que mesa e Mesa é da mesma categoria que Cadeira ? Sim - OK

-   Transitiva - Cadeira é da mesma categoria que mesa; Mesa é da mesma categira que sofá; portanto cadeira é da mesma categoria que sofá ? Sim - OK

Considerando que cadeira, mesa e sofá atendem as propriedades "Reflexiva", "Simétrica" e "Transitiva", então "Cadeira, Mesa, Sofá" constituem a mesma classe de equivalencia.

### Classes de Equivalência

Dada relação \~ em A:

A classe de equivalência de x é:

```         
[x] = { y ∈ A | y ~ x }
```

Exemplo em uma relação de Banco de Dados formada pelo `conjunto A Produtos` e pelo `conjunto B Categorias`:

R ⊆ A × B :

<div class="figure">
<img src="01-aula01/media/latex/aula02-exemplo-05-1.png" alt="Produtos X Categorias" width="672" />
<p class="caption">(\#fig:aula02-exemplo-05)Produtos X Categorias</p>
</div>

Chamamos de *Classes de Equivalência* todas as *relações de equivalência* que se formam dentro da Relação.

São as "panelinhas" que se formam dentro do conjunto.

No nosso exemplo temas as seguintes Classes de Equivalência:

+----------------------+----------------------+--------------------------------------------------------------------------------------+
| Classe               | Categoria            | Pares Ordenados                                                                      |
+======================+======================+======================================================================================+
| 1                    | Eletrônicos          | 1\. (Teclado, Eletrônicos)<br>2. (Mouse, Eletrônicos)<br>3. (Monitor, Eletrônicos)   |
+----------------------+----------------------+--------------------------------------------------------------------------------------+
| 2                    | Vestuário            | 1\. (Camisa, Vestuário)<br>2. (Calça, Vestuário)<br>3. (Tênis, Vestuário)            |
+----------------------+----------------------+--------------------------------------------------------------------------------------+
| 3                    | Livraria             | 1\. (Livro SQL, Livraria)<br>2. (Livro Java, Livraria)<br>3. (Livro Redes, Livraria) |
+----------------------+----------------------+--------------------------------------------------------------------------------------+
| 4                    | Móveis               | 1\. (Cadeira, Móveis)<br>2. (Mesa, Móveis)<br>3. (Sofá, Móveis)                      |
+----------------------+----------------------+--------------------------------------------------------------------------------------+

Observações importantes:

1-As classes são *disjuntas*; 2-A *união das quatro classes* é exatamente a relação \$ R \$; 3-Cada *par ordenado* pertence a uma *única classe*;

## 5. Dependências Funcionais

São os atributos de uma relação (colunas de uma tabela) cujos valores determinam os valores de outras colunas.

Exemplo: Imagine a Relação (Tabela) chamada *CursoProgramacao*.

+----------+----------------+-----------+-----------------+--------------+------------+
| ID_Aluno | Nome_Aluno     | Cod_Curso | Nome_Curso      | ID_Instrutor | Nota_Final |
+==========+================+===========+=================+==============+============+
| 10       | Alan Turing    | SQL-01    | Banco de Dados  | 500          | 9.5        |
+----------+----------------+-----------+-----------------+--------------+------------+
| 20       | Ada Lovelace   | PY-02     | Python Avançado | 600          | 10.0       |
+----------+----------------+-----------+-----------------+--------------+------------+
| 10       | Alan Turing    | PY-02     | Python Avançado | 600          | 8.0        |
+----------+----------------+-----------+-----------------+--------------+------------+
| 30       | Grace Hopper   | SQL-01    | Banco de Dados  | 500          | 9.0        |
+----------+----------------+-----------+-----------------+--------------+------------+
| 40       | Linus Torvalds | JS-03     | JavaScript      | 700          | 7.5        |
+----------+----------------+-----------+-----------------+--------------+------------+

Considere as seguintes *Regras de Negócio*

-   Cada aluno tem apenas um nome oficial.

-   Cada código de curso pertence a apenas um nome de curso.

-   Cada curso é ministrado por apenas um instrutor específico (um instrutor não muda de curso).

-   Um aluno pode fazer vários cursos, e terá uma nota diferente para cada um.

Tendo estas informações identifique as DEPENDÊNCIAS FUNCIONAIS dos atributos da tabela.

Quais são os atributos da tabela?

+----------+------------+-----------+------------+--------------+------------+
| ID_Aluno | Nome_Aluno | Cod_Curso | Nome_Curso | ID_Instrutor | Nota_Final |
+==========+============+===========+============+==============+============+
|          |            |           |            |              |            |
+----------+------------+-----------+------------+--------------+------------+

1)  Quais destes atributos o valor identificam unicamente o valor de outro atributo?

| Atributo1 | Dependência Funcional |  Atributo2   | Resultado |
|:---------:|:---------------------:|:------------:|:---------:|
| ID_Aluno  |       determina       |  Nome_Aluno  |     ?     |
| Cod_Curso |       determina       |  Nome_Curso  |     ?     |
| Cod_Curso |       determina       | ID_Instrutor |     ?     |
| ID_Aluno  |       determina       |  Nota_Final  |     ?     |

2)  Qual é a combinação de colunas necessária para determinar a *Nota_Final*?

### Resolução

1)  Quais destes atributos o valor identificam unicamente o valor de outro atributo?

+-------------+-----------------------+--------------+-------------+----------------------------------------------------------------------------------------------------------------+
| Atributo1   | Dependência Funcional | Atributo2    | Resultado   | Comentário                                                                                                     |
+:===========:+:=====================:+:============:+:===========:+================================================================================================================+
| ID_Aluno    | determina             | Nome_Aluno   | SIM         | ID_Aluno valendo "10" determina Nome_Aluno "Alan Turing"                                                       |
+-------------+-----------------------+--------------+-------------+----------------------------------------------------------------------------------------------------------------+
| Cod_Curso   | determina             | Nome_Curso   | SIM         | Cod_Curso valendo "SQL-01" determina Nome_Curso "Banco de Dados"                                               |
+-------------+-----------------------+--------------+-------------+----------------------------------------------------------------------------------------------------------------+
| Cod_Curso   | determina             | ID_Instrutor | SIM         | Pela regra de negócio #3, Cod_Curso determina ID_Instrutor. Aqui temos um caso especial de Dependência Parcial |
+-------------+-----------------------+--------------+-------------+----------------------------------------------------------------------------------------------------------------+
| ID_Aluno    | determina             | Nota_Final   | NÃO         | Olhe o Alan Turing (ID 10). Ele tem nota 9.5 e nota 8.0. ID_Aluno sozinho não determina a nota do aluno.       |
+-------------+-----------------------+--------------+-------------+----------------------------------------------------------------------------------------------------------------+

2)  Qual é a combinação de colunas necessária para determinar a *Nota_Final*?

Eu preciso saber QUEM (Aluno) e em QUAL MATÉRIA (Curso) para te dar a nota exata. A combinação dos atributos {ID_Aluno, Cod_Curso} determinam Nota_Final! Esta é um caso de *Dependência Total*.

## 6. Conceito de Fecho

Dado conjunto de atributos X e conjunto de dependências funcionais F:

O **fecho de X** (X⁺) é o conjunto de todos os atributos funcionalmente determinados por X.

Exemplo:

Dependências:

```         
A → B
B → C
```

Então:

```         
A⁺ = {A, B, C}
```

## Conexão Final — A Base Matemática do SGBD

| Conceito Matemático     | Aplicação em BD            |
|-------------------------|----------------------------|
| Relação                 | Tabela                     |
| Produto cartesiano      | Combinação de domínios     |
| Relação de equivalência | Particionamento por chave  |
| Fecho                   | Descoberta de dependências |
| Transitiva              | Análise de dependências    |
| Antissimétrica          | Ordem parcial              |
| Álgebra relacional      | SQL                        |

## Referências:

*GERSTING, Judith L.* Fundamentos matemáticos para a ciência da computação: matemática discreta e suas aplicações. 7. ed. Rio de Janeiro: LTC, *2017*. Tradução e revisão técnica de Valéria de Magalhães Iório. 884 p. ISBN 978-85-216-3259-7





<!--chapter:end:02-2026-02-24_Fubdamentos_SGBD-aula.Rmd-->

## Exercícios - Aula 02 








<!--chapter:end:02-2026-02-24_Fubdamentos_SGBD-exercicio.Rmd-->

---
output: 
  html_document: 
    highlight: tango
    theme: cerulean
    fig_caption: true
    css: style.css
---

# Modelagem de Bancos de Dados parte 01

#### 03/03/2026 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}

## Introdução: Visitando a teoria de Bancos de Dados

![](03-aula03/media/livro1-CJ-Date.jpg){width="375"}

> **Banco de Dados** Um banco de dados é uma coleção compartilhada de dados logicamente relacionados, projetada para atender às necessidades informacionais de uma organização. - *DATE, C. J. An Introduction to Database Systems. 8. ed. Boston: Addison-Wesley, 2003*.

Ou seja, alguns pontos-chave da definição de Date:

-   "Coleção de dados ..." → não é um conjunto de arquivos soltos, mas dados organizados.

-   "Compartilhada ..." → não pertence a apenas um usuário ou aplicação; é usada por vários.

-   "Dados logicamente relacionados ..." → os dados têm um relacionamento semântico, não são apenas agrupamentos arbitrários.

-   "Projetada para atender necessidades ..." → o banco existe para suportar os processos de uma organização (consultas, relatórios, controle, tomada de decisão).

![](03-aula03/media/07-tabela_relacional.jpg)

![](03-aula03/media/livro2-Silberchatz_Koth.jpg)

> **Banco de Dados Relacional** Um banco de dados relacional é um banco de dados baseado em um modelo de dados relacional, no qual os dados são representados como um conjunto de relações (tabelas), e cada relação consiste em tuplas (linhas) e atributos (colunas). - *SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. Database System Concepts. 6. ed. New York: McGraw-Hill, 2010.*

Agora, alguns pontos-chave da definição de *Abraham Silberschatz* :

-   Base no modelo relacional de Codd (1970).

-   Dados representados em tabelas (relações).

-   Cada tabela é composta de tuplas (linhas) e atributos (colunas).

-   Integridade garantida por restrições (chaves, integridade referencial, domínio de atributos).

-   Manipulação feita por linguagens relacionais (álgebra relacional, cálculo relacional, SQL).

O Banco de Dados Relacional organiza as informações em **tabelas bidiomensionais** constituídas de **linhas e colunas** chamadas e essas tabelas recebem o nome de **relações**. Cada **relação** possui um **campo-chave** que confere identificação exclusiva a cada registro da tabela.

## Modelo Matemático de um Banco de Dados

Considere um Banco de Dados para representar, com consistência Matemática os funcionários e Departamentos de uma Empresa.

### Podemos representa-lo matemáticamente utilizando a teoria dos conjuntos

<div class="figure">
<img src="2026-ADS-1sem-BancoDeDados_files/figure-html/tikz-diagrama0-1.png" alt="Diagrama de Montadoras, Veículos e Proprietários" width="672" />
<p class="caption">(\#fig:tikz-diagrama0)Diagrama de Montadoras, Veículos e Proprietários</p>
</div>

#### Edgard F Cood explica em sua obra "A Relational Model of Data for Large Shared Data Banks" como definir uma Banco de Dados compartilhado *matemáticamente*

> Um **banco de dados relacional** é um banco de dados no qual todos os dados são representados por meio de **relações (matematicamente, conjuntos de tuplas)**, e todas as operações sobre os dados são baseadas em operadores formais do cálculo relacional e da álgebra relacional. - *A Relational Model of Data for Large Shared Data Banks” (Communications of the ACM, vol. 13, n. 6, pp. 377–387, 1970).*

[![Professor Edgar Frank Codd - Universidade do Tenessi](03-aula03/media/01-codd.jpg){width="230"}](https://buttondown.com/jaffray/archive/in-codd-we-trust-or-not/)

### Então para podemos relacionar estes dois conjuntos (Funcionários e Departamentos) utilizando a Teoria das Funções

$$
\text{Edgard Frank Codd era um matemático tradicional} \\
\text{Considere o conseito de função: } \\
f(x) = Y \\
\text{era dessa forma que ele imaginava relacionamento e } \\
\text{ garantia matemática de CONSISTÊNCIA entre } \\
\text{ elementos de 2 conjuntos de dados diferentes }
$$

<div class="figure">
<img src="2026-ADS-1sem-BancoDeDados_files/figure-html/tikz-diagrama10-1.png" alt="Diagrama de Montadoras, Veículos e Proprietários" width="672" />
<p class="caption">(\#fig:tikz-diagrama10)Diagrama de Montadoras, Veículos e Proprietários</p>
</div>

Mas vai ficar faltando como representar os atributos nesse modelo (colunas das tabelas):

$$
\begin{array}{c| c | c}
\textbf{ Conjunto Funcionários}    & \textbf{ Relacionamento Trabalha} & \textbf{Conjunto Departamentos)} \\ 
\hline 
FULANO                             &  \quad TRABALHA                   & \quad RH \\
BELTRANO                           &  \quad TRABALHA                   & \quad FINANCEIRO \\
CICLANO                            &  \quad TRABALHA                   & \quad DEIRETORIA \\
\hline
\textbf{Total: 3 ELEMENTOS }       & \textbf{ CONECTADOS }             & \textbf{Total: 3 ELEMENTOS }
\end{array}
$$

Ainda, é necessário acrescentar algumas regras de integridade a representação;

## Modelo Lógico de Banco de Dados

### Modelo Conceitual "Entidade Relacionamento" de Banco de Dados

O Modelo Entidade-Relacionamento (MER), proposto por Peter Chen em 1976, é uma ferramenta fundamental na modelagem de dados. É um modelo de dados de alto nível que descreve a estrutura conceitual de um banco de dados. O Modelo Entidade-Relacionamento (MER) é representado graficamente através de um DER (Diagrama Entidade-Relacionamento).

[![Professor Peter Chen - universidade norte-americana de Luisiania](media/03-Peter_Chen.jpg)](https://personalidades-tecnologia.blogspot.com/2011/06/peter-pin-shan-chen-peter-pin-shan-chen.html)

É utilizado para projetar Bancos de Dados Relacionais a partir de entrevistas onde se descreve as informações que se deseja armazenar de forma consistente. Exemplo:

"*Desenhe um diagrama entidade-relacionamento DER contendo as entidades funcionarios e departamentos. A entidade "funcionários" possui os atributos "nome" e "CPF". A entidade "Departamentos" possui os atributos "Nome" e "sigla". O atributo "CPF" é chave primária da entidade "Funcionários". O atributo "sigla" é chave primária da entidade "Departamentos". As entidades "Funcionários" e "Departamentos" se relacionam através de um relacionamento chamado "Pertence"*."

![](images/Exemplo-01.svg)<!-- -->

Segundo Laudon

> **Diagrama Entidade/Relacionamento (DER)** é uma representação esquemática utilizada para entender as relações entre as tabelas de um banco de dados relacional. [[1] - LAUDON, Kenneth C.; LAUDON, Jane P. \*Sistemas de informação gerenciais\*. 11. ed. São Paulo: Pearson Education do Brasil, 2010. p. 180.]

### Composição e Significado do Diagrama Entidade Relacionamento (DER)

$$
\begin{array}{c| c | c}
\textbf{ NOME DO COMPONENTE}    & \textbf{Representação Gráfica}   & \textbf{ Liguagem Natural (texto)} \\ 
\hline 
ENTIDADE                        &  \quad RETÂNGULO                 & \quad SUBSTÃNTIVO \\
ATRIBUTO                        &  \quad ELÍPSE                    & \quad ADJETIVO \\
RELACIONAMENTO                  &  \quad LOSÂNGULO                 & \quad VERBO \\
\hline
\textbf{Total: 3 ELEMENTOS }    & \textbf{ FORMA GRÁFICA }         & \textbf{ FORMA MOFOLÓGICA GRAMATICAL }
\end{array}
$$

<div class="figure">
<img src="2026-ADS-1sem-BancoDeDados_files/figure-html/tikz-diagrama-DER-00-1.png" alt="Diagrama de Montadoras, Veículos e Proprietários" width="672" />
<p class="caption">(\#fig:tikz-diagrama-DER-00)Diagrama de Montadoras, Veículos e Proprietários</p>
</div>

## Modelo Físico de Banco de Dados

### Geração do modelo Físico para aplica-lo ao SGBD (Sistema de Gerenciamento de Banco de Dados):

Uma vez que o modelo conceitual seja gerado, o analista pode mapea-lo para um "modelo físico". Aqui, cada entidade irá gerar uma tebela, cada atributo irá originar uma coluna pertinente da tabela em questão e cada relacionamento irá mapear **chaves primárias** e **chaves forasteiras** nas tabelas interrelacionadas.

$$
\begin{array}{c| c | c}
\textbf{Componente Lógico}    & \textbf{ Componente Físico}   & \textbf{Liguagem Natural (texto)} \\ 
\hline 
ENTIDADE                        &  \quad TABELA               & \quad SUBSTÃNTIVO \\
ATRIBUTO                        &  \quad COLUNA               & \quad ADJETIVO \\
RELACIONAMENTO                  &  \quad CHAVE-ESTRANGEIRA    & \quad VERBO \\
\hline
\textbf{Diagrama Lógico DER }    & \textbf{ FORMA FÍSICA - SGBD }    & \textbf{ FORMA MOFOLÓGICA GRAMATICAL ORIGINAL }
\end{array}
$$

A ferramenta que irá criar as estruturas Físicas (tabelas, colunas, chaves) dentro do Banco de Dados é o Sistema de Gerenciamento de Banco de Dados através da linguagem **SQL**.

![](03-aula03/media/06-modelo_fisico.jpg)

### Interagindo com o Modelo Físico - A linguagem SQL (Structured Query Language)

A linguagem SQL foi criada nos laboratórios da IBM em 1974, como interface de manipulação ao Bando de Dados Relacional System-R , atualmente denominado IBM DB2. Os criadores foram engenheiros de sistemas que sucederam o professor Edgard Frank Codd no projeto de Banco de Dados Relacional: **Donald Chamberlain** e **Raymond Boyce**.

+---------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| ![Donald Chamberlain - Criador da linguagem SQL nos laboratórios da IBM](03-aula03/media/04-Donald_Chamberlain.jpg) | ![Raymond Boyce - Criador da linguagem SQL nos laboratórios da IBM](03-aula03/media/04-Raymond_Boyce.jpg){width="240"} |
+---------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+

A lingauem SQL é a ponte com o mundo exterior para um Sistema de Gerenciamento de Banco de Dados (SGBD). Os conjunto de comandos da linguagem SQL são divididos em 3 grandes grupos:

$$
\begin{array}{c| c | c}
\textbf{GRUPO}    & \textbf{ Comandos}   & \textbf{Finalidade} \\ 
\hline 
Grupo \ DDL         &  \quad \ Data \ Definion \ Language        & \quad Criar \ estruturas \ de \ dados \\
Grupo \ DML         &  \quad \ Data \ Manipulation \ Language    & \quad Manipular \ dados \ armazenados \\
Grupo \ DCL         &  \quad \ Data \ Control \ Language         & \quad Criar \ Regras \ para \ os \ dados \\
Grupo \ TCL         &  \quad \ Transaction \ Control \ Language  & \quad Criar \ Transações \ para \ os \ dados \\
\hline
\textbf{Subconjunto SQL }    & \textbf{ Significado }    & \textbf{ Conjunto Completo }
\end{array}
$$

Comandos exemplo:

$$
\begin{array}{c| c }
\textbf{GRUPO}    & \textbf{ Comandos}    \\ 
\hline 
Grupo \ DDL         &  \quad  CREATE, \quad ALTER,\quad DROP \ \        \\
Grupo \ DML         &  \quad SELECT, \quad INSERT, \quad UPDATE, \quad DELETE, \quad JOIN    \\
Grupo \ DCL         &  \quad GRANT, \quad REVOKE  \\
Grupo \ TCL         &  \quad COMMIT, \quad ROLLBACK, \quad SAVEPOINT   \\
\hline
\textbf{Subconjunto SQL }    & \textbf{ Significado }     
\end{array}
$$

O código abaixo escrito em Lingauem SQL padrão transfere para o modelo físico o modelo lógico anterior:

![](images/Exemplo-01-continuação.svg)<!-- -->

Transformando em SQL - EQUIVALENTE:

``` sql
-- Exemplo testado e gerado no SGBD Postgres versão 15

-- Tabela Funcionários
CREATE TABLE IF NOT EXISTS "public".funcionarios
(
    cpf bigint NOT NULL,
    nome varchar(200)
);

-- Tabela Departamentos

CREATE TABLE IF NOT EXISTS "public".departamentos
(
    sigla integer NOT NULL,
    nome varchar(200)
);

-- Definindo a coluna "cpf" da tabela "funcionários" como chave primária
alter table "public".funcionarios add constraint "chave_primaria_funcionarios" primary key (cpf);

-- Definindo a coluna "sigla"" da tabela "departamentos" como chave primária
alter table "public".departamentos add constraint "chave_primaria_departamentos" primary key (sigla);

-- Gerando a integridade referêncial 
-- Importando a chave primária da tabela "departamentos" como "chave estrangeira"
-- na tabela "funcionários"

-- primeiro adiciona-se a coluna estrageira "sigla" que é coluna originalmente 
-- pertencente a tabela departamentos
alter table "public".funcionarios add column sigla integer;

-- finalmente conecte a coluna sigla a chave primária da tabela "departamento"
-- criando então uma chave estrageira na tabela "funcionários".
alter table "public".funcionarios add constraint "Chave_estrangeira_Departamento_funcionarios" foreign key (sigla) references "public".departamentos(sigla);
```

## EXEMPLO: REVENDA DE VEÍCULOS MULTI-MARCAS

Uma revenda de veículos multimarcas deseja informatizar seu negócio e precisa de um banco de dados que registre informações sobre veículos, fabricantes e clientes. Cada veículo deve ter código de identificação, modelo, ano de fabricação, cor, preço e chassi. Todo veículo pertence a um fabricante. O fabricante é identificado por um código e deve ter armazenados seu nome e país de origem. A revenda vende veículos para clientes, e cada venda deve registrar a data, o valor da negociação e a forma de pagamento. Um cliente pode comprar mais de um veículo, mas cada veículo só pode ser vendido uma vez. Cada cliente é identificado por um código e deve ter armazenados seu nome, CPF/CNPJ, telefone e endereço.

### Passo 1 - Visualizando matemáticamente os dados:

Vejamos como ficaria representar matemáticamente o enunciado acima:

-   Teoria dos Conjuntos - Ajudaria a organizar e agrupar os dados em conjuntos;

-   Teoria das Funções - A idéia era fornecer um mecanismo de consistência aos dados de conjuntos diferentes relacionados. Por exemplo, haveria uma função que mapeasse um um elemento do conjunto `veículo` a outro elemento do conjunto `montadora`.

#### Representação Matemática em Conjuntos e seus Elementos :

Vamos visualizar gráficamente os conjuntos de `Marcas`, `modelos` e `proprietários` :

<div class="figure">
<img src="2026-ADS-1sem-BancoDeDados_files/figure-html/tikz-diagrama1-1.png" alt="Diagrama de Montadoras, Veículos e Proprietários" width="672" />
<p class="caption">(\#fig:tikz-diagrama1)Diagrama de Montadoras, Veículos e Proprietários</p>
</div>

#### Gerando os Relacionamentos "Matemáticamente" - (Teoria das Funções, Domínios e Imagens):

Vamos visualizar gráficamente os relacionamentos entre os lementos dos conjuntos `Marcas`, `modelos` e `proprietários` :

<div class="figure">
<img src="2026-ADS-1sem-BancoDeDados_files/figure-html/tikz-diagrama2-1.png" alt="Diagrama de Montadoras, Veículos e Proprietários" width="672" />
<p class="caption">(\#fig:tikz-diagrama2)Diagrama de Montadoras, Veículos e Proprietários</p>
</div>

A limitação desta representação gráfica logo fica evidente: por mais que na forma matemática se consiga representar os elementos dos conjuntos e o relacionamento entre eles, a representação não consegue representar os diferentes atributos (características) que os elementos dos conjuntos compartilham.

### Modelo Lógico: Modelo Entidade Relacionamento

Vamos agora converter a representação matemática para uma representação lógica utilizando o modelo M.E.R. (modelo entidade-relacionamento ) proposto pelo professor Peter Chen

#### Modelo Entidade Relacionamento

O modelo Entidade Relacionamento consistem em traduzir elementos morfológicos da gramática da língua portuguesa em um texto para um modelo de Banco de dados utilizando a com a seguinte regra de montagem:

+-------------------------------+--------------------------------------+----------------------------------+---------------------------------------------+
| Classe morfológica da palavra | CORRESPONDÊNCIA NO MODELO MATEMÁTICO | CORRESPONDÊNCIA NO MODELO LÓGICO | CORRESPONDÊNCIA NO MODELO FÍSICO-RELACIONAL |
+-------------------------------+--------------------------------------+----------------------------------+---------------------------------------------+
| `Substantivos`                | `CONJUNTOS`                          | `ENTIDADES`                      | `TABELAS`                                   |
+-------------------------------+--------------------------------------+----------------------------------+---------------------------------------------+
| **`Adjetivos`**               | N/A                                  | **`ATRIBUTO`**                   | **`COLUNAS`**                               |
+-------------------------------+--------------------------------------+----------------------------------+---------------------------------------------+
| **`Verbos`**                  | Idéia de "funções y=f(x) "           | **`RELACIONAMENTOS`**            | **`CHAVE ESTRANGEIRA`**                     |
+-------------------------------+--------------------------------------+----------------------------------+---------------------------------------------+

Tomando como exemplo a revenda de carros:

+-------------------------------+-----------------------------------------------------------------------------+
| Classe morfológica da palavra |                                                                             |
+-------------------------------+-----------------------------------------------------------------------------+
| `Substantivos`                | VEÍCULOS, FABRICANTES, CLIENTES                                             |
+-------------------------------+-----------------------------------------------------------------------------+
| **`Adjetivos`**               | Referentes a veículos: `Modelo`, `Ano_Fabricacao`, `Cor`, `Preco`, `Chassi` |
|                               |                                                                             |
|                               | Referentes a fabricante: `Nome`, `Pais_Origem`                              |
|                               |                                                                             |
|                               | Referentes a cliente: `Nome`, `CPF_CNPJ`, `Telefone`, `Endereco`            |
+-------------------------------+-----------------------------------------------------------------------------+
| **`Verbos`**                  | Fabricante - `PRODUZ`- Veículo                                              |
|                               |                                                                             |
|                               | clinte - `COMPRA/VENDE` - Veículo                                           |
+-------------------------------+-----------------------------------------------------------------------------+

#### Modelo Entidade Relacionamento - representação gráfica

|                               |                       |
|-------------------------------|-----------------------|
| Classe morfológica da palavra | REPRESENTAÇÃO GRÁFICA |
| `Substantivos`                | RETÂNGULOS            |
| **`Adjetivos`**               | **ELIPSES**           |
| **`Verbos`**                  | **LOSÂNGULOS**        |

![](images/modelo01.svg)<!-- -->

``` sql


-- ================================================
-- 1) TRANSFORME AS ENTIDADES E ATRIBUTOS EM 
--    TABELAS E COLUNAS
-- ================================================
CREATE TABLE fabricantes
(
    codigo_fabricante  INTEGER      NOT NULL,
    nome               VARCHAR(100) NOT NULL,
    pais_origem        VARCHAR(60)  NOT NULL
);

CREATE TABLE clientes
(
    codigo_cliente   INTEGER      NOT NULL,
    nome             VARCHAR(120) NOT NULL,
    cpf_cnpj         VARCHAR(20)  NOT NULL UNIQUE,
    telefone         VARCHAR(30),
    endereco         TEXT
);

CREATE TABLE veiculos 
(
    codigo_veiculo      INTEGER       NOT NULL,
    modelo              VARCHAR(100)  NOT NULL,
    ano_fabricacao      INTEGER       NOT NULL,
    cor                 VARCHAR(40),
    preco               NUMERIC(12,2) NOT NULL,
    chassi              VARCHAR(30)   UNIQUE NOT NULL
);

CREATE TABLE vendas
(
    codigo_venda     INTEGER          NOT NULL,
    data_venda       DATE             NOT NULL,
    valor_negociado  NUMERIC(12,2)    NOT NULL,
    forma_pagamento  VARCHAR(50)      NOT NULL
);

-- ================================================
-- 2) TRANSFORME OS ATRIBUTOS CHAVE PRIMÁRIA
-- EM CHAVES-PRIMÁRIAS DAS TABELAS
-- ================================================
ALTER TABLE fabricantes ADD CONSTRAINT chave-primaria_fabricante PRIMARY KEY (codigo_fabricante);

ALTER TABLE clientes    ADD CONSTRAINT chave-primaria_cliente PRIMARY KEY (codigo_cliente);

ALTER TABLE veiculos    ADD CONSTRAINT chave-primaria_veiculo PRIMARY KEY (codigo_veiculo);

ALTER TABLE vendas      ADD CONSTRAINT chave-primaria_venda PRIMARY KEY (codigo_venda);

-- ================================================
-- 3) ADICIONAR NAS TABELAS AS COLUNAS EXTRAS
--    QUE VÃO RECEBER AS CHAVES ESTRANGEIRAS
-- ================================================

-- adicione uma coluna que irá acomodar a chave primária da tabela fabricantes como chave estrangeira
ALTER TABLE veiculos add cloumn  codigo_fabricante   INTEGER NOT NULL;

-- adicione uma coluna que irá acomodar a chave primária da tabela clientes como chave estrangeira
ALTER TABLE vendas   add cloumn  codigo_cliente      INTEGER NOT NULL;

-- adicione uma coluna que irá acomodar a chave primária da tabela veículos como chave estrangeira
ALTER TABLE vendas   add cloumn  codigo_veiculo      INTEGER NOT NULL UNIQUE;

-- ================================================
-- 3) CRIE AS CHAVES ESTRANGEIRAS QUE FAZEM A LIGAÇÃO
-- DAS TABELAS "LADO N" DO RELACIONAMENTO NO 
-- DIAGRAMA ENTIDADE-RELACIONAMENTO COM AS
-- COLUNAS DO LADO 1
-- ================================================

-- utilizando chave estrangeira, faça esta tabela veículos referenciar a tabela fabricantes
ALTER TABLE veiculos
    ADD CONSTRAINT chave-estrageira_veiculo_fabricante
    FOREIGN KEY (codigo_fabricante)
    REFERENCES fabricantes (codigo_fabricante)
    ON UPDATE CASCADE
    ON DELETE RESTRICT;

-- utilizando chave estrangeira, faça esta tabela vendas referenciar a tabela clientes
ALTER TABLE vendas
    ADD CONSTRAINT chave-estrageira_venda_cliente
    FOREIGN KEY (codigo_cliente)
    REFERENCES clientes (codigo_cliente)
    ON UPDATE CASCADE
    ON DELETE RESTRICT;

-- utilizando chave estrangeira, faça esta tabela vendas referenciar a tabela veículos 
ALTER TABLE vendas
    ADD CONSTRAINT chave-estrageira_venda_veiculo
    FOREIGN KEY (codigo_veiculo)
    REFERENCES veiculos (codigo_veiculo)
    ON UPDATE CASCADE
    ON DELETE RESTRICT;
```

## VERBOS: Relacionamentos e Cardinalidade

A **cardinalidade** define **quantas ocorrências de uma entidade podem estar associadas** a ocorrências de outra entidade em um relacionamento.

Ela é fundamental para entender as regras de negócio do banco de dados e deve estar sempre representada no **Diagrama Entidade-Relacionamento (DER)**.

------------------------------------------------------------------------

### 🔹 Tipos principais de cardinalidade

1.  **Um para Um (1:1)**\
2.  **Um para Muitos (1:N)**\
3.  **Muitos para Muitos (N:M)**

A seguir, vamos detalhar cada caso.

------------------------------------------------------------------------

### 1. Relacionamento **1:1 (Um para Um)**

Um exemplo clássico:\
- Cada MARIDO possui **uma única ESPOSA**.\
- Cada ESPOSA pertence a **um único MARIDO**.

#### Representação no DER:

![](images/cardinalidade01.svg)<!-- -->

### Relacionamento **1:N (Um para Muitos)**

Exemplo:

Um **Cliente** pode fazer **muitos Pedidos**.

Mas cada **Pedido** só pode pertencer a **um Cliente**.

#### Representação no DER:

![](images/cardinalidade02.svg)<!-- -->

### Relacionamento N:M (Muitos para Muitos)

Exemplo:

Um **Aluno** pode se matricular **em muitas Disciplinas**.

Cada **Disciplina** pode ter **muitos Alunos**.

( Esse tipo de relacionamento precisa de uma entidade associativa para ser implementado no banco (ex.: Matricula) )

#### Representação no DER:

![](images/cardinalidade03.svg)<!-- -->

## Entidade Dominante e Entidade Subordinada

No **Modelo Entidade-Relacionamento (MER)**, algumas entidades só existem **dependendo da existência de outra**.\
Nesses casos, usamos os conceitos de **Entidade Dominante** e **Entidade Subordinada**.

------------------------------------------------------------------------

### Definições:

-   **Entidade Dominante (ou Forte):**\
    É uma entidade que **existe por si só**, sem depender de nenhuma outra.\
    Ex.: Cliente, Produto, Funcionário.

-   **Entidade Subordinada (ou Fraca):**\
    É uma entidade que **depende de outra** para existir.\
    Ela **não possui chave primária própria** completa e precisa da chave da entidade dominante.\
    Ex.: ItemPedido, Dependente, Parcela.

A entidade subordinada é representada por um **losango duplo** (relacionamento identificador) em algumas notações, ou simplesmente destacada como **entidade fraca**.

![](images/EntidadeDominante01.svg)<!-- -->

Outro Exemplo:

![](images/EntidadeDominante02.svg)<!-- -->

------------------------------------------------------------------------

## CARDINALIDADE DO MODELO LÓGICO E A CRIAÇÃO DE CHAVES ESTRANGEIRAS NO MODELO FÍSICO-RELACIONAL

Vai ser a cardinalidade que irá ditar em quais tabelas criaremos chaves estrangeiras.

## Referências

**CHEN**, Peter (1990). ***Gerenciando Banco de Dados*****. A Abordagem Entidade-Relacionamento para Projeto Lógico**. São Paulo: McGraw-Hill. 80 páginas. [ISBN](https://pt.wikipedia.org/wiki/International_Standard_Book_Number "International Standard Book Number") [0-07-460575-5](https://pt.wikipedia.org/wiki/Especial:Fontes_de_livros/0-07-460575-5 "Especial:Fontes de livros/0-07-460575-5")

**DATE**, C. J. **An Introduction to Database Systems.** 8. ed. Boston: Addison-Wesley, 2003.

**SILBERSCHATZ**, Abraham; KORTH, Henry F.; SUDARSHAN, S. **Database System Concepts.** 6. ed. New York: McGraw-Hill, 2010.

**CODD**, E. F. **A Relational Model of Data for Large Shared Data Banks.** Communications of the ACM, New York, v. 13, n. 6, p. 377–387, 1970.



<!--chapter:end:03-2026-03-03_Modelagem_SGBD-aula-01.Rmd-->

---
output: 
  html_document: 
    highlight: tango
    theme: cerulean
    toc_depth: 4
    number_sections: true
  pdf_document: 
    toc: true
    toc_depth: 4
  word_document: 
    toc: true
    toc_depth: 4
  css: style.css
---

## Exercícios RESOLVIDOS

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Exercício 1 — Universidade                                                                                                                                                                                                                                                                 |
+============================================================================================================================================================================================================================================================================================+
| ![](03-aula03/media/exercicio-01.jpg)                                                                                                                                                                                                                                                      |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere uma Universidade que possui vários Cursos. Cada curso tem um nome, uma duração em semestres e um coordenador. A universidade possui Professores, cada um com um nome, título e CPF. Um professor pode ministrar várias disciplinas, e cada disciplina pertence a um único curso. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Identifique as entidades                                                                                                                                                                                                                                                               |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| b)  Identifique os atributos de cada Entidade                                                                                                                                                                                                                                              |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| c)  Identifique os relacionamentos entre as Entidades                                                                                                                                                                                                                                      |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| e)  Faça o diagrama DEM (Diagrama Entidade Relacionamento) contendo as entidades, atributos e relacionamentos que você mapeou.                                                                                                                                                             |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

#### Passo #1 -

Identificar **SUBSTANTIVOS** no contexto; identificar os **ADJETIVOS** pertinentes a cada SUBSTANTIVO; identificar os **VERBOS** de relação entre os substantivos.

+---------------------------------------------------+----------------------------------------------+----------------------------------------------------+
| `Substantivos` **do contexto**: leve-os ao plural | `Adjetivos`                                  | `Verbos`                                           |
+:==================================================+==============================================+====================================================+
| UNIVERSIDADE -\> **`UNIVERSIDADES`**              | `NOME` (implícito no enunciado)              | universidade `POSSUI` (vários) cursos              |
|                                                   |                                              |                                                    |
|                                                   | `CNPJ` (implícito no enunciado)              |                                                    |
+---------------------------------------------------+----------------------------------------------+----------------------------------------------------+
| CURSO -\> **`CURSOS`**                            | `NOME` (explícito no enunciado)              | cursos são `POSSUÍDOS` por (vários) universidades  |
|                                                   |                                              |                                                    |
|                                                   | `DURAÇÃO` (explícito no enunciado)           |                                                    |
|                                                   |                                              |                                                    |
|                                                   | `COORDENADOR` (explícito no enunciado)       |                                                    |
|                                                   |                                              |                                                    |
|                                                   | `CODIGO_CURSO` (implícito no enunciado)      |                                                    |
+---------------------------------------------------+----------------------------------------------+----------------------------------------------------+
| PROFESSOR -\> **`PROFESSORES`**                   | `CPF` (explícito no enunciado)               | universidade `POSSUI` (vários) professores         |
|                                                   |                                              |                                                    |
|                                                   | `NOME` (explícito no enunciado)              | professor `MINISTRA` (várias) disciplinas          |
|                                                   |                                              |                                                    |
|                                                   | `TÍTULO` (explícito no enunciado)            |                                                    |
+---------------------------------------------------+----------------------------------------------+----------------------------------------------------+
| DISCIPLINA -\> **`DISCIPLINAS`**                  | `NOME` (implícito no enunciado)              | disciplina `É MINISTRADA` por (vários) professores |
|                                                   |                                              |                                                    |
|                                                   | `CODIGO_DISCIPLINA` (implícito no enunciado) | disciplina `PERTENCE` a (um único) curso           |
+---------------------------------------------------+----------------------------------------------+----------------------------------------------------+

: Identificando SUBSTANTIVOS, ADJETIVOS referentes e VERBOS de relação

#### Passo #2

Criar o **`MODELO ENTIDADE RELACIONAMENTO (M.E.R.)`** - Converter SUBSTANTIVO em **`ENTIDADES`**; converter ADJETIVOS em **`ATRIBUTOS`** e converter VERBOS em **`RELACIONAMENTOS`**.

-   ENTIDADES identificadas: **`UNIVERSIDADES`**, **`CURSOS`**, **`PROFESSORES`** e **`DISCIPLINAS`**

-   ATRIBUTOS identificados: UNIVERSIDADES [ nome,cnpj ] ; CURSOS [ nome, duração, coordenador, codigo_curso] ; PROFESSORES [ cpf, nome e título] ; DISCIPLINAS [nome e codigo_disciplina]

-   RELACIONAMENTOS: [universidade-`POSSUI`-curso] ; [universidade-`POSSUI`-professores]; [professor-`MINISTRA`-disciplina] ; [disciplina-`PERTENCE`-curso]

#### Passo #3

Criar um DIAGRAMA ENTIDADE-RELACIONAMENTO (D.E.R.) com as informações levantadas:

![](images/exemplo03-01-01.svg)<!-- -->

![](images/exemplo03-01-02.svg)<!-- -->

![](images/exemplo03-01-03.svg)<!-- -->

![](images/exemplo03-01-04.svg)<!-- -->

#### Passo #4

Identificar os Relacionamentos:

-   [universidade-`POSSUI`-curso] ; [universidade-`POSSUI`-professores]; [professor-`MINISTRA`-disciplina] ; [disciplina-`PERTENCE`-curso]

![](images/exemplo03-01-05.svg)<!-- -->



------------------------------------------------------------------------

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Exemplo 2 — Um Projeto de e-commerce                                                                                                                                                                                             |
+====================================================================================================================================================================================================================================+
| ![](03-aula03/media/exercicio-02-e_commerce.jpg)                                                                                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Um Cliente faz Pedidos em um sistema de e-commerce. Cada cliente tem um nome, endereço e telefone. Os pedidos possuem uma data, um valor total e podem conter vários Produtos. Cada produto tem um nome, uma descrição e um preço. |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Identifique as **entidades**                                                                                                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| b)  Identifique os **atributos** de cada Entidade                                                                                                                                                                                  |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| c)  Identifique os **relacionamentos** entre as Entidades                                                                                                                                                                          |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| e)  Faça o **diagrama DEM (Diagrama Entidade Relacionamento)** contendo as entidades, atributos e relacionamentos que você mapeou.                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

#### Passo #1 -

Identificar **SUBSTANTIVOS** no contexto; identificar os **ADJETIVOS** pertinentes a cada SUBSTANTIVO; identificar os **VERBOS** de relação entre os substantivos.

+-------------------------------------------------------------------------+----------------------------------------+-------------------------------------------------------+
| `Substantivos` **do contexto**: leve-os ao plural                       | `Adjetivos`                            | `Verbos`                                              |
+:========================================================================+========================================+=======================================================+
| CLIENTE -\> **`CLIENTES`**                                              | `NOME` (explícito no enunciado)        | (vários) clientes `PEDEM` (vários) produtos           |
|                                                                         |                                        |                                                       |
|                                                                         | `ENDERECO` (explícito no enunciado)    |                                                       |
|                                                                         |                                        |                                                       |
|                                                                         | `TELEFONE` (explícito no enunciado)    |                                                       |
|                                                                         |                                        |                                                       |
|                                                                         | `CPF` (implícito no enunciado)         |                                                       |
+-------------------------------------------------------------------------+----------------------------------------+-------------------------------------------------------+
| PEDIDO -\> **`PEDIDOS ????`**                                           | `DATA` (explícito no enunciado)        | (vários) clientes `PEDEM` (vários) produtos           |
|                                                                         |                                        |                                                       |
| PEDIDO NÃO É SUBSTABNTIVO, MAS SIM O PARTICÍPIO PASSADO DO VERBO PEDIR. | `VALOR_TOTAL` (explícito no enunciado) |                                                       |
|                                                                         |                                        |                                                       |
| (PEDIR É VERBO !!!)                                                     |                                        |                                                       |
+-------------------------------------------------------------------------+----------------------------------------+-------------------------------------------------------+
| PRODUTO -\> **`PRODUTOS`**                                              | `NOME` (implícito no enunciado)        | (vários) produtos são `PEDidos` por (vários) clientes |
|                                                                         |                                        |                                                       |
|                                                                         | `DESCRICAO` (explícito no enunciado)   |                                                       |
|                                                                         |                                        |                                                       |
|                                                                         | `PRECO` (explícito no enunciado)       |                                                       |
|                                                                         |                                        |                                                       |
|                                                                         | `COD_PRODUTO` (implícito no enunciado) |                                                       |
+-------------------------------------------------------------------------+----------------------------------------+-------------------------------------------------------+

: Identificando SUBSTANTIVOS, ADJETIVOS referentes e VERBOS de relação

#### Passo #2

Criar o **`MODELO ENTIDADE RELACIONAMENTO (M.E.R.)`** - Converter SUBSTANTIVO em **`ENTIDADES`**; converter ADJETIVOS em **`ATRIBUTOS`** e converter VERBOS em **`RELACIONAMENTOS`**.

Normalmente apenas as ENTIDADES levam atributos. Quando aparece um relacionamento N-N entre duas entidades, também podem aparecer atributos atrelados aos relacionamentos (como é o caso de PEDIDO aqui).

-   ENTIDADES identificadas: **`CLIENTES`**, **`PRODUTOS`**

-   ATRIBUTOS identificados: CLIENTES [ nome, endereco, telefone, cpf] ; PRODUTOS [ nome, descricao, preco, cod_produto] ; PEDIDO[data, valor_total]

-   RELACIONAMENTOS: [cliente-`PEDE`-produto] ; [produto-`PEDIDO`-cliente];

#### Passo #3

Criar um DIAGRAMA ENTIDADE-RELACIONAMENTO (D.E.R.) com as informações levantadas:

![](images/exemplo03-02-01.svg)<!-- -->



------------------------------------------------------------------------

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Exercício 3 — Hospital                                                                                                                                                                                                                                                                  |
+=========================================================================================================================================================================================================================================================================================+
| ![](03-aula03/media/exercicio-03.jpg)                                                                                                                                                                                                                                                   |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Um Hospital registra Pacientes, cada um com nome, idade, endereço e telefone. Os pacientes podem realizar várias Consultas com Médicos. Cada médico possui um CRM, um nome e uma especialidade. Durante a consulta, o médico pode prescrever Receitas, que possuem medicação e dosagem. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Identifique as **entidades**                                                                                                                                                                                                                                                        |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| b)  Identifique os **atributos** de cada Entidade                                                                                                                                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| c)  Identifique os **relacionamentos** entre as Entidades                                                                                                                                                                                                                               |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| e)  Faça o **diagrama DEM (Diagrama Entidade Relacionamento) contendo as entidades, atributos e relacionamentos** que você mapeou.                                                                                                                                                      |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

#### Passo #1 -

Identificar **SUBSTANTIVOS** no contexto; identificar os **ADJETIVOS** pertinentes a cada SUBSTANTIVO; identificar os **VERBOS** de relação entre os substantivos.

+---------------------------------------------------+------------------------------------------+-------------------------------------------------------------------+
| `Substantivos` **do contexto**: leve-os ao plural | `Adjetivos`                              | `Verbos`                                                          |
+:==================================================+==========================================+===================================================================+
| HOSPITAL -\> **`HOSPITAIS`**                      | `NOME` (implícito no enunciado)          | (explícito) hospital `REGISTRA` (vários) pacientes                |
|                                                   |                                          |                                                                   |
|                                                   | `CNPJ` (implícito no enunciado)          | (implícito) hospital `POSSUI` medicos                             |
+---------------------------------------------------+------------------------------------------+-------------------------------------------------------------------+
| PACIENTE -\> **`PACIENTES`**                      | `NOME` (explícito no enunciado)          | pacientes são `REGISTRADOS` em (um) hospital                      |
|                                                   |                                          |                                                                   |
|                                                   | `IDADE` (explícito no enunciado)         | (vários) pacientes `CONSULTAM` (vários) médicos                   |
|                                                   |                                          |                                                                   |
|                                                   | `ENDERECO` (explícito no enunciado)      | (vários) pacientes `SÃO RECEITADOS` por (vários) médicos          |
|                                                   |                                          |                                                                   |
|                                                   | `TELEFONE` (explícito no enunciado)      |                                                                   |
|                                                   |                                          |                                                                   |
|                                                   | `CPF` (implícito no enunciado)           |                                                                   |
+---------------------------------------------------+------------------------------------------+-------------------------------------------------------------------+
| MÉDICO -\> **`MEDICOS`**                          | `CRM` (explícito no enunciado)           | (vários) médico(s) `CONSULTA` (vários) pacientes                  |
|                                                   |                                          |                                                                   |
|                                                   | `NOME` (explícito no enunciado)          | (vários) médico(s) `RECEITAM` (vários) pacientes                  |
|                                                   |                                          |                                                                   |
|                                                   | `ESPECIALIDADE` (explícito no enunciado) |                                                                   |
+---------------------------------------------------+------------------------------------------+-------------------------------------------------------------------+
| RECEITA ?? -\> **`RECEITAR`** é VERBO             | `MEDICACAO` (explícito no enunciado)     | médico `RECEITA` ao paciente                                      |
|                                                   |                                          |                                                                   |
|                                                   | `DOSAGEM`(explícito no enunciado)        | (vários) paciente(s) `É(SÃO) RECEITADO(s)` por (vários) médico(s) |
+---------------------------------------------------+------------------------------------------+-------------------------------------------------------------------+
| CONSULTA ?? -\> **`CONSULTAR`** é VERBO           | `DATA` (implícito no enunciado)          | (vários) pacientes(s) `CONSULTA(M)` (vários) médico(s)            |
|                                                   |                                          |                                                                   |
|                                                   | `HORA`(implícito no enunciado)           |                                                                   |
|                                                   |                                          |                                                                   |
|                                                   | `sala`(implícito no enunciado)           |                                                                   |
+---------------------------------------------------+------------------------------------------+-------------------------------------------------------------------+

: Identificando SUBSTANTIVOS, ADJETIVOS referentes e VERBOS de relação

#### Passo #2

Criar o **`MODELO ENTIDADE RELACIONAMENTO (M.E.R.)`** - Converter SUBSTANTIVO em **`ENTIDADES`**; converter ADJETIVOS em **`ATRIBUTOS`** e converter VERBOS em **`RELACIONAMENTOS`**.

-   ENTIDADES identificadas: **`HOSPITAIS`**, **`PACIENTES`**, **`MEDICOS`**

-   ATRIBUTOS identificados: HOSPITAIS [ nome,cnpj ] ; PACIENTES [ nome, idade, endereco, telefone, cpf] ; MEDICOS [ crm, nome e especialidade] ;

-   RELACIONAMENTOS: [medico-`consulta`-paciente] ; [medico-`receita`-paciente]; [hospital-registra-paciente] ; [hospital-`POSSUI`-medicos]

#### Passo #3

Criar um DIAGRAMA ENTIDADE-RELACIONAMENTO (D.E.R.) com as informações levantadas:

![](images/exemplo03-03-01.svg)<!-- -->



------------------------------------------------------------------------

### Exercícios

### 📝 Lista de Exercícios – Modelo Entidade-Relacionamento (MER)

#### Exercício 1 – Cliente e CPF (1:1)

![](03-aula03/media/exercicio-01-resolver.jpg)

Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Cada **Diretor** gerencia exatamente **uma Escola**, e cada **Escola** só pode estar associada a um único **Diretor**. Com base nestas informações:\
- Identifique entidades, atributos e relacionamento.\
- Represente o MER com cardinalidade 1:1.

![](images/exercicios03-01.svg)<!-- -->

------------------------------------------------------------------------

#### Exercício 2 – Cliente e Pedidos (1:N)

![](03-aula03/media/exercicio-02-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Um **Cliente** pode fazer **vários Pedidos**, mas cada Pedido pertence a apenas um Cliente.\
- Liste as entidades e atributos.\
- Defina o relacionamento e a cardinalidade.\
- Monte o DER.

![](images/exercicios03-02.svg)<!-- -->

------------------------------------------------------------------------

#### Exercício 3 – Alunos e Disciplinas (N:M)

![](03-aula03/media/exercicio-03-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Um **Aluno** pode se matricular em várias **Disciplinas**, e cada Disciplina pode ter vários Alunos.\
- Identifique entidades e atributos. - Qual entidade associativa deve ser criada? - Desenhe o DER com a entidade associativa.

![](images/exercicios03-03.svg)<!-- -->

------------------------------------------------------------------------

#### Exercício 4 – Funcionário e Dependentes (Entidade Fraca)

![](03-aula03/media/exercicio-04-resolver.jpg)

Considere um projeto de Banco de Dados. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Cada **Funcionário** pode ter **vários Dependentes**. Um Dependente não existe sem um Funcionário.\
- Identifique a entidade forte e a entidade fraca.\
- Defina atributos e chaves.\
- Monte o DER indicando a dependência existencial.

![](images/exercicios03-04.svg)<!-- -->


------------------------------------------------------------------------

#### Exercício 5 – Pedido e Itens de Pedido (Entidade Associativa + Fraca)

![](03-aula03/media/exercicio-05-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Um **Pedido** contém vários **Itens**, mas cada Item está sempre vinculado a apenas um Pedido.\
- Qual entidade é dominante e qual é subordinada?\
- Identifique atributos das duas entidades.\
- Represente o DER com cardinalidade 1:N.

![](images/exercicios03-05.svg)<!-- -->


------------------------------------------------------------------------

#### Exercício 6 – Médicos e Consultas (1:N)

![](03-aula03/media/exercicio-06-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Um **Médico** pode realizar várias **Consultas**, mas cada Consulta está associada a apenas um Médico.\
- Identifique entidades e atributos.\
- Desenhe o DER.\
- Indique as cardinalidades.

![](images/exercicios03-06.svg)<!-- -->


------------------------------------------------------------------------

#### Exercício 7 – Professor e Departamento (1:1)

![](03-aula03/media/exercicio-07-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Cada **Professor** dirige apenas **um Departamento**, e cada Departamento tem apenas um Professor responsável.\
- Identifique entidades, atributos e relacionamento.\
- Defina cardinalidade 1:1 no DER.

![](images/exercicios03-07.svg)<!-- -->


------------------------------------------------------------------------

#### Exercício 8 – Livros e Autores (N:M)

![](03-aula03/media/exercicio-08-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Um **Livro** pode ter vários **Autores**, e cada Autor pode escrever vários Livros.\
- Identifique as entidades e atributos.\
- Qual entidade associativa deve ser criada?\
- Monte o DER em notação conceitual.

![](images/exercicios03-08.svg)<!-- -->


------------------------------------------------------------------------

#### Exercício 9 – Biblioteca (Entidades Fortes e Fracas)

![](03-aula03/media/exercicio-09-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
Um **Livro** pode ter vários **Exemplares**. Um Exemplar só existe se estiver associado a um Livro.\
- Identifique entidades fortes e fracas.\
- Defina atributos (Livro: título, ano; Exemplar: código_exemplar, status).\
- Monte o DER com a dependência existencial.

![](images/exercicios03-09.svg)<!-- -->


------------------------------------------------------------------------

#### Exercício 10 – Empresa, Funcionário e Projeto (Misto 1:N e N:M)

![](03-aula03/media/exercicio-10-resolver.jpg)

Considere um projeto de Banco de Dados.Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).\
- Uma **Empresa** possui vários **Funcionários**.\
- Cada **Funcionário** pode participar de vários **Projetos**, e cada Projeto pode ter vários Funcionários.\
- Identifique todas as entidades, atributos e relacionamentos.\
- Determine cardinalidades corretas (Empresa–Funcionário 1:N, Funcionário–Projeto N:M).\
- Crie o DER completo.

![](images/exercicios03-10.svg)<!-- -->


------------------------------------------------------------------------

#### Tarefas propostas para cada exercício:

1.  Identificar entidades e atributos.\
2.  Definir relacionamentos.\
3.  Especificar cardinalidades.\
4.  Indicar entidades fortes e fracas (quando houver).\
5.  Representar graficamente o DER.

------------------------------------------------------------------------

### Respostas dos Exercícios:

#### Exercício #1

![](images/exercicios03-01-resposta.svg)<!-- -->



------------------------------------------------------------------------

#### Exercício #2

![](images/exercicios03-02-resposta.svg)<!-- -->

##### Exercício 2 - SQL referênte ao diagrama anterior



------------------------------------------------------------------------

#### Exercício #3

![](images/exercicios03-03-resposta.svg)<!-- -->

##### Exercício 3 - SQL referênte ao diagrama anterior



------------------------------------------------------------------------

#### Exercício #4

![](images/exercicios03-04-resposta.svg)<!-- -->

##### Exercício 4 - SQL referênte ao diagrama anterior



------------------------------------------------------------------------

#### Exercício #5

![](images/exercicios03-05-resposta.svg)<!-- -->

##### Exercício 5 - SQL referênte ao diagrama anterior


------------------------------------------------------------------------

#### Exercício #6

![](images/exercicios03-06-resposta.svg)<!-- -->

##### Exercício 6 - SQL referênte ao diagrama anterior



------------------------------------------------------------------------

#### Exercício #7

![](images/exercicios03-07-resposta.svg)<!-- -->

##### Exercício 7 - SQL referênte ao diagrama anterior



------------------------------------------------------------------------

#### Exercício #8

![](images/exercicios03-08-resposta.svg)<!-- -->

##### Exercício 8 - SQL referênte ao diagrama anterior


------------------------------------------------------------------------

#### Exercício #9

![](images/exercicios03-09-resposta.svg)<!-- -->

##### Exercício 9 - SQL referênte ao diagrama anterior


------------------------------------------------------------------------

#### Exercício #10

![](images/exercicios03-10-resposta.svg)<!-- -->

##### Exercício 10 - SQL referênte ao diagrama anterior



------------------------------------------------------------------------



<!--chapter:end:03-2026-03-03_Modelagem_SGBD-exercicio-01.Rmd-->

---
output: 
  html_document: 
    highlight: tango
    theme: cerulean
    fig_caption: true
    css: style.css
---

# Modelagem de Bancos de Dados parte 02

## Linguagem S.Q.L.

A linguagem SQL foi criada nos laboratórios da IBM em 1974, como interface de manipulação ao Bando de Dados Relacional System-R , atualmente denominado IBM DB2. Os criadores foram engenheiros de sistemas que sucederam o professor Edgard Frank Codd no projeto de Banco de Dados Relacional: **Donald Chamberlain** e **Raymond Boyce**.

+---------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| ![Donald Chamberlain - Criador da linguagem SQL nos laboratórios da IBM](04-aula04/media/04-Donald_Chamberlain.jpg) | ![Raymond Boyce - Criador da linguagem SQL nos laboratórios da IBM](04-aula04/media/04-Raymond_Boyce.jpg){width="238"} |
+---------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+

A lingauem SQL é a ponte com o mundo exterior para um Sistema de Gerenciamento de Banco de Dados (SGBD). Os conjunto de comandos da linguagem SQL são divididos em 3 grandes grupos:

$$
\begin{array}{c| c | c}
\textbf{GRUPO}    & \textbf{ Comandos}   & \textbf{Finalidade} \\ 
\hline 
Grupo \ DDL         &  \quad \ Data \ Definion \ Language        & \quad Criar \ estruturas \ de \ dados \\
Grupo \ DML         &  \quad \ Data \ Manipulation \ Language    & \quad Manipular \ dados \ armazenados \\
Grupo \ DCL         &  \quad \ Data \ Control \ Language         & \quad Criar \ Regras \ para \ os \ dados \\
Grupo \ TCL         &  \quad \ Transaction \ Control \ Language  & \quad Criar \ Transações \ para \ os \ dados \\
\hline
\textbf{Subconjunto SQL }    & \textbf{ Significado }    & \textbf{ Conjunto Completo }
\end{array}
$$

## SQL e MODELAGEM

### SQL - DDL (DATA DEFINION LANGUAGE) - Construindo estruturas no Banco de Dados

![](04-aula04/media/01-SQL-DDL.jpg)

#### Comandos SQL-DDL

+----------------------+----------------------------------+
| Comando              | Função                           |
+======================+==================================+
| `CREATE`             | cria objetos                     |
+----------------------+----------------------------------+
| `ALTER`              | modifica estrutura               |
+----------------------+----------------------------------+
| `DROP`               | remove objetos                   |
+----------------------+----------------------------------+

##### Exemplo - Criando uma tabela com comando CREATE

``` sql
CREATE TABLE aluno (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    idade INTEGER,
    curso VARCHAR(50)
);
```

##### Exemplo - Criando uma tabela com comando ALTER

``` sql
ALTER TABLE aluno
ADD email VARCHAR(100);
```

##### Exemplo - Criando uma tabela com comando DROP

``` sql
DROP TABLE aluno;
```

## SQL e TRATAMENTO DE DADOS

### SQL - DML (DATA MANIPULATION LANGUAGE) - Inserindo dados nas estruturas do Banco de Dados

A **DML** é responsável por **manipular os dados armazenados nas tabelas**. Também é responsável por implementar as operações de Algebra Relacional propostas por Codd que vão operacionalizar os dados armazenados:

| Comando  | Função          |
|----------|-----------------|
| `INSERT` | inserir dados   |
| `UPDATE` | atualizar dados |
| `DELETE` | remover dados   |

##### Exemplo - Inseriondo dados em uma tabela

``` sql
INSERT INTO aluno (id, nome, idade, curso) VALUES (1, 'Ana', 21, 'Computação');
```

##### Exemplo - Atualizando dados em uma tabela com UPDATE

``` sql
UPDATE aluno SET idade = 22 WHERE id = 1;
```

##### Exemplo - Apagando dados com o comando DELETE

``` sql
DELETE FROM aluno WHERE id = 1;
```

## Algebra Relacional

Segundo Abraham Silberschatz no livro *Database System Concepts*:

> > Álgebra Relacional é uma coleção de operações que recebem uma ou duas relações como entrada e produzem uma nova relação como resultado.

São basicamente 8 operações herdadas da Teoria do Conjuntos:

+--------------------+---------------------+-------------------------------------------------+
| Álgebra Relacional | Significado         | SQL equivalente                                 |
+====================+=====================+=================================================+
| `σ condição (R)`   | seleção de linhas   | `SELECT * FROM R WHERE condição`                |
+--------------------+---------------------+-------------------------------------------------+
| `π atributos (R)`  | projeção de colunas | `SELECT atributos FROM R`                       |
+--------------------+---------------------+-------------------------------------------------+
| `R ∪ S`            | união               | `SELECT ... FROM R UNION SELECT ... FROM S`     |
+--------------------+---------------------+-------------------------------------------------+
| `R − S`            | diferença           | `SELECT ... FROM R EXCEPT SELECT ... FROM S`    |
+--------------------+---------------------+-------------------------------------------------+
| `R ∩ S`            | interseção          | `SELECT ... FROM R INTERSECT SELECT ... FROM S` |
+--------------------+---------------------+-------------------------------------------------+
| `R × S`            | produto cartesiano  | `SELECT * FROM R CROSS JOIN S`                  |
+--------------------+---------------------+-------------------------------------------------+
| `R ⋈ condição S`   | junção              | `SELECT * FROM R JOIN S ON condição`            |
+--------------------+---------------------+-------------------------------------------------+
| `ρ novo_nome (R)`  | renomeação          | `FROM R AS novo_nome`                           |
+--------------------+---------------------+-------------------------------------------------+

### Operação `SELEÇÃO` ( letra sigma σ )

A `*SELEÇÃO*` filtra linhas da tabela de acordo com uma condição lógica. Ela não altera as colunas, apenas escolhe quais tuplas permanecem na relação. Equivale a um filtro de linhas.

$\sigma_{salario > 3000}(Funcionario)$

Exemplo 1 -

``` sql
SELECT * FROM Funcionarios WHERE salario > 3000;
```

### Operação `PROJEÇÃO` ( letra PI π )

A `PROJEÇÃO` seleciona colunas da tabela. Ela remove atributos que não são desejados. Equivale a um filtro de colunas.

Exemplo 2 -

$\pi_{nome, salario}(Funcionario)$

``` sql
SELECT nome, salario FROM Funcionario;
```

### Operação `UNIÃO` ( ∪ )

A `*UNIÃO*` combina as tuplas de duas relações. Para isso, as relações precisam ser compatíveis, ou seja:

-   A)mesmo número de atributos;
-   B)mesmos domínios (tipos) de dados;

\$ R \cup S \$

Exemplo 3 -

``` sql
SELECT coluna1, coluna2 FROM R
UNION
SELECT coluna1, coluna2 FROM S;
```

### Operação `DIFERENÇA` ( - )

A `*DIFERENÇA*` entre duas relações R e S retorna as tuplas (linhas) que estão em uma relação mas não estão na outra.

$R - S$

Exemplo 4 -

``` sql
SELECT coluna1, coluna2 FROM R
EXCEPT
SELECT coluna1, coluna2 FROM S;
```

### Operação `INTERSECÇÃO` ( ∩ )

A `*INTERSECÇÃO*` entre duas relações R e S retorna apenas as tuplas que aparecem nas duas relações ao mesmo tempo.

$R \cap S$

Exemplo 5 -

``` sql
SELECT coluna1, coluna2 FROM R
INTERSECT
SELECT coluna1, coluna2 FROM S;
```

### Operação `PRODUTO CARTESIANO` ( × )

O `*PRODUTO CARTESIANO*` entre duas relações R e S combina cada tupla de uma relação com todas as tuplas de outra relação.

Exemplo 6 -

$R \times S$

``` sql
  SELECT * FROM R CROSS JOIN S;
```

### Operação `JUNÇÃO NATURAL` ( ⋈ )

A `*JUNÇÃO NATURAL*` combina duas relações com base em uma condição entre atributos de ambas;

$Funcionario \bowtie_{Funcionarios.depto\_id = Departamentos.id} Departamento$

Exemplo 7 -

``` sql

SELECT * FROM 
    Funcionarios
  JOIN 
    Departamentos
  ON 
    Funcionarios.depto_id = Departamentos.id;
```

### Operação `RENOMEAÇÃO` (letra rô ρ)

A `*RENOMEAÇÃO*` permite renomear uma relação ou atributos.

#### renomeação de tabela

$\rho_{F}(Funcionario)$

Exemplo 8 -

``` sql

SELECT * FROM Funcionarios AS F;
```

#### renomeação de atributo

$\pi_{\ id \rightarrow cpf, nome,nascimento}(Funcionario)$

``` sql

SELECT id AS cpf, nome, nascimento FROM Funcionarios;
```

## SQL - USO AVANÇADO DE MANIPULAÇÃO DE DADOS:

### Operação de Junção JOIN

A Operação JOIN possui alguns refinamentos:

| Tipo       | Resultado                        |
|------------|----------------------------------|
| INNER JOIN | apenas registros correspondentes |
| LEFT JOIN  | todos da esquerda                |
| RIGHT JOIN | todos da direita                 |
| FULL JOIN  | todos de ambas                   |

Para demonstra-los, vamos tomar duas Relações (tabelas) como exemplo:

![](images/Aula-04-sql-avancado.svg)<!-- -->

##### Tabela CLIENTES

| id_cliente | nome   |
|------------|--------|
| 1          | Ana    |
| 2          | Carlos |
| 3          | Maria  |

##### Tabela PEDIDOS

+--------------+--------------+------------------------------+
| id_pedido    | id_cliente   | valor                        |
+==============+==============+==============================+
| 101          | 1            | 200                          |
+--------------+--------------+------------------------------+
| 102          | 1            | 150                          |
+--------------+--------------+------------------------------+
| 103          | 2            | 300                          |
+--------------+--------------+------------------------------+

#### JUNÇÃO SIMPLES (JOIN)

O **JOIN** combina dados de duas ou mais tabelas. A junção é baseada em uma **condição de relacionamento**.

``` sql
SELECT colunas
FROM tabela1
JOIN tabela2
ON condição;
```

#### JUNÇÃO INTERNA (INNER JOIN)

O **INNER JOIN** retorna apenas registros que possuem correspondência nas duas tabelas.

``` sql
SELECT cliente.nome, pedido.valor
FROM cliente
INNER JOIN pedido
ON cliente.id_cliente = pedido.id_cliente;
```

Saída:

| nome   | valor |
|--------|-------|
| Ana    | 200   |
| Ana    | 150   |
| Carlos | 300   |

#### JUNÇÃO A ESQUERDA (LEFT JOIN)

O **LEFT JOIN** retorna todos os registros da tabela da esquerda. Mesmo que não exista correspondência na outra tabela.

``` sql
SELECT cliente.nome, pedido.valor
FROM cliente
LEFT JOIN pedido
ON cliente.id_cliente = pedido.id_cliente;
```

Saída:

| nome   | valor |
|--------|-------|
| Ana    | 200   |
| Ana    | 150   |
| Carlos | 300   |
| Maria  | NULL  |

#### JUNÇÃO A DIREITA (RIGHT JOIN)

O **RIGHT JOIN** retorna todos os registros da tabela da direita.

``` sql
SELECT cliente.nome, pedido.valor
FROM cliente
RIGHT JOIN pedido
ON cliente.id_cliente = pedido.id_cliente;
```

Saída:

| nome   | valor |
|--------|-------|
| Ana    | 200   |
| Ana    | 150   |
| Carlos | 300   |

#### JUNÇÃO COMPLETO (FULL JOIN)

Retorna **todos os registros das duas tabelas (esquerda e direita)**.

``` sql
SELECT cliente.nome, pedido.valor
FROM cliente
FULL JOIN pedido
ON cliente.id_cliente = pedido.id_cliente;
```

Saída:

| nome   | valor |
|--------|-------|
| Ana    | 200   |
| Ana    | 150   |
| Carlos | 300   |
| Maria  | NULL  |

### Operação de AGRUPAMENTO de dados GROUP BY

Considere ainda as RELAÇÕES (tabelas) do exemplo anterior, CLIENTES e PEDIDOS:

Para demonstra-los, vamos tomar duas Relações (tabelas) como exemplo:

![](images/Aula-04-sql-avancado-2.svg)<!-- -->

##### Tabela CLIENTES

| id_cliente | nome   |
|------------|--------|
| 1          | Ana    |
| 2          | Carlos |
| 3          | Maria  |

##### Tabela PEDIDOS

+--------------+--------------+------------------------------+
| id_pedido    | id_cliente   | valor                        |
+==============+==============+==============================+
| 101          | 1            | 200                          |
+--------------+--------------+------------------------------+
| 102          | 1            | 150                          |
+--------------+--------------+------------------------------+
| 103          | 2            | 300                          |
+--------------+--------------+------------------------------+

O comando **GROUP BY** é usado para **agrupar registros**.

``` sql
SELECT id_cliente, COUNT(*) AS total_pedidos
FROM pedido
GROUP BY id_cliente;
```

Normalmente é utilizado junto com **funções de agregação**.

| Função  | Descrição        |
|---------|------------------|
| COUNT() | contar registros |
| SUM()   | soma             |
| AVG()   | média            |
| MAX()   | maior valor      |
| MIN()   | menor valor      |

Saída:

| id_cliente | total_pedidos |
|------------|---------------|
| 1          | 2             |
| 2          | 1             |

### Operação de filtragem de grupos de dados HAVING

O comando **HAVING** é usado para **filtrar grupos**. Diferença importante com o **WHERE**:

| Comando | Atua sobre |
|---------|------------|
| WHERE   | linhas     |
| HAVING  | grupos     |

Exemplo 1 - Considerando as tabelas do pedido anterior, selecione os clientes com **mais de um pedido:**

``` sql
SELECT id_cliente, COUNT(*) AS total
FROM pedido
GROUP BY id_cliente
HAVING COUNT(*) > 1;
```

Saída:

| id_cliente | total_pedidos |
|------------|---------------|
| 1          | 2             |

## REFRÊNCIAS:

SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. Database System Concepts. 7. ed. New York: McGraw-Hill Education, 2019.



<!--chapter:end:04-2026-03-10_Modelagem_SGBD-aula-02.Rmd-->

---
output: 
  html_document: 
    highlight: tango
    theme: cerulean
    toc_depth: 4
    number_sections: true
  pdf_document: 
    toc: true
    toc_depth: 4
  word_document: 
    toc: true
    toc_depth: 4
---

## Exercícios RESOLVIDOS

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Exercício 1 — Universidade                                                                                                                                                                                                                                                                 |
+============================================================================================================================================================================================================================================================================================+
| ![](04-aula04/media/exercicio-01.jpg)                                                                                                                                                                                                                                                      |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere uma Universidade que possui vários Cursos. Cada curso tem um nome, uma duração em semestres e um coordenador. A universidade possui Professores, cada um com um nome, título e CPF. Um professor pode ministrar várias disciplinas, e cada disciplina pertence a um único curso. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados                                                                                                                                         |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

DIAGRAMA ENTIDADE-RELACIONAMENTO (D.E.R.) com as informações levantadas:

![](images/exemplo04-01-01.svg)<!-- -->

#### Criando o código SQL referente ao diagrama apresentado:

``` sql
/* =========================================================
   Passo 1️- CRIAR TABELAS (somente colunas, sem PK nem FK)
   ========================================================= */
CREATE TABLE UNIVERSIDADES 
(
    nome            VARCHAR(255),
    CNPJ            VARCHAR(14)
);

CREATE TABLE CURSOS 
(
    nome            VARCHAR(255),
    duracao         INT,
    coordenador     VARCHAR(255),
    codigo_curso    INTEGER
);

CREATE TABLE PROFESSORES 
(
    cpf             VARCHAR(11),
    nome            VARCHAR(255),
    titulo          VARCHAR(255)
);

CREATE TABLE DISCIPLINAS 
(
    nome                VARCHAR(255),
    codigo_disciplina   INTEGER
);

/* =========================================================
   Passo 2- ADICIONAR CHAVES PRIMÁRIAS
   ========================================================= */
ALTER TABLE UNIVERSIDADES ADD PRIMARY KEY (CNPJ);

ALTER TABLE CURSOS        ADD PRIMARY KEY (codigo_curso);

ALTER TABLE PROFESSORES   ADD PRIMARY KEY (cpf);

ALTER TABLE DISCIPLINAS   ADD PRIMARY KEY (codigo_disciplina);

/* =========================================================
   Passo 3- CRIAR COLUNAS PARA FUTURAS CHAVES ESTRANGEIRAS
   -- Sempre no lado N de cada relacionamento
   ========================================================= */
-- UNIVERSIDADES (1) —— (N) CURSOS  → CURSOS precisa de CNPJ
ALTER TABLE CURSOS   ADD COLUMN CNPJ VARCHAR(14);

-- UNIVERSIDADES (1) —— (N) PROFESSORES → PROFESSORES precisa de CNPJ
ALTER TABLE PROFESSORES  ADD COLUMN CNPJ VARCHAR(14);

-- PROFESSORES (1) —— (N) DISCIPLINAS → DISCIPLINAS precisa de cpf
ALTER TABLE DISCIPLINAS ADD COLUMN cpf VARCHAR(11);

/* =========================================================
   Passo 4- CRIAR AS CHAVES ESTRANGEIRAS
   ========================================================= */
ALTER TABLE CURSOS      ADD CONSTRAINT fk_cursos_universidade      FOREIGN KEY (CNPJ) REFERENCES UNIVERSIDADES (CNPJ);

ALTER TABLE PROFESSORES ADD CONSTRAINT fk_professores_universidade FOREIGN KEY (CNPJ) REFERENCES UNIVERSIDADES (CNPJ);

ALTER TABLE DISCIPLINAS ADD CONSTRAINT fk_disciplinas_professor    FOREIGN KEY (cpf)  REFERENCES PROFESSORES (cpf);
```

------------------------------------------------------------------------

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Exercício 2 — Um Projeto de e-commerce                                                                                                                                                                                             |
+====================================================================================================================================================================================================================================+
| ![](04-aula04/media/exercicio-02-e_commerce.jpg)                                                                                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Um Cliente faz Pedidos em um sistema de e-commerce. Cada cliente tem um nome, endereço e telefone. Os pedidos possuem uma data, um valor total e podem conter vários Produtos. Cada produto tem um nome, uma descrição e um preço. |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

DIAGRAMA ENTIDADE-RELACIONAMENTO (D.E.R.) apresentado:

![](images/exemplo04-02-01.svg)<!-- -->

#### Criando o código SQL referente ao diagrama apresentado:

``` sql

-- CRIAR AS TABELAS

CREATE TABLE Cliente 
(
    id_cliente INT,
    nome VARCHAR(255)
);

CREATE TABLE CPF 
(
    numero_cpf CHAR(11)
);

-- ADICIONAR AS CHAVES PRIMÁRIAS

ALTER TABLE Cliente ADD PRIMARY KEY (id_cliente);

ALTER TABLE CPF ADD PRIMARY KEY (numero_cpf);


-- O relacionamento é 1:1. Podemos escolher um dos lados para armazenar a chave.
-- Aqui vamos seguir o diagrama, colocando a chave estrangeira de CPF em Cliente.

ALTER TABLE Cliente ADD COLUMN numero_cpf CHAR(11);

-- CRIAR AS CHAVES ESTRANGEIRAS

ALTER TABLE Cliente ADD CONSTRAINT fk_cliente_cpf FOREIGN KEY (numero_cpf) REFERENCES CPF (numero_cpf);
```

------------------------------------------------------------------------

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Exercício 3 — Hospital                                                                                                                                                                                                                                                                  |
+=========================================================================================================================================================================================================================================================================================+
| ![](04-aula04/media/exercicio-03.jpg)                                                                                                                                                                                                                                                   |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Um Hospital registra Pacientes, cada um com nome, idade, endereço e telefone. Os pacientes podem realizar várias Consultas com Médicos. Cada médico possui um CRM, um nome e uma especialidade. Durante a consulta, o médico pode prescrever Receitas, que possuem medicação e dosagem. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Identifique as **entidades**                                                                                                                                                                                                                                                        |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

DIAGRAMA ENTIDADE-RELACIONAMENTO (D.E.R.) apresentado:

![](images/exemplo04-03-01.svg)<!-- -->

#### Criando o código SQL referente ao diagrama apresentado:

``` sql

/* =========================================================
   Passo 1- TABELAS (apenas colunas, sem PK ou FK)
   ========================================================= */
CREATE TABLE HOSPITAIS 
(
    nome    VARCHAR(255),
    cnpj    CHAR(14)
);

CREATE TABLE PACIENTES 
(
    nome        VARCHAR(255),
    idade       INT,
    endereco    VARCHAR(255),
    telefone    VARCHAR(20),
    cpf         CHAR(11)
);

CREATE TABLE MEDICOS 
(
    nome            VARCHAR(255),
    especialidade   VARCHAR(255),
    crm             CHAR(15)
);

/* As próximas tabelas representam os relacionamentos N:M
   com atributos próprios (tabelas de junção) */
CREATE TABLE REGISTRAM 
(
    -- sem colunas de FK por enquanto
);

CREATE TABLE CONSULTAM 
(
    data_consulta   DATE,
    hora            TIME,
    sala            VARCHAR(50)
);

CREATE TABLE RECEITAM 
(
    medicacao       VARCHAR(255),
    dosagem         VARCHAR(100)
);

/* =========================================================
   Passo 2- ADICIONAR CHAVES PRIMÁRIAS
   ========================================================= */
ALTER TABLE HOSPITAIS  ADD PRIMARY KEY (cnpj);

ALTER TABLE PACIENTES  ADD PRIMARY KEY (cpf);

ALTER TABLE MEDICOS    ADD PRIMARY KEY (crm);

/* Para tabelas de relacionamento com atributos, a PK será composta
   (as FKs a serem criadas formarão a chave primária). Faremos isso depois
   de adicionar as colunas de FK. */

/* =========================================================
   Passo 3- CRIAR COLUNAS PARA FUTURAS CHAVES ESTRANGEIRAS
   ========================================================= */
-- REGISTRAM: HOSPITAIS (1) —— (N) PACIENTES
ALTER TABLE REGISTRAM ADD COLUMN cnpj CHAR(14), ADD COLUMN cpf  CHAR(11);

-- CONSULTAM: MEDICOS (N) —— (N) PACIENTES
ALTER TABLE CONSULTAM ADD COLUMN crm  CHAR(15), ADD COLUMN cpf  CHAR(11);

-- RECEITAM: MEDICOS (N) —— (N) PACIENTES
ALTER TABLE RECEITAM  ADD COLUMN crm  CHAR(15), ADD COLUMN cpf  CHAR(11);

/* =========================================================
   Passo 4- CRIAR CHAVES ESTRANGEIRAS
   ========================================================= */
ALTER TABLE REGISTRAM
    ADD CONSTRAINT fk_registram_hospitais
        FOREIGN KEY (cnpj)
        REFERENCES HOSPITAIS (cnpj),
    ADD CONSTRAINT fk_registram_pacientes
        FOREIGN KEY (cpf)
        REFERENCES PACIENTES (cpf);

ALTER TABLE CONSULTAM
    ADD CONSTRAINT fk_consultam_medicos
        FOREIGN KEY (crm)
        REFERENCES MEDICOS (crm),
    ADD CONSTRAINT fk_consultam_pacientes
        FOREIGN KEY (cpf)
        REFERENCES PACIENTES (cpf);

ALTER TABLE RECEITAM
    ADD CONSTRAINT fk_receitam_medicos
        FOREIGN KEY (crm)
        REFERENCES MEDICOS (crm),
    ADD CONSTRAINT fk_receitam_pacientes
        FOREIGN KEY (cpf)
        REFERENCES PACIENTES (cpf);

/* Definir chaves primárias compostas para tabelas de relacionamento */
ALTER TABLE REGISTRAM ADD PRIMARY KEY (cnpj, cpf);

ALTER TABLE CONSULTAM ADD PRIMARY KEY (crm, cpf, data_consulta, hora);

ALTER TABLE RECEITAM  ADD PRIMARY KEY (crm, cpf, medicacao);
```

------------------------------------------------------------------------

### Exercícios

### 📝 Lista de Exercícios – Modelo Entidade-Relacionamento (MER)

#### Exercício 1 – Cliente e CPF (1:1)

![](04-aula04/media/exercicio-01-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio-04-01.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 2 – Cliente e Pedidos (1:N)

![](04-aula04/media/exercicio-02-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-02.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 3 – Alunos e Disciplinas (N:M)

![](04-aula04/media/exercicio-03-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-03.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 4 – Funcionário e Dependentes (Entidade Fraca)

![](04-aula04/media/exercicio-04-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-04.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 5 – Pedido e Itens de Pedido (Entidade Associativa + Fraca)

![](04-aula04/media/exercicio-05-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-05.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 6 – Médicos e Consultas (1:N)

![](04-aula04/media/exercicio-06-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-06.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 7 – Professor e Departamento (1:1)

![](04-aula04/media/exercicio-07-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-07.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 8 – Livros e Autores (N:M)

![](04-aula04/media/exercicio-08-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-08.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 9 – Biblioteca (Entidades Fortes e Fracas)

![](04-aula04/media/exercicio-09-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-09.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

#### Exercício 10 – Empresa, Funcionário e Projeto (Misto 1:N e N:M)

![](04-aula04/media/exercicio-10-resolver.jpg)

+----------------------------------------------------------------------------------------------------------------------------------------------------+
| Considere um projeto de Banco de Dados de uma escola. Faça a modelagem utilizando o Modelo Entidade-Relacionamento de Peter Chen (M.E.R.).         |
+----------------------------------------------------------------------------------------------------------------------------------------------------+
| a)  Com base no Diagrama Entidade-Relacionamento faça o código SQL que implementa o modelo físico em um Sistema de Gerenciamento de Banco de Dados |
+----------------------------------------------------------------------------------------------------------------------------------------------------+

![](images/exercicio04-10.svg)<!-- -->

``` sql
-- Coloque aqui o código SQL criar as tabelas:
```

------------------------------------------------------------------------

### Respostas dos Exercícios:

#### Exercício #1

![](images/exercicio04-01-resposta.svg)<!-- -->

##### Exercício 1 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   TRANSFORMA AS ENTIDADES EM TABELAS E ATRIBUTOS EM COLUNAS
   ========================================================= */
CREATE TABLE CLIENTES 
(
    id_cliente INTEGER,
    nome VARCHAR(255)
);

CREATE TABLE CPFS
(
    numero_cpf CHAR(11)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */
ALTER TABLE CLIENTES ADD PRIMARY KEY (id_cliente);

ALTER TABLE CPFS ADD PRIMARY KEY (numero_cpf);

/* =========================================================
    Criar coluna para futura chave estrangeira
   ========================================================= */
-- Relacionamento 1:1 (um cliente possui um CPF)
-- Vamos colocar a FK na tabela CLIENTES

ALTER TABLE CLIENTES   ADD COLUMN numero_cpf CHAR(11);

/* =========================================================
    Criar chave estrangeira
   ========================================================= */

ALTER TABLE CLIENTES ADD CONSTRAINT fk_clientes_cpfs FOREIGN KEY (numero_cpf) EFERENCES CPFS (numero_cpf);
```

------------------------------------------------------------------------

#### Exercício #2

![](images/exercicio04-02-resposta.svg)<!-- -->

##### Exercício 2 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */
CREATE TABLE CLIENTES 
(
    cpf CHAR(11),
    nome VARCHAR(255)
);

CREATE TABLE PEDIDOS 
(
    cod_pedido INT,
    data DATE,
    valor_total DECIMAL(10,2)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */

ALTER TABLE CLIENTES  ADD PRIMARY KEY (cpf);

ALTER TABLE PEDIDOS   ADD PRIMARY KEY (cod_pedido);

/* =========================================================
   Criar coluna para futura chave estrangeira
   ========================================================= */
-- Relacionamento CLIENTES 1:N PEDIDOS 

ALTER TABLE PEDIDOS ADD COLUMN cpf_cliente CHAR(11);

/* =========================================================
   Criar chave estrangeira
   ========================================================= */

ALTER TABLE PEDIDOS ADD CONSTRAINT fk_pedidos_clientes  FOREIGN KEY (cpf_cliente) REFERENCES CLIENTES (cpf);
```

------------------------------------------------------------------------

#### Exercício #3

![](images/exercicio04-03-resposta.svg)<!-- -->

##### Exercício 3 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */

CREATE TABLE ALUNOS 
(
    id_aluno INT,
    nome VARCHAR(255)
);

CREATE TABLE DISCIPLINAS 
(
    id_disciplina INT,
    nome VARCHAR(255)
);

/* Tabela para o relacionamento N:M */

CREATE TABLE MATRICULA 
(
    semestre VARCHAR(10)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */

ALTER TABLE ALUNOS  ADD PRIMARY KEY (id_aluno);

ALTER TABLE DISCIPLINAS ADD PRIMARY KEY (id_disciplina);

/* A PK da tabela MATRICULA será composta pelas FKs */
-- Definiremos depois de criar as colunas de FK

/* =========================================================
   Criar colunas para futuras chaves estrangeiras (lado N)
   ========================================================= */

ALTER TABLE MATRICULA ADD COLUMN id_aluno INT, ADD COLUMN id_disciplina INT;

/* =========================================================
   Criar chaves estrangeiras
   ========================================================= */

ALTER TABLE MATRICULA ADD CONSTRAINT fk_matricula_aluno FOREIGN KEY (id_aluno) REFERENCES ALUNOS (id_aluno);

ALTER TABLE MATRICULA ADD CONSTRAINT fk_matricula_disciplina FOREIGN KEY (id_disciplina) REFERENCES DISCIPLINAS (id_disciplina);

/* =========================================================
   Definir chave primária composta da tabela MATRICULA
   ========================================================= */

ALTER TABLE MATRICULA ADD PRIMARY KEY (id_aluno, id_disciplina);
```

------------------------------------------------------------------------

#### Exercício #4

![](images/exercicio04-04-resposta.svg)<!-- -->

##### Exercício 4 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */
CREATE TABLE FUNCIONARIOS 
(
    id_funcionario INT,
    nome VARCHAR(255),
    cargo VARCHAR(100),
    salario DECIMAL(10,2)
);

CREATE TABLE DEPENDENTES 
(
    id_dependente INT,
    nome VARCHAR(255),
    parentesco VARCHAR(50),
    data_nascimento DATE
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */

ALTER TABLE FUNCIONARIOS ADD PRIMARY KEY (id_funcionario);

ALTER TABLE DEPENDENTES ADD PRIMARY KEY (id_dependente);

/* =========================================================
   Criar coluna para futura chave estrangeira
   ========================================================= */

-- Relacionamento FUNCIONARIOS 1:N DEPENDENTES

ALTER TABLE DEPENDENTES ADD COLUMN id_funcionario INT;

/* =========================================================
   Criar chave estrangeira
   ========================================================= */

ALTER TABLE DEPENDENTES ADD CONSTRAINT fk_dependentes_funcionarios FOREIGN KEY (id_funcionario) REFERENCES FUNCIONARIOS  (id_funcionario);
```

------------------------------------------------------------------------

#### Exercício #5

![](images/exercicio04-05-resposta.svg)<!-- -->

##### Exercício 5 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */
CREATE TABLE PEDIDOS 
(
    id_pedido INT,
    data_pedido DATE,
    valor_total DECIMAL(10,2),
    status VARCHAR(50)
);

CREATE TABLE ITENS 
(
    id_item INT,
    descricao VARCHAR(255),
    quantidade INT,
    preco_unitario DECIMAL(10,2)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */
ALTER TABLE PEDIDOS ADD PRIMARY KEY (id_pedido);

ALTER TABLE ITENS ADD PRIMARY KEY (id_item);

/* =========================================================
   Criar coluna para futura chave estrangeira
   ========================================================= */

-- Relacionamento PEDIDOS 1:N ITENS

ALTER TABLE ITENS ADD COLUMN id_pedido INT;

/* =========================================================
   Criar chave estrangeira
   ========================================================= */

ALTER TABLE ITENS ADD CONSTRAINT fk_itens_pedidos FOREIGN KEY (id_pedido) REFERENCES PEDIDOS (id_pedido);
```

------------------------------------------------------------------------

#### Exercício #6

![](images/exercicio04-06-resposta.svg)<!-- -->

##### Exercício 6 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */
CREATE TABLE MEDICOS 
(
    id_medico INT,
    nome VARCHAR(255),
    especialidade VARCHAR(100),
    crm VARCHAR(20)
);

CREATE TABLE CONSULTAS 
(
    id_consulta INT,
    data_consulta DATE,
    hora TIME,
    observacoes VARCHAR(255)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */

ALTER TABLE MEDICOS ADD PRIMARY KEY (id_medico);

ALTER TABLE CONSULTAS ADD PRIMARY KEY (id_consulta);

/* =========================================================
   Criar coluna para futura chave estrangeira
   ========================================================= */
-- Relacionamento MEDICOS 1:N CONSULTAS

ALTER TABLE CONSULTAS ADD COLUMN id_medico INT;

/* =========================================================
   Criar chave estrangeira
   ========================================================= */

ALTER TABLE CONSULTAS ADD CONSTRAINT fk_consultas_medicos FOREIGN KEY (id_medico) REFERENCES MEDICOS (id_medico);
```

------------------------------------------------------------------------

#### Exercício #7

![](images/exercicio04-07-resposta.svg)<!-- -->

##### Exercício 7 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */
CREATE TABLE PROFESSORES 
(
    id_professor INT,
    nome VARCHAR(255),
    titulacao VARCHAR(100),
    email VARCHAR(255)
);

CREATE TABLE DEPARTAMENTOS 
(
    id_departamento INT,
    nome VARCHAR(255),
    localizacao VARCHAR(255),
    telefone VARCHAR(20)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */
ALTER TABLE PROFESSORES ADD PRIMARY KEY (id_professor);

ALTER TABLE DEPARTAMENTOS ADD PRIMARY KEY (id_departamento);

/* =========================================================
   Criar coluna para futura chave estrangeira
   ========================================================= */
-- Relacionamento 1:1 entre PROFESSORES e DEPARTAMENTOS
-- Aqui vamos colocar a FK em DEPARTAMENTOS, vinculando ao professor responsável

ALTER TABLE DEPARTAMENTOS ADD COLUMN id_professor INT;

/* =========================================================
   Criar chave estrangeira
   ========================================================= */

ALTER TABLE DEPARTAMENTOS ADD CONSTRAINT fk_departamentos_professores FOREIGN KEY (id_professor) REFERENCES PROFESSORES (id_professor);
```

------------------------------------------------------------------------

#### Exercício #8

![](images/exercicio04-08-resposta.svg)<!-- -->

##### Exercício 8 - SQL referênte ao diagrama anterior

``` sql

/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */
CREATE TABLE LIVROS 
(
    id_livro INT,
    titulo VARCHAR(255),
    ano_publicacao INT,
    editora VARCHAR(255)
);

CREATE TABLE AUTORES 
(
    id_autor INT,
    nome VARCHAR(255),
    nacionalidade VARCHAR(100)
);

/* Tabela para relacionamento N:M com atributos */

CREATE TABLE ESCREVEM 
(
    data_participacao DATE,
    ordem_autoria INT
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */
ALTER TABLE LIVROS ADD PRIMARY KEY (id_livro);

ALTER TABLE AUTORES ADD PRIMARY KEY (id_autor);

/* =========================================================
   Criar colunas para futuras chaves estrangeiras
   ========================================================= */

ALTER TABLE ESCREVEM ADD COLUMN id_livro INT, ADD COLUMN id_autor INT;

/* =========================================================
   Criar chaves estrangeiras
   =====================================

ALTER TABLE ESCREVEM ADD CONSTRAINT fk_escrevem_livros   FOREIGN KEY (id_livro) REFERENCES LIVROS (id_livro);

ALTER TABLE ESCREVEM ADD CONSTRAINT fk_escrevem_autores  FOREIGN KEY (id_autor) REFERENCES AUTORES (id_autor);

/* =========================================================
   Definir chave primária composta da tabela ESCREVEM
   ========================================================= */

ALTER TABLE ESCREVEM  ADD PRIMARY KEY (id_livro, id_autor);
```

------------------------------------------------------------------------

#### Exercício #9

![](images/exercicio04-09-resposta.svg)<!-- -->

##### Exercício 9 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */

CREATE TABLE LIVROS 
(
    id_livro INT,
    titulo VARCHAR(255),
    ano INT
);

CREATE TABLE EXEMPLARES 
(
    codigo_exemplar INT,
    status VARCHAR(50)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */

ALTER TABLE LIVROS ADD PRIMARY KEY (id_livro);

/* A chave primária de EXEMPLARES será composta depois, usando FK + codigo_exemplar */

/* =========================================================
   Criar coluna para futura chave estrangeira
   ========================================================= */
-- Relacionamento LIVROS 1:N EXEMPLARES

ALTER TABLE EXEMPLARES ADD COLUMN id_livro INT;

/* =========================================================
   Criar chave estrangeira
   ========================================================= */

ALTER TABLE EXEMPLARES ADD CONSTRAINT fk_exemplares_livros FOREIGN KEY (id_livro) REFERENCES LIVROS (id_livro);

/* =========================================================
   Definir chave primária composta da tabela EXEMPLARES
   ========================================================= */

ALTER TABLE EXEMPLARES ADD PRIMARY KEY (id_livro, codigo_exemplar);
```

------------------------------------------------------------------------

#### Exercício #10

![](images/exercicio04-10-resposta.svg)<!-- -->

##### Exercício 10 - SQL referênte ao diagrama anterior

``` sql
/* =========================================================
   Criar tabelas (sem PK ou FK)
   ========================================================= */
CREATE TABLE EMPRESAS (
    id_empresa INT,
    nome VARCHAR(255),
    cnpj CHAR(14),
    endereco VARCHAR(255)
);

CREATE TABLE FUNCIONARIOS (
    id_funcionario INT,
    nome VARCHAR(255),
    cargo VARCHAR(100),
    salario DECIMAL(10,2)
);

CREATE TABLE PROJETOS (
    id_projeto INT,
    nome VARCHAR(255),
    data_inicio DATE,
    data_fim DATE,
    descricao VARCHAR(255)
);

CREATE TABLE PARTICIPAM (
    data_inicio DATE,
    data_fim DATE,
    papel VARCHAR(100)
);

/* =========================================================
   Definir chaves primárias
   ========================================================= */
ALTER TABLE EMPRESAS ADD PRIMARY KEY (id_empresa);

ALTER TABLE FUNCIONARIOS ADD PRIMARY KEY (id_funcionario);

ALTER TABLE PROJETOS ADD PRIMARY KEY (id_projeto);

/* A tabela PARTICIPAM terá PK composta, definida depois */

/* =========================================================
   Criar colunas para futuras chaves estrangeiras
   ========================================================= */
-- Relacionamento EMPRESAS 1:N FUNCIONARIOS

ALTER TABLE FUNCIONARIOS  ADD COLUMN id_empresa INT;

-- Relacionamento FUNCIONARIOS N:M PROJETOS
ALTER TABLE PARTICIPAM ADD COLUMN id_funcionario INT, ADD COLUMN id_projeto INT;

/* =========================================================
   Criar chaves estrangeiras
   ========================================================= */
ALTER TABLE FUNCIONARIOS ADD CONSTRAINT fk_funcionarios_empresas FOREIGN KEY (id_empresa) REFERENCES EMPRESAS (id_empresa);

ALTER TABLE PARTICIPAM ADD CONSTRAINT fk_participam_funcionarios FOREIGN KEY (id_funcionario) REFERENCES FUNCIONARIOS (id_funcionario);

ALTER TABLE PARTICIPAM ADD CONSTRAINT fk_participam_projetos FOREIGN KEY (id_projeto) REFERENCES PROJETOS (id_projeto);

/* =========================================================
   Definir chave primária composta da tabela PARTICIPAM
   ========================================================= */

ALTER TABLE PARTICIPAM ADD PRIMARY KEY (id_funcionario, id_projeto);
```

------------------------------------------------------------------------



<!--chapter:end:04-2026-03-10_Modelagem_SGBD-exercicio-02.Rmd-->

# Administração e Gerenciamento de Bancos de Dados

#### 25/08/2025 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}

## Administração e Gerenciamento de Banco de Dados:

Por que administração e gerenciamento são fundamentais

-   Integridade e consistência

-   Garantir que as regras de negócio (restrições, chaves, relacionamentos) sejam sempre respeitadas.

-   Evitar dados duplicados ou incoerentes.

-   Disponibilidade e recuperação

-   Planejar backup e restore; criar políticas de alta disponibilidade e contingência para falhas ou desastres.

-   Segurança e controle de acesso

-   Definir quem pode ver, inserir, alterar ou excluir dados.

-   Atender requisitos de LGPD/privacidade e normas corporativas.

-   Desempenho e escalabilidade

-   Monitorar consultas lentas, criar índices adequados, ajustar parâmetros do SGBD para suportar crescimento do volume de dados.

-   Manutenção e evolução

-   Atualizar versões, aplicar patches, revisar modelos de dados à medida que a aplicação muda.

## Papel do DBA (Database Administrator)

O DBA é o profissional responsável por orquestrar tudo isso.Principais atribuições:

-   Projeto físico do banco (estrutura de tabelas, índices, partições).

-   Gestão de usuários e permissões – criação de contas, papéis (roles), políticas de segurança.

-   Backup e recuperação – políticas de backup, testes de restauração.

-   Monitoramento de desempenho – tuning de consultas, manutenção de índices, análise de logs.

-   Planejamento de capacidade – prever crescimento, escalabilidade e uso de recursos.

-   Atualizações e patches – manter o SGBD seguro e estável.

Sem administração e gerenciamento adequados, um banco de dados vira um “depósito de riscos”: falhas, lentidão, vazamento de informações ou perda definitiva de dados. O DBA atua como guardião da informação, garantindo que ela esteja correta, segura, disponível e performática, sustentando todas as operações da organização.

## Usuários, Grupos e Esquemas de Bancos de Dados

### Usuários

O que são ? Contas individuais que representam pessoas, aplicações ou serviços que acessam o banco.Cada usuário possui um nome de login e, geralmente, uma senha ou outro método de autenticação.

#### Funções principal

-   Conectar-se ao SGBD.

-   Executar operações de leitura, escrita ou administração conforme os privilégios concedidos.

#### Privilégios:

Podem ser específicos (ex.: SELECT em uma tabela) ou globais (ex.: CREATE DATABASE).

São a base do controle de acesso.

### Esquemas

O que são ? Um esquema é um container lógico de objetos do banco de dados. Ele organiza tabelas, views, funções, procedures, índices, triggers etc.

#### Por que usar

-   Facilita a organização (por projeto, por aplicação, por departamento).

-   Permite gestão de permissões mais granular: você pode conceder privilégios em nível de esquema.

-   Evita conflitos de nomes, pois objetos com o mesmo nome podem existir em esquemas diferentes.

### Grupos ou Roles

O que são ? Papéis coletivos que agrupam permissões e, muitas vezes, usuários.

No MySQL: CREATE ROLE ...

No PostgreSQL: roles podem ser usuários ou grupos.

#### Vantagens

-   Gerenciamento simplificado: conceda privilégios ao grupo e depois apenas adicione/remova usuários.

-   Consistência: garante que todos de uma equipe tenham as mesmas permissões.

-   Escalabilidade: ao entrar um novo membro, basta associá-lo ao role, sem revisar dezenas de tabelas.

### Sistema de Gerenciamento de Banco de Dados (S.G.B.D.)

O Sistema de Gerenciamento de Banco de Dados cuida não só de como as informações são armazenadas, mas também quem pode acessa-las, sob quais condições.

![](media/01-SGBD.jpg)

### Criação de usuários no MySQL

Podemos criar um novo usuário no SGBD MySQL através do seguinte comando SQL-DCL:

``` sql
CREATE USER 'nome_login'@'host' IDENTIFIED BY 'senha' COMMENT 'descrição';
```

| Parte | Função |
|:----------------------------------:|:----------------------------------:|
| 'nome_login' | Nome de login do novo usuário. |
| 'host' | Origem permitida de conexão. |
| IDENTIFIED BY 'senha' | Define a senha inicial. |
| COMMENT 'descrição' | (Opcional) Uma anotação de texto para identificar o usuário. |

Exemplo 1:

Crie o usuário do aluno "Bruno Marques". O usuário deve ser o RA do aluno e a sua senha deve ser *unip*.

``` sql
CREATE USER 'f362bf0'@'%' IDENTIFIED BY 'unip' COMMENT 'Bruno Antonio Marques';
```

Exemplo 2:

Crie os usuários de todos os alunos da sala. O usuário deve ser o RA do aluno e a sua senha deve ser *unip*.

``` sql

-- turma TI2P40

-- usuários no MySQL

DROP USER IF EXISTS 'f362bf0'@'%'; -- apaga o 'Bruno Antonio Marques';
DROP USER IF EXISTS 'r536fa6'@'%'; -- apaga o 'Caio Cesar Balbino Da Silva';
DROP USER IF EXISTS 'h756960'@'%'; -- apaga o 'Heder Rodrigues Da Silva';
DROP USER IF EXISTS 'r8133g7'@'%'; -- apaga o 'Ítalo Kevin Rodrigues Da Silva';
DROP USER IF EXISTS 'r837aa0'@'%'; -- apaga o 'Lucas Souza Rodrigues';
DROP USER IF EXISTS 'h714419'@'%'; -- apaga o 'Marcos Paulo Cordeiro Goes';
DROP USER IF EXISTS 'r854124'@'%'; -- apaga o 'Ramon Borges De Holanda';


CREATE USER 'f362bf0'@'%' IDENTIFIED BY 'unip' COMMENT  'Bruno Antonio Marques';
CREATE USER 'r536fa6'@'%' IDENTIFIED BY 'unip' COMMENT  'Caio Cesar Balbino Da Silva';
CREATE USER 'h756960'@'%' IDENTIFIED BY 'unip' COMMENT  'Heder Rodrigues Da Silva';
CREATE USER 'r8133g7'@'%' IDENTIFIED BY 'unip' COMMENT  'Ítalo Kevin Rodrigues Da Silva';
CREATE USER 'r837aa0'@'%' IDENTIFIED BY 'unip' COMMENT  'Lucas Souza Rodrigues';
CREATE USER 'h714419'@'%' IDENTIFIED BY 'unip' COMMENT  'Marcos Paulo Cordeiro Goes';
CREATE USER 'r854124'@'%' IDENTIFIED BY 'unip' COMMENT  'Ramon Borges De Holanda';

-- turma TI1P40

DROP USER IF EXISTS 'n0296a6'@'%'; -- apaga o 'Bryan Lucena Barbosa Da Silva';
DROP USER IF EXISTS 'h788986'@'%'; -- apaga o 'Igor Soares Lima Da Cunha';
DROP USER IF EXISTS 'h77gii5'@'%'; -- apaga o 'Jessica Cristina De S Silva';
DROP USER IF EXISTS 'f3648i0'@'%'; -- apaga o 'Maysa Kelly Dos Santos Freitas';


CREATE USER 'n0296a6'@'%' IDENTIFIED BY 'unip' COMMENT  'Bryan Lucena Barbosa Da Silva';
CREATE USER 'h788986'@'%' IDENTIFIED BY 'unip' COMMENT  'Igor Soares Lima Da Cunha';
CREATE USER 'h77gii5'@'%' IDENTIFIED BY 'unip' COMMENT  'Jessica Cristina De S Silva';
CREATE USER 'f3648i0'@'%' IDENTIFIED BY 'unip' COMMENT  'Maysa Kelly Dos Santos Freitas';
```

### Criação de Esquemas de Banco de Dados no MySQL

No MySQL, schema e database são sinônimos. É o “contêiner” onde ficam tabelas, views, procedures, usuários com permissões etc.

``` sql
CREATE DATABASE [IF NOT EXISTS] nome_do_schema  [OPTIONS];
```

| CREATE DATABASE: cria um novo banco.                          |
|---------------------------------------------------------------|
| IF NOT EXISTS: evita erro caso o schema já exista.            |
| nome_do_schema: nome do banco.                                |
| [OPTIONS]: parâmetros opcionais como CHARACTER SET ou COLLATE |

Exemplo 1:

Crie um esquema de Banco de Dados onde chamado 11-rondonia para guardar a tabela "Cidades";

``` sql
CREATE DATABASE IF NOT EXISTS `11-rondonia`;
```

Exemplo 2:

Crie um esquema de Banco de Dados de todas as Unidades da Federação para guardar tabelas "Cidades" dentro de cada uma:

``` sql
-- Script para criar um esquema (database) para cada UF brasileira
-- Nome do esquema: <código IBGE>-<nome_uf>
-- Ordenado pelo código IBGE
-- Compatível com MySQL 8

CREATE DATABASE IF NOT EXISTS `11-rondonia`;
CREATE DATABASE IF NOT EXISTS `12-acre`;
CREATE DATABASE IF NOT EXISTS `13-amazonas`;
CREATE DATABASE IF NOT EXISTS `14-roraima`;
CREATE DATABASE IF NOT EXISTS `15-para`;
CREATE DATABASE IF NOT EXISTS `16-amapa`;
CREATE DATABASE IF NOT EXISTS `17-tocantins`;
CREATE DATABASE IF NOT EXISTS `21-maranhao`;
CREATE DATABASE IF NOT EXISTS `22-piaui`;
CREATE DATABASE IF NOT EXISTS `23-ceara`;
CREATE DATABASE IF NOT EXISTS `24-rio_grande_do_norte`;
CREATE DATABASE IF NOT EXISTS `25-paraiba`;
CREATE DATABASE IF NOT EXISTS `26-pernambuco`;
CREATE DATABASE IF NOT EXISTS `27-alagoas`;
CREATE DATABASE IF NOT EXISTS `28-sergipe`;
CREATE DATABASE IF NOT EXISTS `29-bahia`;
CREATE DATABASE IF NOT EXISTS `31-minas_gerais`;
CREATE DATABASE IF NOT EXISTS `32-espiritosanto`;
CREATE DATABASE IF NOT EXISTS `33-rio_de_janeiro`;
CREATE DATABASE IF NOT EXISTS `35-sao_paulo`;
CREATE DATABASE IF NOT EXISTS `41-parana`;
CREATE DATABASE IF NOT EXISTS `42-santa_catarina`;
CREATE DATABASE IF NOT EXISTS `43-rio_grande_do_sul`;
CREATE DATABASE IF NOT EXISTS `50-mato_grosso_do_sul`;
CREATE DATABASE IF NOT EXISTS `51-mato_grosso`;
CREATE DATABASE IF NOT EXISTS `52-goias`;
CREATE DATABASE IF NOT EXISTS `53-distrito_federal`;
```

### Criando de Grupos de Permissões no MySQL:

No MySQL, roles (funções ou papéis) são grupos de permissões que você define uma vez e pode atribuir a vários usuários. Eles funcionam como “grupos de acesso”, facilitando o gerenciamento de privilégios. Em vez de conceder privilégios individualmente a cada usuário, você define tudo no role. Se precisar incluir um novo privilégio (ex.: UPDATE) para todos que já têm o role, basta atualizar o role uma vez.

Como criar uma regra no MySQL utilizando SQL-DCL

``` sql
CREATE ROLE 'nome_grupo';
```

onde, obviamente, *nome_grupo* é o nome do grupo a ser criado.

Exemplo 1:

Crie um grupo chamado *norte* para associar todas as unidades da federação da região norte do Brasil:

``` sql
CREATE ROLE 'norte';
```

Exemplo 2:

Crie um grupos para associar todas as unidades da federação de todas as regiões do Brasil:

``` sql
-- ===========================================
-- Criação de roles para as 5 regiões do Brasil
-- ===========================================

CREATE ROLE 'norte';
CREATE ROLE 'nordeste';
CREATE ROLE 'centro_oeste';
CREATE ROLE 'sudeste';
CREATE ROLE 'sul';

-- ===========================================
/*
Concedendo privilégios de leitura (SELECT) a cada grupo criado
*/
-- ===========================================

GRANT SELECT ON *.* TO 'norte';
GRANT SELECT ON *.* TO 'nordeste';
GRANT SELECT ON *.* TO 'centro_oeste';
GRANT SELECT ON *.* TO 'sudeste';
GRANT SELECT ON *.* TO 'sul';

-- ===========================================
-- Para atribuir um role a um usuário:
-- ===========================================
-- GRANT 'norte' TO 'usuario_exemplo'@'%';
-- SET DEFAULT ROLE 'norte' TO 'usuario_exemplo'@'%';
```

## Fazendo tudo funcionar: Colocando usuários em grupos e concedendo a estes acesso a Esquemas de Banco de Dados:

### Associando os esquemas que representam cada estado a cada grupo (que representa cada regição):

``` sql
-- ================================================
-- Associação dos esquemas (databases) aos roles
-- Roles criadas previamente:
--   norte, nordeste, centro_oeste, sudeste, sul
-- ================================================

-- >>>>> REGIÃO NORTE >>>>>>>>>>>>>>

GRANT ALL PRIVILEGES ON `11-rondonia`.*       TO 'norte';
GRANT ALL PRIVILEGES ON `12-acre`.*           TO 'norte';
GRANT ALL PRIVILEGES ON `13-amazonas`.*       TO 'norte';
GRANT ALL PRIVILEGES ON `14-roraima`.*        TO 'norte';
GRANT ALL PRIVILEGES ON `15-para`.*           TO 'norte';
GRANT ALL PRIVILEGES ON `16-amapa`.*          TO 'norte';
GRANT ALL PRIVILEGES ON `17-tocantins`.*      TO 'norte';

-- >>>>> REGIÃO NORDESTE >>>>>>>>>>>>>>

GRANT ALL PRIVILEGES ON `21-maranhao`.*            TO 'nordeste';
GRANT ALL PRIVILEGES ON `22-piaui`.*               TO 'nordeste';
GRANT ALL PRIVILEGES ON `23-ceara`.*               TO 'nordeste';
GRANT ALL PRIVILEGES ON `24-rio_grande_do_norte`.* TO 'nordeste';
GRANT ALL PRIVILEGES ON `25-paraiba`.*             TO 'nordeste';
GRANT ALL PRIVILEGES ON `26-pernambuco`.*          TO 'nordeste';
GRANT ALL PRIVILEGES ON `27-alagoas`.*             TO 'nordeste';
GRANT ALL PRIVILEGES ON `28-sergipe`.*             TO 'nordeste';
GRANT ALL PRIVILEGES ON `29-bahia`.*               TO 'nordeste';

-- >>>>> REGIÃO CENTRO_OESTE >>>>>>>>>>>>>>

GRANT ALL PRIVILEGES ON `50-mato_grosso_do_sul`.* TO 'centro_oeste';
GRANT ALL PRIVILEGES ON `51-mato_grosso`.*       TO 'centro_oeste';
GRANT ALL PRIVILEGES ON `52-goias`.*             TO 'centro_oeste';
GRANT ALL PRIVILEGES ON `53-distrito_federal`.*  TO 'centro_oeste';

-- >>>>> REGIÃO SUDESTE >>>>>>>>>>>>>>

GRANT ALL PRIVILEGES ON `31-minas_gerais`.*   TO 'sudeste';
GRANT ALL PRIVILEGES ON `32-espiritosanto`.*  TO 'sudeste';
GRANT ALL PRIVILEGES ON `33-rio_de_janeiro`.* TO 'sudeste';
GRANT ALL PRIVILEGES ON `35-sao_paulo`.*      TO 'sudeste';

-- >>>>> REGIÃO SUL >>>>>>>>>>>>>>

GRANT ALL PRIVILEGES ON `41-parana`.*            TO 'sul';
GRANT ALL PRIVILEGES ON `42-santa_catarina`.*    TO 'sul';
GRANT ALL PRIVILEGES ON `43-rio_grande_do_sul`.* TO 'sul';
```

### Associando associando alunos a cada grupo (região):

| Role (grupo) |     Usuários (login)      |
|:------------:|:-------------------------:|
|    norte     |     f362bf0, r536fa6      |
|   nordeste   |     h756960, r8133g7      |
| centro_oeste |     r837aa0, h714419      |
|   sudeste    |     r854124, n0296a6      |
|     sul      | h788986, h77gii5, f3648i0 |

#### Região Norte

![](images/aula_04-Exemplo-01-grupos-01.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-02.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-03.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-04.svg)<!-- -->

#### Região Nordeste

![](images/aula_04-Exemplo-01-grupos-05.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-06.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-07.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-08.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-09.svg)<!-- -->

#### Região Centro-Oeste

![](images/aula_04-Exemplo-01-grupos-10.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-11.svg)<!-- -->

#### Região Sudeste

![](images/aula_04-Exemplo-01-grupos-12.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-13.svg)<!-- -->

#### Região Sul

![](images/aula_04-Exemplo-01-grupos-15.svg)<!-- -->

![](images/aula_04-Exemplo-01-grupos-16.svg)<!-- -->

### Associando usuários aos grupos

``` sql
-- =========================================
-- Associação de usuários aos roles (grupos)
-- =========================================

-- Grupo Norte
GRANT 'norte' TO 'f362bf0'@'%';
GRANT 'norte' TO 'r536fa6'@'%';

-- Grupo Nordeste
GRANT 'nordeste' TO 'h756960'@'%';
GRANT 'nordeste' TO 'r8133g7'@'%';

-- Grupo Centro-Oeste
GRANT 'centro_oeste' TO 'r837aa0'@'%';
GRANT 'centro_oeste' TO 'h714419'@'%';

-- Grupo Sudeste
GRANT 'sudeste' TO 'r854124'@'%';
GRANT 'sudeste' TO 'n0296a6'@'%';

-- Grupo Sul
GRANT 'sul' TO 'h788986'@'%';
GRANT 'sul' TO 'h77gii5'@'%';
GRANT 'sul' TO 'f3648i0'@'%';

-- (Opcional) Definir cada role como padrão para o usuário
SET DEFAULT ROLE ALL TO
    'f362bf0'@'%',
    'r536fa6'@'%',
    'h756960'@'%',
    'r8133g7'@'%',
    'r837aa0'@'%',
    'h714419'@'%',
    'r854124'@'%',
    'n0296a6'@'%',
    'h788986'@'%',
    'h77gii5'@'%',
    'f3648i0'@'%';
```

### Concedendo privilégios aos grupos:

``` sql
-- ============================================
-- NORTE lê os demais grupos (Nordeste, Centro-Oeste, Sudeste, Sul)
-- ============================================
GRANT SELECT ON `21-maranhao`.*            TO 'norte';
GRANT SELECT ON `22-piaui`.*               TO 'norte';
GRANT SELECT ON `23-ceara`.*               TO 'norte';
GRANT SELECT ON `24-rio_grande_do_norte`.* TO 'norte';
GRANT SELECT ON `25-paraiba`.*             TO 'norte';
GRANT SELECT ON `26-pernambuco`.*          TO 'norte';
GRANT SELECT ON `27-alagoas`.*             TO 'norte';
GRANT SELECT ON `28-sergipe`.*             TO 'norte';
GRANT SELECT ON `29-bahia`.*               TO 'norte';
GRANT SELECT ON `50-mato_grosso_do_sul`.*  TO 'norte';
GRANT SELECT ON `51-mato_grosso`.*        TO 'norte';
GRANT SELECT ON `52-goias`.*              TO 'norte';
GRANT SELECT ON `53-distrito_federal`.*   TO 'norte';
GRANT SELECT ON `31-minas_gerais`.*       TO 'norte';
GRANT SELECT ON `32-espiritosanto`.*      TO 'norte';
GRANT SELECT ON `33-rio_de_janeiro`.*     TO 'norte';
GRANT SELECT ON `35-sao_paulo`.*          TO 'norte';
GRANT SELECT ON `41-parana`.*             TO 'norte';
GRANT SELECT ON `42-santa_catarina`.*     TO 'norte';
GRANT SELECT ON `43-rio_grande_do_sul`.*  TO 'norte';

-- ============================================
-- NORDESTE lê os demais grupos (Norte, Centro-Oeste, Sudeste, Sul)
-- ============================================
GRANT SELECT ON `11-rondonia`.*           TO 'nordeste';
GRANT SELECT ON `12-acre`.*               TO 'nordeste';
GRANT SELECT ON `13-amazonas`.*           TO 'nordeste';
GRANT SELECT ON `14-roraima`.*            TO 'nordeste';
GRANT SELECT ON `15-para`.*               TO 'nordeste';
GRANT SELECT ON `16-amapa`.*              TO 'nordeste';
GRANT SELECT ON `17-tocantins`.*          TO 'nordeste';
GRANT SELECT ON `50-mato_grosso_do_sul`.* TO 'nordeste';
GRANT SELECT ON `51-mato_grosso`.*       TO 'nordeste';
GRANT SELECT ON `52-goias`.*             TO 'nordeste';
GRANT SELECT ON `53-distrito_federal`.*  TO 'nordeste';
GRANT SELECT ON `31-minas_gerais`.*      TO 'nordeste';
GRANT SELECT ON `32-espiritosanto`.*     TO 'nordeste';
GRANT SELECT ON `33-rio_de_janeiro`.*    TO 'nordeste';
GRANT SELECT ON `35-sao_paulo`.*         TO 'nordeste';
GRANT SELECT ON `41-parana`.*            TO 'nordeste';
GRANT SELECT ON `42-santa_catarina`.*    TO 'nordeste';
GRANT SELECT ON `43-rio_grande_do_sul`.* TO 'nordeste';

-- ============================================
-- CENTRO-OESTE lê os demais grupos (Norte, Nordeste, Sudeste, Sul)
-- ============================================
GRANT SELECT ON `11-rondonia`.*           TO 'centro_oeste';
GRANT SELECT ON `12-acre`.*               TO 'centro_oeste';
GRANT SELECT ON `13-amazonas`.*           TO 'centro_oeste';
GRANT SELECT ON `14-roraima`.*            TO 'centro_oeste';
GRANT SELECT ON `15-para`.*               TO 'centro_oeste';
GRANT SELECT ON `16-amapa`.*              TO 'centro_oeste';
GRANT SELECT ON `17-tocantins`.*          TO 'centro_oeste';
GRANT SELECT ON `21-maranhao`.*           TO 'centro_oeste';
GRANT SELECT ON `22-piaui`.*              TO 'centro_oeste';
GRANT SELECT ON `23-ceara`.*              TO 'centro_oeste';
GRANT SELECT ON `24-rio_grande_do_norte`.* TO 'centro_oeste';
GRANT SELECT ON `25-paraiba`.*            TO 'centro_oeste';
GRANT SELECT ON `26-pernambuco`.*         TO 'centro_oeste';
GRANT SELECT ON `27-alagoas`.*            TO 'centro_oeste';
GRANT SELECT ON `28-sergipe`.*            TO 'centro_oeste';
GRANT SELECT ON `29-bahia`.*              TO 'centro_oeste';
GRANT SELECT ON `31-minas_gerais`.*       TO 'centro_oeste';
GRANT SELECT ON `32-espiritosanto`.*      TO 'centro_oeste';
GRANT SELECT ON `33-rio_de_janeiro`.*     TO 'centro_oeste';
GRANT SELECT ON `35-sao_paulo`.*          TO 'centro_oeste';
GRANT SELECT ON `41-parana`.*             TO 'centro_oeste';
GRANT SELECT ON `42-santa_catarina`.*     TO 'centro_oeste';
GRANT SELECT ON `43-rio_grande_do_sul`.*  TO 'centro_oeste';

-- ============================================
-- SUDESTE lê os demais grupos (Norte, Nordeste, Centro-Oeste, Sul)
-- ============================================
GRANT SELECT ON `11-rondonia`.*           TO 'sudeste';
GRANT SELECT ON `12-acre`.*               TO 'sudeste';
GRANT SELECT ON `13-amazonas`.*           TO 'sudeste';
GRANT SELECT ON `14-roraima`.*            TO 'sudeste';
GRANT SELECT ON `15-para`.*               TO 'sudeste';
GRANT SELECT ON `16-amapa`.*              TO 'sudeste';
GRANT SELECT ON `17-tocantins`.*          TO 'sudeste';
GRANT SELECT ON `21-maranhao`.*           TO 'sudeste';
GRANT SELECT ON `22-piaui`.*              TO 'sudeste';
GRANT SELECT ON `23-ceara`.*              TO 'sudeste';
GRANT SELECT ON `24-rio_grande_do_norte`.* TO 'sudeste';
GRANT SELECT ON `25-paraiba`.*            TO 'sudeste';
GRANT SELECT ON `26-pernambuco`.*         TO 'sudeste';
GRANT SELECT ON `27-alagoas`.*            TO 'sudeste';
GRANT SELECT ON `28-sergipe`.*            TO 'sudeste';
GRANT SELECT ON `29-bahia`.*              TO 'sudeste';
GRANT SELECT ON `50-mato_grosso_do_sul`.* TO 'sudeste';
GRANT SELECT ON `51-mato_grosso`.*       TO 'sudeste';
GRANT SELECT ON `52-goias`.*             TO 'sudeste';
GRANT SELECT ON `53-distrito_federal`.*  TO 'sudeste';
GRANT SELECT ON `41-parana`.*            TO 'sudeste';
GRANT SELECT ON `42-santa_catarina`.*    TO 'sudeste';
GRANT SELECT ON `43-rio_grande_do_sul`.* TO 'sudeste';

-- ============================================
-- SUL lê os demais grupos (Norte, Nordeste, Centro-Oeste, Sudeste)
-- ============================================
GRANT SELECT ON `11-rondonia`.*           TO 'sul';
GRANT SELECT ON `12-acre`.*               TO 'sul';
GRANT SELECT ON `13-amazonas`.*           TO 'sul';
GRANT SELECT ON `14-roraima`.*            TO 'sul';
GRANT SELECT ON `15-para`.*               TO 'sul';
GRANT SELECT ON `16-amapa`.*              TO 'sul';
GRANT SELECT ON `17-tocantins`.*          TO 'sul';
GRANT SELECT ON `21-maranhao`.*           TO 'sul';
GRANT SELECT ON `22-piaui`.*              TO 'sul';
GRANT SELECT ON `23-ceara`.*              TO 'sul';
GRANT SELECT ON `24-rio_grande_do_norte`.* TO 'sul';
GRANT SELECT ON `25-paraiba`.*            TO 'sul';
GRANT SELECT ON `26-pernambuco`.*         TO 'sul';
GRANT SELECT ON `27-alagoas`.*            TO 'sul';
GRANT SELECT ON `28-sergipe`.*            TO 'sul';
GRANT SELECT ON `29-bahia`.*              TO 'sul';
GRANT SELECT ON `50-mato_grosso_do_sul`.* TO 'sul';
GRANT SELECT ON `51-mato_grosso`.*       TO 'sul';
GRANT SELECT ON `52-goias`.*             TO 'sul';
GRANT SELECT ON `53-distrito_federal`.*  TO 'sul';
GRANT SELECT ON `31-minas_gerais`.*      TO 'sul';
GRANT SELECT ON `32-espiritosanto`.*     TO 'sul';
GRANT SELECT ON `33-rio_de_janeiro`.*    TO 'sul';
GRANT SELECT ON `35-sao_paulo`.*         TO 'sul';
```

### Exemplo no MySQL

Exemplo 01

Considere o cenário: um administrador de banco de dados irá criar uma tabela chamada **clientes** com cpf, nome e data_nascimento. Essa tabela deverá ficar no esquema **compras** e será acessada com **todos os privilégios** pelo usuário **aluno**. Considere que nosso SGBD é o MySQL 9. faça passo-a-passo os códigos SQL para que o ambiente descrito seja gerado.

#### Passo 1 - Criar o esquema de Banco de Dados "compras"

``` sql
CREATE DATABASE IF NOT EXISTS compras
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_0900_ai_ci;
```

#### Passo 2 - Criar o usuário "aluno"

``` sql
-- Apenas local:
CREATE USER IF NOT EXISTS 'aluno'@'localhost' IDENTIFIED BY 'TroqueEstaSenha!2025';

-- (Opcional) Acesso pela rede/WAN:
CREATE USER IF NOT EXISTS 'aluno'@'%' IDENTIFIED BY 'TroqueEstaSenha!2025';
```

#### Passo 2 - Conceder ao usuário "aluno" privilégios sobre todas os objetos (tabelas, views, gatilhos, índices) do esquema "compras"

``` sql
-- Para acesso local:
GRANT ALL PRIVILEGES ON compras.* TO 'aluno'@'localhost';

-- (Opcional) Para acesso via rede:
GRANT ALL PRIVILEGES ON compras.* TO 'aluno'@'%';

-- Tornar os privilégios efetivos (costume; no MySQL moderno aplica na hora):
FLUSH PRIVILEGES;
```

#### Passo 3 - Criar a tabela "clientes" dentro do esquema "compras"

``` sql
USE compras;

CREATE TABLE IF NOT EXISTS clientes (
  cpf            CHAR(11)     NOT NULL,
  nome           VARCHAR(120) NOT NULL,
  data_nascimento DATE        NOT NULL,
  CONSTRAINT pk_clientes PRIMARY KEY (cpf)
) ENGINE=InnoDB;
```

### Exemplo no PostGreSQL

Exemplo 03

Considere o cenário: um administrador de banco de dados irá criar uma tabela chamada **clientes** com cpf, nome e data_nascimento. Essa tabela deverá ficar no esquema **compras** e será acessada com **todos os privilégios** pelo usuário **aluno**. Considere que nosso SGBD é o Postgresql 15. faça passo-a-passo os códigos SQL para que o ambiente descrito seja gerado.

#### Passo 0 - Crie um Banco de Dados "sistema_compras"

``` sql
CREATE DATABASE sistema_compras
    WITH OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'pt_BR.UTF-8'
    LC_CTYPE = 'pt_BR.UTF-8'
    TEMPLATE = template0;
```

#### Passo 1 - Criar o esquema de Banco de Dados "compras"

``` sql
CREATE SCHEMA IF NOT EXISTS compras AUTHORIZATION postgres;
```

#### Passo 2 - Criar o usuário "aluno"

``` sql
CREATE ROLE aluno WITH
    LOGIN
    PASSWORD 'TroqueEstaSenha!2025'
    NOSUPERUSER
    NOCREATEDB
    NOCREATEROLE
    INHERIT;
```

#### Passo 3 - Conceder ao usuário "aluno" privilégios sobre todas os objetos (tabelas, views, gatilhos, índices) do esquema "compras"

``` sql
GRANT USAGE ON SCHEMA compras TO aluno;
GRANT CREATE ON SCHEMA compras TO aluno;
```

#### Passo 4 - Criar a tabela "clientes" dentro do esquema "compras"

``` sql
CREATE TABLE compras.clientes (
    cpf            CHAR(11)     PRIMARY KEY,
    nome           VARCHAR(120) NOT NULL,
    data_nascimento DATE        NOT NULL
);
```

#### Passo 5 - Conceder privilégios da tabela "clientes" do esquema "compras" para o usuário "aluno"

``` sql
GRANT ALL PRIVILEGES ON TABLE compras.clientes TO aluno;
```

## Feito



<!--chapter:end:05-2026-03-17_Administracao_Gerenciamento-aula-01.Rmd-->

# Administração e Gerenciamento de Bancos de Dados
#### 25/08/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}



<!--chapter:end:05-2026-03-17_Administracao_Gerenciamento-exercicio-01.Rmd-->

# Banco de Dados: Uma Aplicação CRUD

#### 24/03/2026 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}


## Feito



<!--chapter:end:06-2026-03-24_Administracao_Gerenciamento-aula-02.Rmd-->

## Exercícios

#### 01/09/2025 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}



<!--chapter:end:06-2026-03-24_Administracao_Gerenciamento-exercicio-02.Rmd-->

# Banco de Dados: MySQL (MariaDB)
#### 08/09/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}




<!--chapter:end:07-2026-2026-04-07_MySQL-aula.Rmd-->

# Banco de Dados: MySQL (MariaDB)
#### 08/09/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}



<!--chapter:end:07-2026-2026-04-07_MySQL-exercicio.Rmd-->

# Banco de Dados: Postgres
#### 14/04/2026 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}

# Prática SQL - PostgreSQL


## Usuários dos alunos

```
DS3P40


anderson_raulino_da_silva_f3620j8
anderson_xavier_de_lima_h74heb9
barbara_costa_nascimento_h603064
bruna_medeiros_de_aguiar_r815544
camily_de_sousa_oliveira_rocha_r8620h4
carlos_eduardo_silva_santana_f362ef1
caua_henrique_r_dos_santos_r434fi4
cauan_nunes_lopes_h6771g9
cleyton_alves_da_costa_g77aia8
danilo_salgado_peralta_ribeiro_r868gi1
david_gabriel_silva_de_jesus_f361dg6
douglas_vinicius_m_dos_santos_h6094i1
eder_rodrigues_de_almeida_r8459c7
fredson_silva_dos_santos_r427fb0
gabriel_goncalves_zago_h75gha1
gabriel_roque_dos_santos_r6607g5
guilherme_sousa_dos_santos_h520495
hector_fabro_pellegrino_r660ij4
igor_zabay_dos_santos_silva_h75bej1
isabelle_georgia_m_de_souza_r8378i6
joao_pedro_silva_carvalho_n001ae7
joao_vitor_freitas_de_oliveira_h755hh9
karen_de_sousa_faria_r8522d0
leonardo_araujo_freires_r659ei9
lincoln_g_s_a_barcellos_h7501d3
lorrany_silva_amorim_g71cji0
lucas_souza_santana_r5837h9
maria_eduarda_rodrigues_romão_r512ed7
matheus_briganti_de_oliveira_h74fgi8
maysa_pont_lopes_t160gf8
mikael_macedo_da_silva_h671ce9
nicolas_teixeira_de_aguiar_r849244
raquel_barbosa_de_souza_h70gib0
samuel_goncalves_silva_g9960j0
thaisla_luiza_silva_oliveira_r194655



DS3Q40



breno_brito_almeida_h768594
bruno_alves_de_souza_r8662a7
eduardo_de_sousa_pereira_h759ch8
guilherme_veloso_dos_santos_r861dh7
henrique_alexandre_damaceno_h75jac6
henrique_oliveira_gomes_r8607d0
isaac_lima_martins_r860922
luisa_dos_santos_fialho_r8708b6
mariane_carneiro_santos_r852ig6
matheus_da_silva_brito_r839da4
matheus_ferreira_pinheiro_r807053
michel_farias_da_silva_r6607c2
miguel_dos_santos_m_siroma_r540ea6
nicolas_zemella_de_matos_r582639
pedro_eduardo_paiva_meireles_r8699h4
ramon_brian_g_dos_santos_r852369
raphael_caique_da_s_negreiros_r850765
richard_rodrigues_medeiros_h755565
taynara_nogueira_dos_santos_r8439j1
thamyres_bandeira_santos_h6882f0
thiago_ferreira_dias_r218bc1
vitor_alexandre_de_j_amorim_h66eih4
vitor_luiz_luta_fernandes_r465993
vitoria_de_oliveira_vitor_r503ie5
yeda_gomes_dos_santos_custodio_r872696



DS3R40



antonio_fabio_ribeiro_sampaio_h57hed2
bruna_silva_dos_santos_h662893
gabriel_pimenta_de_jesus_h638879
gabriel_rezende_de_barros_h64cjj4
guilherme_augusto_g_de_melo_h624hj8
gustavo_rodrigues_de_barros_r693627
hendrew_dos_santos_braz_h76fbe0
henrique_bastos_laet_r671ig1
jerfferson_de_souza_nascimento_h471273
joao_victor_rodrigues_silva_r832384
luana_gonçalves_blasio_r6331j9
lucas_gabriel_monteiro_silva_r865118
luis_fernando_andrade_santos_h712742
luiza_nascimento_da_conceicao_h660467
manuel_douglas_silva_alves_h675ae0
matheus_cavalcante_de_almeida_r8506e5
matheus_renato_b_estevo_r864cb0
matheus_santos_ribeiro_g73ibg5
pedro_henrique_de_p_medeiros_r8514d9
pedro_henrique_f_de_souza_r826511
pedro_lima_de_almeida_souza_r802698
ramon_santos_silva_h751616
rhauan_silva_araujo_r830110



DS2P40


bruno_silva_de_souza_f3661b5
caio_alves_dos_santos_r933eb6
david_pereira_mendes_h78iif9
diego_duarte_de_andrade_h78iib6
ericklis_v_s_evangelista_h948746
gabriel_nonato_emerenciano_h783216
gabriel_rocha_santos_t274427
giovanni_lucas_florência_viana_r9580i0
iran_alves_dos_santos_h7635d7
jessica_borges_oliveira_r9520a6
joao_gabriel_de_oliveira_filie_r958825
joao_pedro_de_oliveira_t232341
joao_pedro_salem_marques_silva_h7891i8
jordan_silverio_de_sousa_t277973
jose_oziel_silva_do_nascimento_h77cbf4
kaue_ferreira_da_silva_h779286
luan_de_jesus_silva_r922dc5
luan_oliveira_russo_t307fd5
lucas_neubauer_lappas_linhares_h789ga6
paulo_felix_da_silva_araujo_h779669
pedro_henrique_m_da_silva_r952da5
rayane_dos_santos_falcao_h790ac7
thaina_rodrigues_paiva_f363ic2
thiago_santos_do_carmo_h75fff1
victhor_hugo_s_a_de_almeida_f3650i9
victor_flohr_fagundes_r941je0
```

## Diagrama da tabela com a qual vamos trabalhar


![](images/exemplo08-01-01.svg)<!-- -->





<!--chapter:end:08-2026-2026-04-14_Postgres-aula.Rmd-->

# Banco de Dados: Postgres
#### 22/09/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}




<!--chapter:end:08-2026-2026-04-14_Postgres-exercicio.Rmd-->

# Banco de Dados: Uma Aplicação CRUD

#### 21/04/2026 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}

## O que é uma Aplicação CRUD?

Hoje vamos desenvolver um cadastro web simples e entender o que é o acronimo C.R.U.D.

## Conceito de CRUD

**CRUD** é um acrônimo para quatro operações fundamentais que um sistema realiza sobre dados em um banco de dados:

![](images/2025-09-01/01-CRUD.jpg)

Essas quatro operações compõem a base da maioria das **aplicações web** que manipulam dados persistidos em um **SGBD** (Sistema Gerenciador de Banco de Dados).

------------------------------------------------------------------------

## O padrão de Design de Sistemas MVC (Model View Controller)

Uma aplicação Cliente-Servidor (modelo 2 camadas) geralmente segue o **padrão MVC** — **Model, View, Controller**:

![](images/2025-09-01/03-MVC.jpg)

## Construindo uma aplicação CRUD para interfacear com a tabela "Pessoa"

Considere o Diagrama Entidade-Relacionamento abaixo:

![](images/aula-05-Exemplo-01-continuação.svg)<!-- -->

Vamos Converte-lo para o Modelo Físico-Relacional em linguagem SQL:

### Representação gráfica no modelo Físico-Relacional

Vamos agora representa-lo em linguagem SQL:

![](images/2025-09-01/02-TabelaPessoas.jpg)

## Criação de uma aplicação CRUD

Vamos criar um **microsas** (micro Software As A Service) , ou seja, um site para inserir informações dentro da tabela acima.

![](images/2025-09-01/04-Aplicacao.jpg)

| Informações de Projeto | Tecnologias utilizadas no projeto CRUD |
|----|----|
| Servidor de banco de dados SGBD | MySQL 8 |
| Usuário de Banco de Dados | **pessoas_user** |
| De onde pode ser acessado | Apenas Máquina Local (localhost) |
| Esquema de Banco de Dados | **pessoasdb** |
| Servidor de Aplicação | Python 3 |
| Cliente da Aplicação | HTML + Javascript |
| Tecnologia de API | RestuFul |
| **Biblioteca de Javascript** para criar API **RestFul** | Método **Fetch** (Biblioteca Padrão do JavaScript para API RestFul) |
| Formato de Dados entre Servidor de Aplicação e Cliente de Aplicação | **JSON** |

: Criando um Esquema de Banco de Dados - CRUD tabela Pessoas

#### Criação de um usuário para Interagir com o Esquema de Banco de Dados

![](images/2025-09-01/05-Usuario.jpg)

``` sql

-- CRIAR USUÁRIO LOCAL E CONCEDER PERMISSÕES
-- Troque 'MinhaSenhaForte' por uma senha segura


CREATE USER IF NOT EXISTS 'pessoas_user'@'localhost' IDENTIFIED BY 'MinhaSenhaForte';

GRANT ALL PRIVILEGES ON pessoasdb.* TO 'pessoas_user'@'localhost';

FLUSH PRIVILEGES;
```

#### Criação do Esquema de Banco de Dados no SGBD MySQL

Agora vamos criar um esquema de Banco de Dados para abrigar nossa futura tabela:

![](images/2025-09-01/06-Esquema.jpg)

``` sql
-- 1) CRIAR BANCO (ajuste o nome se quiser)

CREATE DATABASE IF NOT EXISTS pessoasdb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

USE pessoasdb;
```

#### Criação da Tabela "pessoas"

![](images/2025-09-01/07-Tabela_Pessoas.jpg)

``` sql

-- 3) TABELA 'pessoas' COMPATÍVEL COM O MODELO SQLAlchemy
--    - cpf: chave primária (String(14))
--    - nome, endereco, foto: TEXT
--    - data_nascimento: DATE

CREATE TABLE IF NOT EXISTS pessoas 
(
  cpf             VARCHAR(14)  NOT NULL,
  nome            TEXT         NOT NULL,
  endereco        TEXT         NOT NULL,
  data_nascimento DATE         NOT NULL,
  foto            TEXT         NULL,
  PRIMARY KEY (cpf)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 4) (OPCIONAL) ÍNDICES PARA BUSCA
-- Seu endpoint usa LIKE/ILIKE em nome e cpf; cpf já é PK.
-- Para acelerar buscas por nome com LIKE, crie um índice por prefixo.
-- OBS: índices em TEXT precisam de comprimento; 128 costuma ser um bom compromisso.

CREATE INDEX idx_pessoas_nome_prefix ON pessoas (nome(128));
```

#### Uma aplicação Cliente Servidor no formato MVC (Model View Controller)

![](images/Aplicacao-MVC-CRUD-Pessoas-01.svg)<!-- -->

#### Criação do Servidor de Aplicação em Linguagem Python

Vejamos a representação gráfica de nosso servidor utilizando o diagrama de classes da linguagem UML

![](images/Servidor-CRUD-Pessoas-01.svg)<!-- -->

Para utilizar o MySQL como servidor, devemos instalar os drivers de MySQL para a biblioteca SQLAlchemy do Python através da ferramenta de linha de comando PIP do python

``` cmd
pip install flask flask-cors sqlalchemy "pymysql>=1.1"
# (ou use mysqlclient: pip install mysqlclient e troque o driver para mysql+mysqlclient)
```

Agora vamos escrever o script python que criará o servidor de aplicação para interfacear nosso Cliente no Navegador e nossa tabela pessoas dentro do SGBD MySQL:

``` python
from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, Column, String, Date, Text
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import date

# ------------------------------
# Flask + CORS
# ------------------------------
app = Flask(__name__)
CORS(app)  # em produção, restrinja as origens

# ------------------------------
# Banco de Dados MySQL (localhost)
# ------------------------------
# Parâmetros do projeto:
#   SGBD: MySQL 8
#   Host: localhost
#   Usuário: pessoas_user
#   DB/Schema: pessoasdb
#   Tabela: pessoas
DATABASE_URL = "mysql+pymysql://pessoas_user:MinhaSenhaForte@localhost:3306/pessoasdb"

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,        # evita "MySQL server has gone away"
    future=True
)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)
Base = declarative_base()

# ------------------------------
# Modelo Pessoa
# ------------------------------
class Pessoa(Base):
    __tablename__ = "pessoas"
    cpf = Column(String(14), primary_key=True)
    nome = Column(Text, nullable=False)
    endereco = Column(Text, nullable=False)
    data_nascimento = Column(Date, nullable=False)
    foto = Column(Text)  # Base64 ou URL

# Cria a tabela se não existir (deve existir conforme seu script SQL)
Base.metadata.create_all(engine)

# ------------------------------
# Helpers
# ------------------------------
def to_dict(p: Pessoa):
    return {
        "cpf": p.cpf,
        "nome": p.nome,
        "endereco": p.endereco,
        "data_nascimento": p.data_nascimento.isoformat(),
        "foto": p.foto
    }

def parse_date_iso(value):
    if isinstance(value, date):
        return value
    return date.fromisoformat(value)  # espera "YYYY-MM-DD"

# ------------------------------
# CRUD
# ------------------------------

# Listar todas as pessoas ou pesquisar por termo (?q=)
@app.route('/pessoas', methods=['GET'])
def listar():
    termo = (request.args.get('q') or '').strip()
    with SessionLocal() as session:
        query = session.query(Pessoa)
        if termo:
            like = f"%{termo}%"
            # MySQL é case-insensitive com collation *_ci; ilike é traduzido para LIKE
            query = query.filter((Pessoa.nome.ilike(like)) | (Pessoa.cpf.ilike(like)))
        pessoas = query.order_by(Pessoa.nome.asc()).all()
        return jsonify([to_dict(p) for p in pessoas])

# Inserir nova pessoa
@app.route('/pessoas', methods=['POST'])
def inserir():
    dados = request.get_json(force=True)
    required = ['cpf', 'nome', 'endereco', 'data_nascimento']
    faltantes = [k for k in required if not dados.get(k)]
    if faltantes:
        return jsonify({"error": "Campos obrigatórios faltando", "fields": faltantes}), 422

    try:
        dn = parse_date_iso(dados['data_nascimento'])
    except Exception:
        return jsonify({"error": "data_nascimento inválida. Use YYYY-MM-DD"}), 422

    with SessionLocal() as session:
        if session.query(Pessoa).filter_by(cpf=dados['cpf']).first():
            return jsonify({"error": "CPF já cadastrado"}), 409
        pessoa = Pessoa(
            cpf=dados['cpf'],
            nome=dados['nome'],
            endereco=dados['endereco'],
            data_nascimento=dn,
            foto=dados.get('foto')
        )
        session.add(pessoa)
        session.commit()
        session.refresh(pessoa)
        return jsonify(to_dict(pessoa)), 201

# Alterar pessoa (PUT)
@app.route('/pessoas/<cpf>', methods=['PUT'])
def alterar(cpf):
    dados = request.get_json(force=True)
    with SessionLocal() as session:
        pessoa = session.query(Pessoa).filter_by(cpf=cpf).first()
        if not pessoa:
            return jsonify({"error": "CPF não encontrado"}), 404

        if 'nome' in dados and dados['nome'] is not None:
            pessoa.nome = dados['nome']
        if 'endereco' in dados and dados['endereco'] is not None:
            pessoa.endereco = dados['endereco']
        if 'data_nascimento' in dados and dados['data_nascimento'] is not None:
            try:
                pessoa.data_nascimento = parse_date_iso(dados['data_nascimento'])
            except Exception:
                return jsonify({"error": "data_nascimento inválida. Use YYYY-MM-DD"}), 422
        if 'foto' in dados:
            pessoa.foto = dados['foto']

        session.commit()
        session.refresh(pessoa)
        return jsonify(to_dict(pessoa)), 200

# Remover pessoa
@app.route('/pessoas/<cpf>', methods=['DELETE'])
def remover(cpf):
    with SessionLocal() as session:
        pessoa = session.query(Pessoa).filter_by(cpf=cpf).first()
        if not pessoa:
            return jsonify({"error": "CPF não encontrado"}), 404
        session.delete(pessoa)
        session.commit()
        return '', 204

# Buscar pessoa por CPF
@app.route('/pessoas/<cpf>', methods=['GET'])
def buscar(cpf):
    with SessionLocal() as session:
        pessoa = session.query(Pessoa).filter_by(cpf=cpf).first()
        if not pessoa:
            return jsonify({"error": "CPF não encontrado"}), 404
        return jsonify(to_dict(pessoa))

# ------------------------------
# Inicia o servidor
# ------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

#### Criação do Cliente de Aplicação em HTML (Parte Gráfica) e Javascript (Programação Executável)

Vamos verificar como é o Diagrama de Classes do Cliente que vai conversar com o servidor que vimos anteriormente:

![](images/2025-09-01/09-cliente.jpg)

Agora vamos verificar o código-fonte.

Salve esse código em um arquivo chamado **cliente.html**, para poder abrir-lo no navegador, juntamente com o servidor rodando:

``` html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Cadastro de Pessoas - Flask/MySQL</title>
<style>
  body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; max-width: 980px; margin: 24px auto; }
  label { display: block; margin-top: 10px; }
  button { margin-top: 10px; margin-right: 6px; padding: 8px 12px; }
  table { border-collapse: collapse; width:100%; margin-top:20px; }
  th, td { border:1px solid #ddd; padding:8px; text-align:left; }
  img.thumb { width:60px; height:60px; object-fit:cover; border-radius:4px; }
  .row { display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
</style>
</head>
<body>
<h1>Cadastro de Pessoas (Flask/MySQL)</h1>

<form id="formPessoa">
  <label>CPF (chave primária): <input id="cpf" required></label>
  <label>Nome: <input id="nome" required></label>
  <label>Endereço: <input id="endereco" required></label>
  <label>Data Nasc.: <input type="date" id="data_nascimento" required></label>
  <label>Foto: <input type="file" id="foto" accept="image/*"></label>

  <div class="row">
    <button type="button" id="btnInserir" onclick="inserir()">Inserir</button>
    <button type="button" id="btnAlterar" onclick="alterar()">Alterar</button>
    <button type="button" id="btnRemover" onclick="remover()">Remover</button>
  </div>
</form>

<h2>Pesquisar</h2>
<div class="row">
  <input id="pesquisa" placeholder="Digite nome ou CPF" style="flex:1">
  <button type="button" id="btnPesquisar" onclick="pesquisar()">Pesquisar</button>
  <button type="button" onclick="listar()">Listar tudo</button>
</div>

<table>
  <thead>
    <tr>
      <th>CPF</th><th>Foto</th><th>Nome</th>
      <th>Endereço</th><th>Nascimento</th>
    </tr>
  </thead>
  <tbody id="tabela"></tbody>
</table>

<script>
const API = 'http://localhost:5000/pessoas';

/* ---------- Helpers ---------- */
function setBusy(busy) {
  for (const id of ['btnInserir','btnAlterar','btnRemover','btnPesquisar']) {
    const el = document.getElementById(id);
    if (el) el.disabled = busy;
  }
}

function validaCampos() {
  const campos = ['cpf','nome','endereco','data_nascimento'];
  for (const id of campos) {
    const valor = document.getElementById(id).value.trim();
    if (!valor) {
      alert(`O campo "${id}" não pode ficar em branco.`);
      return false;
    }
  }
  return true;
}

function getFotoBase64() {
  const file = document.getElementById('foto').files[0];
  if(!file) return Promise.resolve('');
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function coletaDados(base64Foto){
  return {
    cpf: document.getElementById('cpf').value.trim(),
    nome: document.getElementById('nome').value.trim(),
    endereco: document.getElementById('endereco').value.trim(),
    data_nascimento: document.getElementById('data_nascimento').value, // YYYY-MM-DD
    foto: base64Foto || ''
  };
}

async function readJsonSafe(res) {
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    try { return await res.json(); } catch { return null; }
  }
  return null;
}

/* ---------- CRUD ---------- */
async function inserir() {
  if(!validaCampos()) return;
  setBusy(true);
  try {
    const base64 = await getFotoBase64();
    const pessoa = coletaDados(base64);

    const res = await fetch(API, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pessoa)
    });
    const data = await readJsonSafe(res);
    if(res.ok) {
      alert('Inserido com sucesso!');
      listar();
      document.getElementById('formPessoa').reset();
    } else {
      alert('Erro: ' + (data?.error || res.statusText));
    }
  } catch (e) {
    alert('Falha ao inserir: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function alterar() {
  if(!validaCampos()) return;
  const cpf = document.getElementById('cpf').value.trim();
  setBusy(true);
  try {
    const base64 = await getFotoBase64();
    const novosDados = coletaDados();
    if (base64) novosDados.foto = base64;

    const res = await fetch(`${API}/${encodeURIComponent(cpf)}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(novosDados)
    });
    const data = await readJsonSafe(res);
    if(res.ok) {
      alert('Alterado com sucesso!');
      listar();
    } else {
      alert('Erro: ' + (data?.error || res.statusText));
    }
  } catch (e) {
    alert('Falha ao alterar: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function remover() {
  const cpf = document.getElementById('cpf').value.trim();
  if(!cpf) return alert('Informe o CPF para remover.');
  if(!confirm('Confirma a exclusão?')) return;

  setBusy(true);
  try {
    const res = await fetch(`${API}/${encodeURIComponent(cpf)}`, {method:'DELETE'});
    // 204 => sem corpo; não tente parsear JSON aqui
    if(res.status === 204) {
      alert('Removido com sucesso!');
      listar();
      return;
    }
    const data = await readJsonSafe(res);
    if(res.ok) {
      alert('Removido com sucesso!');
      listar();
    } else {
      alert('Erro: ' + (data?.error || res.statusText));
    }
  } catch (e) {
    alert('Falha ao remover: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function pesquisar() {
  const termo = document.getElementById('pesquisa').value.trim();
  setBusy(true);
  try {
    const url = termo ? `${API}?q=${encodeURIComponent(termo)}` : API;
    const res = await fetch(url);
    const data = await readJsonSafe(res);
    if(!res.ok) return alert('Falha na pesquisa: ' + (data?.error || res.statusText));
    preencheTabela(Array.isArray(data) ? data : (data?.items ?? []));
  } catch (e) {
    alert('Falha na pesquisa: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function listar() {
  setBusy(true);
  try {
    const res = await fetch(API);
    const data = await readJsonSafe(res);
    if(!res.ok) return alert('Falha ao listar: ' + (data?.error || res.statusText));
    preencheTabela(Array.isArray(data) ? data : (data?.items ?? []));
  } catch (e) {
    alert('Falha ao listar: ' + e.message);
  } finally {
    setBusy(false);
  }
}

/* ---------- UI ---------- */
function preencheTabela(lista){
  const tbody = document.getElementById('tabela');
  tbody.innerHTML = '';
  (lista || []).forEach(p=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.cpf}</td>
      <td>${p.foto ? `<img class="thumb" src="${p.foto}" alt="foto">` : ''}</td>
      <td>${p.nome}</td>
      <td>${p.endereco}</td>
      <td>${p.data_nascimento}</td>`;
    tr.onclick = () => {
      document.getElementById('cpf').value = p.cpf;
      document.getElementById('nome').value = p.nome;
      document.getElementById('endereco').value = p.endereco;
      document.getElementById('data_nascimento').value = p.data_nascimento;
    };
    tbody.appendChild(tr);
  });
}

listar();
</script>
</body>
</html>
```

### Resultado final:

#### Servidor de aplicação Python "Restful" rodando

![](images/2025-09-01/10-servidor_rodando.jpg)

#### Cliente HTML + Javascript ( página ESTÁTICA ) aberta no navegador

##### Passo 1 - Preencher dados no formulário do cliente

Vamos inserir dados de exemplo no "cliente WEB" abaixo

![](images/2025-09-01/11-Cliente_Vazio.jpg)

##### Passo 2 - Pressionar o Botão INSERIR

![](images/2025-09-01/11-Cliente_Vazio-02.jpg)

OBS: Na tela do servidor, é possível verificar as operações HTTP Equivalentes ao SQL que foram executadas entre o Servidor e o Cliente

![](images/2025-09-01/10-servidor_rodando-01.jpg)

##### Passo 3 - Verificar se o "DBGRID" do cliente "espelhando" a linha da tabela "pessoas" no esquema "pessoasdb" do SQBG MySQL

![](images/2025-09-01/11-Cliente_03-Preenchido.jpg)

##### Passo 4 - Verificar na tabela pessoas a linha que o cliente preencheu através da API da aplicação cliente/servidor

![](images/2025-09-01/12-Dados_no_SGBD.jpg)

## Feito



<!--chapter:end:09-2026-2026-04-21_CRUD-1-aula.Rmd-->

## Exercícios

#### 01/09/2025 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}

### Banco de Dados utilizado nos exemplos de aplicações abaixo

Crie o banco de dados abaixo em um servidor mysql 8 ou superior na sua máquina antes de testar os exemplos abaixo:

``` SQL
-- 1) CRIAR BANCO (ajuste o nome se quiser)
CREATE DATABASE IF NOT EXISTS pessoasdb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

USE pessoasdb;

-- 2) (OPCIONAL) CRIAR USUÁRIO LOCAL E CONCEDER PERMISSÕES
--    Troque 'MinhaSenhaForte' por uma senha segura
CREATE USER IF NOT EXISTS 'pessoas_user'@'localhost' IDENTIFIED BY 'MinhaSenhaForte';
GRANT ALL PRIVILEGES ON pessoasdb.* TO 'pessoas_user'@'localhost';
FLUSH PRIVILEGES;

-- 3) TABELA 'pessoas' COMPATÍVEL COM O MODELO SQLAlchemy
--    - cpf: chave primária (String(14))
--    - nome, endereco, foto: TEXT
--    - data_nascimento: DATE
CREATE TABLE IF NOT EXISTS pessoas (
  cpf             VARCHAR(14)  NOT NULL,
  nome            TEXT         NOT NULL,
  endereco        TEXT         NOT NULL,
  data_nascimento DATE         NOT NULL,
  foto            TEXT         NULL,
  PRIMARY KEY (cpf)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 4) (OPCIONAL) ÍNDICES PARA BUSCA
-- Seu endpoint usa LIKE/ILIKE em nome e cpf; cpf já é PK.
-- Para acelerar buscas por nome com LIKE, crie um índice por prefixo.
-- OBS: índices em TEXT precisam de comprimento; 128 costuma ser um bom compromisso.
CREATE INDEX idx_pessoas_nome_prefix ON pessoas (nome(128));
```

## Exemplo 01

servidor SUPABASE .... a fazer

## Exemplo 02 - SERVIDOR DE APLICAÇÃO PYTHON

![](images/clipboard-3666283714.png)

Neste exemplo, temos uma aplicação cliente feita html e javascript

A interface do Cliente é feita em HTML5

A conexão com o servidor é feita pelo javascript incorporado no HTML:

CRUD no cliente é feito peloa javascript utilizando metodologia Restful sobre protocolo HTTP 2.0

O servidor Restful é feito em linguagem PYTHON

OBS: NÃO TEMOS CONTROLE DE SESSÃO DE CLIENTE IMPLEMENTADO.

``` cmd
python -m pip install --user --upgrade flask flask-cors sqlalchemy psycopg2-binary
```

### Servidor python

``` python
from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, Column, String, Date, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# ------------------------------
# Configuração do Flask e CORS
# ------------------------------
app = Flask(__name__)
CORS(app)

# ------------------------------
# Configuração do banco PostgreSQL
# ------------------------------
DATABASE_URL = "postgresql://postgres:MinhaSuperSenha@db.pbbtfwmydxmxdibmtbqq.supabase.co:5432/postgres"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# ------------------------------
# Modelo Pessoa
# ------------------------------
class Pessoa(Base):
    __tablename__ = "pessoas"
    cpf = Column(String(14), primary_key=True)
    nome = Column(Text, nullable=False)
    endereco = Column(Text, nullable=False)
    data_nascimento = Column(Date, nullable=False)
    foto = Column(Text)  # Base64 ou URL

# Cria a tabela se não existir
Base.metadata.create_all(engine)

# ------------------------------
# CRUD
# ------------------------------

# Listar todas as pessoas ou pesquisar por termo
@app.route('/pessoas', methods=['GET'])
def listar():
    termo = request.args.get('q', '').lower()
    session = SessionLocal()
    if termo:
        pessoas = session.query(Pessoa).filter(
            (Pessoa.nome.ilike(f"%{termo}%")) | (Pessoa.cpf.ilike(f"%{termo}%"))
        ).all()
    else:
        pessoas = session.query(Pessoa).all()
    session.close()
    return jsonify([{
        "cpf": p.cpf,
        "nome": p.nome,
        "endereco": p.endereco,
        "data_nascimento": p.data_nascimento.isoformat(),
        "foto": p.foto
    } for p in pessoas])

# Inserir nova pessoa
@app.route('/pessoas', methods=['POST'])
def inserir():
    dados = request.get_json()
    session = SessionLocal()
    if session.query(Pessoa).filter_by(cpf=dados['cpf']).first():
        session.close()
        return jsonify({"error": "CPF já cadastrado"}), 400
    pessoa = Pessoa(
        cpf=dados['cpf'],
        nome=dados['nome'],
        endereco=dados['endereco'],
        data_nascimento=dados['data_nascimento'],
        foto=dados.get('foto')
    )
    session.add(pessoa)
    session.commit()
    session.close()
    return jsonify({"message": "Inserido com sucesso"}), 201

# Alterar pessoa
@app.route('/pessoas/<cpf>', methods=['PUT'])
def alterar(cpf):
    dados = request.get_json()
    session = SessionLocal()
    pessoa = session.query(Pessoa).filter_by(cpf=cpf).first()
    if not pessoa:
        session.close()
        return jsonify({"error": "CPF não encontrado"}), 404
    pessoa.nome = dados.get('nome', pessoa.nome)
    pessoa.endereco = dados.get('endereco', pessoa.endereco)
    pessoa.data_nascimento = dados.get('data_nascimento', pessoa.data_nascimento)
    pessoa.foto = dados.get('foto', pessoa.foto)
    session.commit()
    session.close()
    return jsonify({"message": "Alterado com sucesso"})

# Remover pessoa
@app.route('/pessoas/<cpf>', methods=['DELETE'])
def remover(cpf):
    session = SessionLocal()
    pessoa = session.query(Pessoa).filter_by(cpf=cpf).first()
    if not pessoa:
        session.close()
        return jsonify({"error": "CPF não encontrado"}), 404
    session.delete(pessoa)
    session.commit()
    session.close()
    return jsonify({"message": "Removido com sucesso"})

# Buscar pessoa por CPF
@app.route('/pessoas/<cpf>', methods=['GET'])
def buscar(cpf):
    session = SessionLocal()
    pessoa = session.query(Pessoa).filter_by(cpf=cpf).first()
    session.close()
    if not pessoa:
        return jsonify({"error": "CPF não encontrado"}), 404
    return jsonify({
        "cpf": pessoa.cpf,
        "nome": pessoa.nome,
        "endereco": pessoa.endereco,
        "data_nascimento": pessoa.data_nascimento.isoformat(),
        "foto": pessoa.foto
    })

# ------------------------------
# Inicia o servidor
# ------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

servidor estará rodando na porta 5000 e EXPÕE A API de operações na URI <http://localhost:5000/pessoas> sem senha

``` css
http://localhost:5000/pessoas
```

### Cliente HTML (conexão Restful)

crie o arquivo index.html e abra-o no navegador

``` html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Cadastro de Pessoas - Flask/MySQL</title>
<style>
  body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; max-width: 980px; margin: 24px auto; }
  label { display: block; margin-top: 10px; }
  button { margin-top: 10px; margin-right: 6px; padding: 8px 12px; }
  table { border-collapse: collapse; width:100%; margin-top:20px; }
  th, td { border:1px solid #ddd; padding:8px; text-align:left; }
  img.thumb { width:60px; height:60px; object-fit:cover; border-radius:4px; }
  .row { display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
</style>
</head>
<body>
<h1>Cadastro de Pessoas (Flask/MySQL)</h1>

<form id="formPessoa">
  <label>CPF (chave primária): <input id="cpf" required></label>
  <label>Nome: <input id="nome" required></label>
  <label>Endereço: <input id="endereco" required></label>
  <label>Data Nasc.: <input type="date" id="data_nascimento" required></label>
  <label>Foto: <input type="file" id="foto" accept="image/*"></label>

  <div class="row">
    <button type="button" id="btnInserir" onclick="inserir()">Inserir</button>
    <button type="button" id="btnAlterar" onclick="alterar()">Alterar</button>
    <button type="button" id="btnRemover" onclick="remover()">Remover</button>
  </div>
</form>

<h2>Pesquisar</h2>
<div class="row">
  <input id="pesquisa" placeholder="Digite nome ou CPF" style="flex:1">
  <button type="button" id="btnPesquisar" onclick="pesquisar()">Pesquisar</button>
  <button type="button" onclick="listar()">Listar tudo</button>
</div>

<table>
  <thead>
    <tr>
      <th>CPF</th><th>Foto</th><th>Nome</th>
      <th>Endereço</th><th>Nascimento</th>
    </tr>
  </thead>
  <tbody id="tabela"></tbody>
</table>

<script>
const API = 'http://localhost:5000/pessoas';

/* ---------- Helpers ---------- */
function setBusy(busy) {
  for (const id of ['btnInserir','btnAlterar','btnRemover','btnPesquisar']) {
    const el = document.getElementById(id);
    if (el) el.disabled = busy;
  }
}

function validaCampos() {
  const campos = ['cpf','nome','endereco','data_nascimento'];
  for (const id of campos) {
    const valor = document.getElementById(id).value.trim();
    if (!valor) {
      alert(`O campo "${id}" não pode ficar em branco.`);
      return false;
    }
  }
  return true;
}

function getFotoBase64() {
  const file = document.getElementById('foto').files[0];
  if(!file) return Promise.resolve('');
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function coletaDados(base64Foto){
  return {
    cpf: document.getElementById('cpf').value.trim(),
    nome: document.getElementById('nome').value.trim(),
    endereco: document.getElementById('endereco').value.trim(),
    data_nascimento: document.getElementById('data_nascimento').value, // YYYY-MM-DD
    foto: base64Foto || ''
  };
}

async function readJsonSafe(res) {
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    try { return await res.json(); } catch { return null; }
  }
  return null;
}

/* ---------- CRUD ---------- */
async function inserir() {
  if(!validaCampos()) return;
  setBusy(true);
  try {
    const base64 = await getFotoBase64();
    const pessoa = coletaDados(base64);

    const res = await fetch(API, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pessoa)
    });
    const data = await readJsonSafe(res);
    if(res.ok) {
      alert('Inserido com sucesso!');
      listar();
      document.getElementById('formPessoa').reset();
    } else {
      alert('Erro: ' + (data?.error || res.statusText));
    }
  } catch (e) {
    alert('Falha ao inserir: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function alterar() {
  if(!validaCampos()) return;
  const cpf = document.getElementById('cpf').value.trim();
  setBusy(true);
  try {
    const base64 = await getFotoBase64();
    const novosDados = coletaDados();
    if (base64) novosDados.foto = base64;

    const res = await fetch(`${API}/${encodeURIComponent(cpf)}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(novosDados)
    });
    const data = await readJsonSafe(res);
    if(res.ok) {
      alert('Alterado com sucesso!');
      listar();
    } else {
      alert('Erro: ' + (data?.error || res.statusText));
    }
  } catch (e) {
    alert('Falha ao alterar: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function remover() {
  const cpf = document.getElementById('cpf').value.trim();
  if(!cpf) return alert('Informe o CPF para remover.');
  if(!confirm('Confirma a exclusão?')) return;

  setBusy(true);
  try {
    const res = await fetch(`${API}/${encodeURIComponent(cpf)}`, {method:'DELETE'});
    // 204 => sem corpo; não tente parsear JSON aqui
    if(res.status === 204) {
      alert('Removido com sucesso!');
      listar();
      return;
    }
    const data = await readJsonSafe(res);
    if(res.ok) {
      alert('Removido com sucesso!');
      listar();
    } else {
      alert('Erro: ' + (data?.error || res.statusText));
    }
  } catch (e) {
    alert('Falha ao remover: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function pesquisar() {
  const termo = document.getElementById('pesquisa').value.trim();
  setBusy(true);
  try {
    const url = termo ? `${API}?q=${encodeURIComponent(termo)}` : API;
    const res = await fetch(url);
    const data = await readJsonSafe(res);
    if(!res.ok) return alert('Falha na pesquisa: ' + (data?.error || res.statusText));
    preencheTabela(Array.isArray(data) ? data : (data?.items ?? []));
  } catch (e) {
    alert('Falha na pesquisa: ' + e.message);
  } finally {
    setBusy(false);
  }
}

async function listar() {
  setBusy(true);
  try {
    const res = await fetch(API);
    const data = await readJsonSafe(res);
    if(!res.ok) return alert('Falha ao listar: ' + (data?.error || res.statusText));
    preencheTabela(Array.isArray(data) ? data : (data?.items ?? []));
  } catch (e) {
    alert('Falha ao listar: ' + e.message);
  } finally {
    setBusy(false);
  }
}

/* ---------- UI ---------- */
function preencheTabela(lista){
  const tbody = document.getElementById('tabela');
  tbody.innerHTML = '';
  (lista || []).forEach(p=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.cpf}</td>
      <td>${p.foto ? `<img class="thumb" src="${p.foto}" alt="foto">` : ''}</td>
      <td>${p.nome}</td>
      <td>${p.endereco}</td>
      <td>${p.data_nascimento}</td>`;
    tr.onclick = () => {
      document.getElementById('cpf').value = p.cpf;
      document.getElementById('nome').value = p.nome;
      document.getElementById('endereco').value = p.endereco;
      document.getElementById('data_nascimento').value = p.data_nascimento;
    };
    tbody.appendChild(tr);
  });
}

listar();
</script>
</body>
</html>
```

------------------------------------------------------------------------

## Exemplo 03 - SERVIDOR DE APLICAÇÃO PERL

![](images/clipboard-2372699820.png)

Neste exemplo, temos uma aplicação cliente feita html e javascript

A interface do Cliente é feita em HTML5

A conexão com o servidor é feita pelo javascript incorporado no HTML:

CRUD no cliente é feito peloa javascript utilizando metodologia Restful sobre protocolo HTTP 2.0

O servidor Restful é feito em linguagem PERL

OBS: NÃO TEMOS CONTROLE DE SESSÃO DE CLIENTE IMPLEMENTADO.

``` cmd
cpan Dancer2 DBI DBD::Pg JSON
```

### Servidor Perl

``` perl
#!/usr/bin/perl
use strict;
use warnings;
use Dancer2;
use DBI;
use JSON;

# -----------------------------
# Configurações do banco
# -----------------------------
my $dsn = "dbi:Pg:dbname=postgres;host=db.pbbtfwmydxmxdibmtbqq.supabase.co;port=5432";
my $db_user = "postgres";
my $db_pass = "MinhaSuperSenha";

my $dbh = DBI->connect($dsn, $db_user, $db_pass, { RaiseError => 1, AutoCommit => 1 });

# -----------------------------
# Helpers
# -----------------------------
sub json_response {
    content_type 'application/json';
    return encode_json($_[0]);
}

# -----------------------------
# Endpoints REST
# -----------------------------

# Listar todas ou pesquisar
get '/pessoas' => sub {
    my $q = query_parameters->get('q') || '';
    my $sql = "SELECT * FROM pessoas";
    my @params;
    if ($q ne '') {
        $sql .= " WHERE cpf ILIKE ? OR nome ILIKE ?";
        @params = ("%$q%", "%$q%");
    }
    my $sth = $dbh->prepare($sql);
    $sth->execute(@params);
    my @rows;
    while (my $row = $sth->fetchrow_hashref) {
        push @rows, $row;
    }
    return json_response(\@rows);
};

# Buscar por CPF
get '/pessoas/:cpf' => sub {
    my $cpf = route_parameters->get('cpf');
    my $sth = $dbh->prepare("SELECT * FROM pessoas WHERE cpf = ?");
    $sth->execute($cpf);
    my $row = $sth->fetchrow_hashref;
    return $row ? json_response($row) : status(404)->json_response({ error => "CPF não encontrado" });
};

# Inserir
post '/pessoas' => sub {
    my $data = from_json(request->body);
    my $cpf = $data->{cpf};
    # Verifica se existe
    my $check = $dbh->prepare("SELECT cpf FROM pessoas WHERE cpf = ?");
    $check->execute($cpf);
    if ($check->fetchrow_array) {
        status(400);
        return json_response({ error => "CPF já cadastrado" });
    }
    my $sth = $dbh->prepare("INSERT INTO pessoas (cpf, nome, endereco, data_nascimento, foto) VALUES (?, ?, ?, ?, ?)");
    $sth->execute($cpf, $data->{nome}, $data->{endereco}, $data->{data_nascimento}, $data->{foto});
    status(201);
    return json_response({ message => "Inserido com sucesso" });
};

# Alterar
put '/pessoas/:cpf' => sub {
    my $cpf = route_parameters->get('cpf');
    my $data = from_json(request->body);
    # Verifica se existe
    my $check = $dbh->prepare("SELECT cpf FROM pessoas WHERE cpf = ?");
    $check->execute($cpf);
    unless ($check->fetchrow_array) {
        status(404);
        return json_response({ error => "CPF não encontrado" });
    }
    my $sth = $dbh->prepare("UPDATE pessoas SET nome=?, endereco=?, data_nascimento=?, foto=? WHERE cpf=?");
    $sth->execute($data->{nome}, $data->{endereco}, $data->{data_nascimento}, $data->{foto}, $cpf);
    return json_response({ message => "Alterado com sucesso" });
};

# Remover
del '/pessoas/:cpf' => sub {
    my $cpf = route_parameters->get('cpf');
    my $sth = $dbh->prepare("DELETE FROM pessoas WHERE cpf=?");
    my $rows = $sth->execute($cpf);
    if ($rows) {
        return json_response({ message => "Removido com sucesso" });
    } else {
        status(404);
        return json_response({ error => "CPF não encontrado" });
    }
};

# -----------------------------
# Inicializa o servidor
# -----------------------------
set port => 5000;
set serializer => 'JSON';

start;
```

servidor estará rodando na porta 5000 e EXPÕE A API de operações na URI <http://localhost:5000/pessoas> sem senha

``` css
http://localhost:5000/pessoas
```

### Cliente HTML (conexão Restful)

crie o arquivo index.html e abra-o no navegador

``` html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Cadastro de Pessoas - Perl/PostgreSQL</title>
<style>
  body { font-family: sans-serif; max-width: 800px; margin: 20px auto; }
  label { display: block; margin-top: 10px; }
  button { margin-top: 10px; margin-right: 5px; }
  table { border-collapse: collapse; width:100%; margin-top:20px; }
  th, td { border:1px solid #ccc; padding:6px; text-align:left; }
  img.thumb { width:60px; height:60px; object-fit:cover; border-radius:4px; }
</style>
</head>
<body>
<h1>Cadastro de Pessoas (Perl/PostgreSQL)</h1>

<form id="formPessoa">
  <label>CPF (chave primária): <input id="cpf" required></label>
  <label>Nome: <input id="nome" required></label>
  <label>Endereço: <input id="endereco" required></label>
  <label>Data Nasc.: <input type="date" id="data_nascimento" required></label>
  <label>Foto: <input type="file" id="foto" accept="image/*"></label>

  <button type="button" onclick="inserir()">Inserir</button>
  <button type="button" onclick="alterar()">Alterar</button>
  <button type="button" onclick="remover()">Remover</button>
</form>

<h2>Pesquisar</h2>
<input id="pesquisa" placeholder="Digite nome ou CPF">
<button type="button" onclick="pesquisar()">Pesquisar</button>

<table>
  <thead>
    <tr>
      <th>CPF</th><th>Foto</th><th>Nome</th>
      <th>Endereço</th><th>Nascimento</th>
    </tr>
  </thead>
  <tbody id="tabela"></tbody>
</table>

<script>
const API = 'http://localhost:5000/pessoas';

/* ---------- Funções utilitárias ---------- */
function validaCampos() {
  const campos = ['cpf','nome','endereco','data_nascimento'];
  for (const id of campos) {
    const valor = document.getElementById(id).value.trim();
    if (!valor) {
      alert(`O campo "${id}" não pode ficar em branco.`);
      return false;
    }
  }
  return true;
}

function getFotoBase64() {
  const file = document.getElementById('foto').files[0];
  if(!file) return Promise.resolve('');
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function coletaDados(base64Foto){
  return {
    cpf: document.getElementById('cpf').value.trim(),
    nome: document.getElementById('nome').value.trim(),
    endereco: document.getElementById('endereco').value.trim(),
    data_nascimento: document.getElementById('data_nascimento').value,
    foto: base64Foto || ''
  };
}

/* ---------- CRUD ---------- */
async function inserir() {
  if(!validaCampos()) return;
  const base64 = await getFotoBase64();
  const pessoa = coletaDados(base64);

  const res = await fetch(API, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(pessoa)
  });
  const data = await res.json();
  if(res.ok) alert('Inserido com sucesso!');
  else alert('Erro: ' + (data.error || ''));
  listar();
}

async function alterar() {
  if(!validaCampos()) return;
  const cpf = document.getElementById('cpf').value.trim();
  const base64 = await getFotoBase64();
  const novosDados = coletaDados();
  if(base64) novosDados.foto = base64;

  const res = await fetch(`${API}/${encodeURIComponent(cpf)}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(novosDados)
  });
  const data = await res.json();
  if(res.ok) alert('Alterado com sucesso!');
  else alert('Erro: ' + (data.error || ''));
  listar();
}

async function remover() {
  const cpf = document.getElementById('cpf').value.trim();
  if(!cpf) return alert('Informe o CPF para remover.');
  if(confirm('Confirma a exclusão?')){
    const res = await fetch(`${API}/${encodeURIComponent(cpf)}`, {method:'DELETE'});
    const data = await res.json();
    if(res.ok) alert('Removido com sucesso!');
    else alert('Erro: ' + (data.error || ''));
    listar();
  }
}

async function pesquisar() {
  const termo = document.getElementById('pesquisa').value.trim();
  if(!termo){ listar(); return; }
  const res = await fetch(`${API}?q=${encodeURIComponent(termo)}`);
  const data = await res.json();
  preencheTabela(data);
}

async function listar() {
  const res = await fetch(API);
  const data = await res.json();
  preencheTabela(data);
}

/* ---------- UI ---------- */
function preencheTabela(lista){
  const tbody = document.getElementById('tabela');
  tbody.innerHTML = '';
  lista.forEach(p=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.cpf}</td>
      <td>${p.foto ? `<img class="thumb" src="${p.foto}" alt="foto">` : ''}</td>
      <td>${p.nome}</td>
      <td>${p.endereco}</td>
      <td>${p.data_nascimento}</td>`;
    tr.onclick = () => {
      document.getElementById('cpf').value = p.cpf;
      document.getElementById('nome').value = p.nome;
      document.getElementById('endereco').value = p.endereco;
      document.getElementById('data_nascimento').value = p.data_nascimento;
    };
    tbody.appendChild(tr);
  });
}

listar();
</script>
</body>
</html>
```

## Exemplo 04 - SERVIDOR DE APLICAÇÃO JAVA

![](images/clipboard-3162947411.png)

[ Vou refazer estes exemplo ]

## Exemplo 05 - SERVIDOR DE APLICAÇÃO C++

![](images/clipboard-2416235942.png)

Neste exemplo, temos uma aplicação cliente feita html e javascript

A interface do Cliente é feita em HTML5

A conexão com o servidor é feita pelo javascript incorporado no HTML:

CRUD no cliente é feito peloa javascript utilizando metodologia Restful sobre protocolo HTTP 2.0

O servidor Restful é feito em linguagem C++

A linguagem C++ precisa ser compilada.

PORTANTO O CÓDIGO DO SERVIDOR PRECISARÁ SER COMPILADO.

EM C++ VAMOS USAR BIBLIOTECAS EXTERNAS libpqxx e crow

OBS: NÃO TEMOS CONTROLE DE SESSÃO DE CLIENTE IMPLEMENTADO.

estrutura de diretórios:

``` css
pessoas-rest-cpp/
├─ CMakeLists.txt
├─ src/
│   └─ main.cpp
└─ include/
    └─ crow_all.h        ← header único da biblioteca Crow
```

### Criando o arquivo C++ do servidor

``` cpp
#include "crow_all.h"
#include <pqxx/pqxx>
#include <iostream>

const std::string CONN_STR =
    "postgresql://postgres:MinhaSuperSenha@db.pbbtfwmydxmxdibmtbqq.supabase.co:5432/postgres";

int main() {
    crow::SimpleApp app;

    // GET /pessoas
    CROW_ROUTE(app, "/pessoas").methods("GET"_method)
    ([](const crow::request& req){
        pqxx::connection c(CONN_STR);
        pqxx::work w(c);
        std::string q = req.url_params.get("q") ? req.url_params.get("q") : "";
        pqxx::result r;
        if(!q.empty()) {
            r = w.exec_params(
                "SELECT cpf,nome,endereco,data_nascimento,foto "
                "FROM pessoas WHERE lower(nome) LIKE lower('%'||$1||'%') OR cpf LIKE '%'||$1||'%'",
                q);
        } else {
            r = w.exec("SELECT cpf,nome,endereco,data_nascimento,foto FROM pessoas");
        }
        crow::json::wvalue out;
        size_t i=0;
        for(auto row : r) {
            out[i]["cpf"] = row["cpf"].c_str();
            out[i]["nome"] = row["nome"].c_str();
            out[i]["endereco"] = row["endereco"].c_str();
            out[i]["dataNascimento"] = row["data_nascimento"].c_str();
            out[i]["foto"] = row["foto"].is_null() ? "" : row["foto"].c_str();
            ++i;
        }
        return crow::response(out);
    });

    // POST /pessoas
    CROW_ROUTE(app, "/pessoas").methods("POST"_method)
    ([](const crow::request& req){
        auto body = crow::json::load(req.body);
        if(!body || !body.has("cpf"))
            return crow::response(400, "CPF é obrigatório");

        try {
            pqxx::connection c(CONN_STR);
            pqxx::work w(c);
            w.exec_params(
                "INSERT INTO pessoas (cpf,nome,endereco,data_nascimento,foto) "
                "VALUES ($1,$2,$3,$4,$5)",
                body["cpf"].s(),
                body["nome"].s_or(""),
                body["endereco"].s_or(""),
                body["dataNascimento"].s_or(""),
                body["foto"].s_or("")
            );
            w.commit();
            return crow::response(201, "Inserido");
        } catch(const std::exception &e) {
            return crow::response(400, e.what());
        }
    });

    // PUT /pessoas/<cpf>
    CROW_ROUTE(app, "/pessoas/<string>").methods("PUT"_method)
    ([](const crow::request& req, std::string cpf){
        auto body = crow::json::load(req.body);
        if(!body)
            return crow::response(400, "JSON inválido");
        try {
            pqxx::connection c(CONN_STR);
            pqxx::work w(c);
            w.exec_params(
                "UPDATE pessoas SET nome=$1,endereco=$2,data_nascimento=$3,foto=$4 WHERE cpf=$5",
                body["nome"].s_or(""),
                body["endereco"].s_or(""),
                body["dataNascimento"].s_or(""),
                body["foto"].s_or(""),
                cpf
            );
            if(w.affected_rows() == 0) return crow::response(404, "CPF não encontrado");
            w.commit();
            return crow::response(200, "Alterado");
        } catch(const std::exception &e) {
            return crow::response(400, e.what());
        }
    });

    // DELETE /pessoas/<cpf>
    CROW_ROUTE(app, "/pessoas/<string>").methods("DELETE"_method)
    ([](const crow::request&, std::string cpf){
        try {
            pqxx::connection c(CONN_STR);
            pqxx::work w(c);
            w.exec_params("DELETE FROM pessoas WHERE cpf=$1", cpf);
            if(w.affected_rows() == 0) return crow::response(404, "CPF não encontrado");
            w.commit();
            return crow::response(200, "Removido");
        } catch(const std::exception &e) {
            return crow::response(400, e.what());
        }
    });

    std::cout << "Servidor rodando em http://0.0.0.0:8080\n";
    app.port(8080).multithreaded().run();
}
```

### Ferramenta de compilação CMAKE

Preparando o arquivo de instruções da ferramenta de projeto CMAKE

``` txt
cmake_minimum_required(VERSION 3.20)
project(PessoasRestCpp LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Caminho para os headers (Crow e outros)
include_directories(${CMAKE_SOURCE_DIR}/include)

# Localização de libpqxx (ajuste se estiver em pasta diferente)
find_package(PostgreSQL REQUIRED)
find_path(PQXX_INCLUDE_DIR pqxx/pqxx)
find_library(PQXX_LIBRARY pqxx)

if(NOT PQXX_INCLUDE_DIR OR NOT PQXX_LIBRARY)
    message(FATAL_ERROR "libpqxx não encontrada. Instale com vcpkg ou aponte manualmente.")
endif()

add_executable(pessoas-rest
    src/main.cpp
)

target_include_directories(pessoas-rest PRIVATE ${PQXX_INCLUDE_DIR})
target_link_libraries(pessoas-rest
    ${PQXX_LIBRARY}
    PostgreSQL::PostgreSQL
)
```

Adicionando biblioteca extra no compilador C++ do windows

``` cmd
vcpkg install libpqxx
```

Gere o projeto do servidor para "Visual Studio 17 2022" E ARQUITETURA x64

``` cmd
cmake -B build -G "Visual Studio 17 2022" -A x64  -DCMAKE_TOOLCHAIN_FILE=C:/path/to/vcpkg/scripts/buildsystems/vcpkg.cmake
```

Compile e linque todo o projeto

``` cmd
cmake --build build --config Release
```

execute o servidor

``` cmd
build/Release/pessoas-rest.exe
```

servidor estará rodando na porta 8080 e EXPÕE A API de operações na URI <http://localhost:8080/pessoas> sem senha

``` css
http://localhost:8080/pessoas
```

### Cliente HTML (conexão Restful)

crie o arquivo index.html e abra-o no navegador

``` html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Cadastro de Pessoas</title>
<style>
  body { font-family: Arial, sans-serif; margin: 20px; }
  h1 { color: #333; }
  form { margin-bottom: 20px; }
  label { display: block; margin-top: 10px; }
  input[type=text], input[type=date], input[type=file] {
    width: 300px; padding: 5px;
  }
  table { border-collapse: collapse; width: 100%; margin-top: 20px; }
  th, td { border: 1px solid #aaa; padding: 6px; text-align: left; }
  img { max-width: 80px; max-height: 80px; }
  .btn { padding: 4px 8px; cursor: pointer; margin: 0 2px; }
</style>
</head>
<body>

<h1>Cadastro de Pessoas</h1>

<form id="pessoaForm">
  <label>CPF*:
    <input type="text" id="cpf" required>
  </label>
  <label>Nome:
    <input type="text" id="nome">
  </label>
  <label>Endereço:
    <input type="text" id="endereco">
  </label>
  <label>Data de Nascimento:
    <input type="date" id="dataNascimento">
  </label>
  <label>Foto:
    <input type="file" id="foto">
  </label>
  <button type="submit" class="btn">Salvar</button>
</form>

<div>
  <input type="text" id="search" placeholder="Buscar por CPF ou Nome">
  <button id="btnBuscar" class="btn">Buscar</button>
  <button id="btnListar" class="btn">Listar Todos</button>
</div>

<table id="tabelaPessoas">
  <thead>
    <tr>
      <th>CPF</th><th>Nome</th><th>Endereço</th><th>Nascimento</th><th>Foto</th><th>Ações</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

<script>
const API_URL = "http://localhost:8080/pessoas";

async function carregarPessoas(query="") {
  const url = query ? `${API_URL}?q=${encodeURIComponent(query)}` : API_URL;
  const resp = await fetch(url);
  const data = await resp.json();
  const tbody = document.querySelector("#tabelaPessoas tbody");
  tbody.innerHTML = "";
  data.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.cpf}</td>
      <td>${p.nome || ""}</td>
      <td>${p.endereco || ""}</td>
      <td>${p.dataNascimento || ""}</td>
      <td>${p.foto ? `<img src="${p.foto}" alt="foto">` : ""}</td>
      <td>
        <button class="btn" onclick="editar('${p.cpf}')">Editar</button>
        <button class="btn" onclick="excluir('${p.cpf}')">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

document.getElementById("pessoaForm").addEventListener("submit", async e => {
  e.preventDefault();
  const cpf = document.getElementById("cpf").value.trim();
  if (!cpf) { alert("CPF é obrigatório."); return; }

  const nome = document.getElementById("nome").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const dataNascimento = document.getElementById("dataNascimento").value;
  const fotoFile = document.getElementById("foto").files[0];
  let fotoBase64 = "";
  if (fotoFile) {
    fotoBase64 = await toBase64(fotoFile);
  }

  // Se já existe, usa PUT, senão POST
  const method = document.getElementById("cpf").dataset.editing ? "PUT" : "POST";
  const url = method === "PUT" ? `${API_URL}/${cpf}` : API_URL;

  const resp = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cpf, nome, endereco, dataNascimento, foto: fotoBase64 })
  });

  if (resp.ok) {
    alert("Salvo com sucesso!");
    document.getElementById("pessoaForm").reset();
    document.getElementById("cpf").dataset.editing = "";
    carregarPessoas();
  } else {
    alert("Erro: " + await resp.text());
  }
});

function editar(cpf) {
  const row = [...document.querySelectorAll("#tabelaPessoas tbody tr")]
    .find(tr => tr.children[0].textContent === cpf);
  if (!row) return;
  document.getElementById("cpf").value = cpf;
  document.getElementById("nome").value = row.children[1].textContent;
  document.getElementById("endereco").value = row.children[2].textContent;
  document.getElementById("dataNascimento").value = row.children[3].textContent;
  document.getElementById("cpf").dataset.editing = "true";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function excluir(cpf) {
  if (!confirm(`Excluir CPF ${cpf}?`)) return;
  const resp = await fetch(`${API_URL}/${cpf}`, { method: "DELETE" });
  if (resp.ok) {
    carregarPessoas();
  } else {
    alert("Erro: " + await resp.text());
  }
}

document.getElementById("btnBuscar").addEventListener("click", () => {
  const q = document.getElementById("search").value.trim();
  carregarPessoas(q);
});

document.getElementById("btnListar").addEventListener("click", () => {
  document.getElementById("search").value = "";
  carregarPessoas();
});

// Carregar lista inicial
carregarPessoas();
</script>
</body>
</html>
```






<!--chapter:end:09-2026-2026-04-21_CRUD-1-exercicio.Rmd-->

# Banco de Dados Estatístico - Cliente Rstudio
#### 06/10/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}




<!--chapter:end:10-2026-2026-04-28_CRUD-2-aula.Rmd-->

# Banco de Dados Estatístico - Cliente Rstudio
#### 06/10/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}




<!--chapter:end:10-2026-2026-04-28_CRUD-2-exercicio.Rmd-->

# Banco de Dados - Análise de Dados Parte 01
#### 13/10/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}



<!--chapter:end:11-2026-2026-05-05_Analise_01-aula.Rmd-->

# Banco de Dados - Análise de Dados Parte 01
#### 13/10/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}




<!--chapter:end:11-2026-2026-05-05_Analise_01-exercicio.Rmd-->

# Banco de Dados - Análise de Dados Parte 02
#### 20/10/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}





================================================================================



================================================================================






<div class="figure">
<img src="2026-ADS-1sem-BancoDeDados_files/figure-html/ex3-1.png" alt="Diagrama Produtos x categorias" width="672" />
<p class="caption">(\#fig:ex3)Diagrama Produtos x categorias</p>
</div>





<!--chapter:end:12-2026-2026-05-12_Analise_02-aula.Rmd-->

# Banco de Dados - Análise de Dados Parte 02
#### 20/10/2025 {.unnumbered}
#### Professor Miguél Suares {.unnumbered}




<!--chapter:end:12-2026-2026-05-12_Analise_02-exercicio.Rmd-->












<!--chapter:end:13-2026-2026-05-26_Analise_03-aula.Rmd-->

# Banco de Dados - Análise de Dados Parte 03

#### 27/10/2025 {.unnumbered}

#### Professor Miguél Suares {.unnumbered}



<!--chapter:end:13-2026-2026-05-26_Analise_03-exercicio.Rmd-->

