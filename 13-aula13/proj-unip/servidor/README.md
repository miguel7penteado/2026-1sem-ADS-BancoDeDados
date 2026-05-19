# Servidor de Locação de Veículos Elétricos

Servidor Python 3.x com Flask, MySQL Connector e CORS.

## Instalação

```bash
pip install -r requirements.txt
```

## Configuração

Copie `.env.example` para `.env` e ajuste usuário, senha e banco MySQL.

## Execução

```bash
python app.py
```

A API ficará disponível em:

```text
http://127.0.0.1:5000
```

## Exemplo

```text
GET http://127.0.0.1:5000/api/clientes/
```
