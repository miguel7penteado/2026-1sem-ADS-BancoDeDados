from flask import Flask, jsonify
from flask_cors import CORS

from config import Config
from models.entidades import ENTIDADES

from services.base_service import (
    BaseService,
    VeiculoService,
    AgendamentoService,
    LocacaoService,
    PagamentoService,
    InspecaoService,
    ChatService
)

from controllers.api_controller import (
    criar_controller,
    criar_controller_veiculos,
    criar_controller_agendamentos,
    criar_controller_locacoes,
    criar_controller_pagamentos,
    criar_controller_inspecoes,
    criar_controller_chat
)


def create_app():
    """
    Fábrica da aplicação Flask.
    """
    app = Flask(__name__)
    CORS(app)

    cliente_service = BaseService(ENTIDADES["clientes"])
    categoria_service = BaseService(ENTIDADES["categorias"])
    veiculo_service = VeiculoService(ENTIDADES["veiculos"])
    agendamento_service = AgendamentoService(ENTIDADES["agendamentos"])
    locacao_service = LocacaoService(ENTIDADES["locacoes"])
    pagamento_service = PagamentoService(ENTIDADES["pagamentos"])
    inspecao_service = InspecaoService(ENTIDADES["inspecoes"])
    chat_service = ChatService(ENTIDADES["chats"])
    mensagem_service = BaseService(ENTIDADES["mensagens"])

    app.register_blueprint(
        criar_controller("clientes", cliente_service),
        url_prefix="/api/clientes"
    )

    app.register_blueprint(
        criar_controller("categorias", categoria_service),
        url_prefix="/api/categorias"
    )

    app.register_blueprint(
        criar_controller_veiculos(veiculo_service),
        url_prefix="/api/veiculos"
    )

    app.register_blueprint(
        criar_controller_agendamentos(agendamento_service),
        url_prefix="/api/agendamentos"
    )

    app.register_blueprint(
        criar_controller_locacoes(locacao_service),
        url_prefix="/api/locacoes"
    )

    app.register_blueprint(
        criar_controller_pagamentos(pagamento_service),
        url_prefix="/api/pagamentos"
    )

    app.register_blueprint(
        criar_controller_inspecoes(inspecao_service),
        url_prefix="/api/inspecoes"
    )

    app.register_blueprint(
        criar_controller_chat(chat_service),
        url_prefix="/api/chats"
    )

    app.register_blueprint(
        criar_controller("mensagens", mensagem_service),
        url_prefix="/api/mensagens"
    )

    @app.route("/", methods=["GET"])
    def index():
        return jsonify({
            "mensagem": "Servidor de Locação de Veículos Elétricos",
            "versao": "1.0",
            "rotas": {
                "clientes": "/api/clientes",
                "categorias": "/api/categorias",
                "veiculos": "/api/veiculos",
                "veiculos_disponiveis": "/api/veiculos/disponiveis",
                "agendamentos": "/api/agendamentos",
                "locacoes": "/api/locacoes",
                "pagamentos": "/api/pagamentos",
                "inspecoes": "/api/inspecoes",
                "chats": "/api/chats",
                "mensagens": "/api/mensagens"
            }
        })

    return app


if __name__ == "__main__":
    app = create_app()

    app.run(
        host=Config.API_HOST,
        port=Config.API_PORT,
        debug=Config.DEBUG
    )
