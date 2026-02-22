---
coverY: 0
layout:
  width: default
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: false
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Disciplina de Banco de Dados - 2026 - Professor Miguél Suares

## Pacotes JAVA para instalar

### Passo 1 - Instalar o kit de desenvolvimento JAVA versão 24 ou superior.

Precisa ter o java instalado na sua máquina [(JDK 24 é uma boa pedida)](https://www.oracle.com/java/technologies/downloads/#jdk24-windows).

### Passo 2 - Instalar o pacote java PLANTUML em um local onde o JAVA possa carrega-lo.

Baixe o [plantuml.jar](https://github.com/plantuml/plantuml/releases/download/v1.2025.4/plantuml-1.2025.4.jar)

#### sugestão de diretório no windows

``` cmd
mkdir   
```

#### sugestão de diretório no linux (versões tradicionais)

## Pacotes R para instalar para gerar esse material

Instalação pelo método padrão:

``` {#instalar_pacotes .R}

install.packages(c('triebeard','urltools','httpcode','rsvg','crul','magick','magickGUI','pdftools'))

options(repos = c( rkrug = 'https://rkrug.r-universe.dev', CRAN = 'https://cloud.r-project.org'))

install.packages('plantuml')

```

Instalação pelo pacote devtools:

```r
install.packages(c('triebeard','urltools','httpcode','rsvg','crul','magick','magickGUI','pdftools'))

devtools::install_github("rkrug/plantuml")
```
