"""
Metadados das entidades do sistema.

Este projeto usa SQL direto com mysql-connector-python.
Por isso, este arquivo funciona como um mapeamento simples entre:
- rota REST;
- tabela no MySQL;
- chave primária;
- colunas permitidas em INSERT/UPDATE.
"""

ENTIDADES = {
    "clientes": {
        "table": "Cliente",
        "pk": "id_cliente",
        "columns": [
            "nome",
            "email",
            "telefone",
            "cpf",
            "necessidades_acessibilidade"
        ]
    },

    "categorias": {
        "table": "CategoriaVeiculo",
        "pk": "id_categoria",
        "columns": [
            "nome_categoria",
            "descricao"
        ]
    },

    "veiculos": {
        "table": "Veiculo",
        "pk": "id_veiculo",
        "columns": [
            "id_categoria",
            "marca",
            "modelo",
            "placa",
            "ano",
            "autonomia_km",
            "tipo_cambio",
            "possui_som",
            "nivel_conforto",
            "adequado_viagem",
            "status_veiculo"
        ]
    },

    "agendamentos": {
        "table": "Agendamento",
        "pk": "id_agendamento",
        "columns": [
            "id_cliente",
            "id_veiculo",
            "data_inicio",
            "data_fim",
            "periodo",
            "status_agendamento"
        ]
    },

    "locacoes": {
        "table": "Locacao",
        "pk": "id_locacao",
        "columns": [
            "id_agendamento",
            "data_retirada",
            "data_devolucao",
            "tempo_locacao_horas",
            "valor_total",
            "status_locacao"
        ]
    },

    "pagamentos": {
        "table": "Pagamento",
        "pk": "id_pagamento",
        "columns": [
            "id_locacao",
            "valor_pago",
            "forma_pagamento",
            "data_pagamento",
            "status_pagamento"
        ]
    },

    "inspecoes": {
        "table": "Inspecao",
        "pk": "id_inspecao",
        "columns": [
            "id_veiculo",
            "data_inicio",
            "data_fim",
            "status_inspecao",
            "observacoes"
        ]
    },

    "chats": {
        "table": "AtendimentoChat",
        "pk": "id_chat",
        "columns": [
            "id_cliente",
            "data_abertura",
            "status_chat",
            "tipo_triagem"
        ]
    },

    "mensagens": {
        "table": "MensagemChat",
        "pk": "id_mensagem",
        "columns": [
            "id_chat",
            "remetente",
            "conteudo",
            "data_envio"
        ]
    }
}
