from flask import Blueprint, jsonify, request


def criar_controller(nome_rota, service):
    """
    Controller REST genérico com operações CRUD.

    Rotas geradas:
    GET    /
    GET    /<id>
    POST   /
    PUT    /<id>
    DELETE /<id>
    """

    blueprint = Blueprint(nome_rota, __name__)

    @blueprint.route("/", methods=["GET"])
    def listar_todos():
        try:
            dados = service.listar_todos()
            return jsonify(dados), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 500

    @blueprint.route("/<int:id_registro>", methods=["GET"])
    def buscar_por_id(id_registro):
        try:
            dados = service.buscar_por_id(id_registro)
            return jsonify(dados), 200

        except ValueError as erro:
            return jsonify({"erro": str(erro)}), 404

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 500

    @blueprint.route("/", methods=["POST"])
    def inserir():
        try:
            dados = request.get_json()
            novo_registro = service.inserir(dados)
            return jsonify(novo_registro), 201

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    @blueprint.route("/<int:id_registro>", methods=["PUT"])
    def atualizar(id_registro):
        try:
            dados = request.get_json()
            registro_atualizado = service.atualizar(id_registro, dados)
            return jsonify(registro_atualizado), 200

        except ValueError as erro:
            return jsonify({"erro": str(erro)}), 404

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    @blueprint.route("/<int:id_registro>", methods=["DELETE"])
    def remover(id_registro):
        try:
            service.remover(id_registro)
            return jsonify({"mensagem": "Registro removido com sucesso."}), 200

        except ValueError as erro:
            return jsonify({"erro": str(erro)}), 404

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    return blueprint


def criar_controller_veiculos(service):
    blueprint = criar_controller("veiculos", service)

    @blueprint.route("/disponiveis", methods=["GET"])
    def listar_disponiveis():
        try:
            dados = service.listar_disponiveis()
            return jsonify(dados), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 500

    @blueprint.route("/<int:id_veiculo>/status", methods=["PUT"])
    def atualizar_status(id_veiculo):
        try:
            dados = request.get_json()
            status = dados.get("status_veiculo")

            if not status:
                return jsonify({"erro": "Campo status_veiculo é obrigatório."}), 400

            service.atualizar_status(id_veiculo, status)

            return jsonify({"mensagem": "Status do veículo atualizado."}), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    return blueprint


def criar_controller_agendamentos(service):
    blueprint = criar_controller("agendamentos", service)

    @blueprint.route("/<int:id_agendamento>/confirmar", methods=["POST"])
    def confirmar(id_agendamento):
        try:
            service.confirmar(id_agendamento)
            return jsonify({"mensagem": "Agendamento confirmado."}), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    @blueprint.route("/<int:id_agendamento>/cancelar", methods=["POST"])
    def cancelar(id_agendamento):
        try:
            service.cancelar(id_agendamento)
            return jsonify({"mensagem": "Agendamento cancelado."}), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    return blueprint


def criar_controller_locacoes(service):
    blueprint = criar_controller("locacoes", service)

    @blueprint.route("/<int:id_locacao>/finalizar", methods=["POST"])
    def finalizar(id_locacao):
        try:
            dados = request.get_json()
            service.finalizar(id_locacao, dados)
            return jsonify({"mensagem": "Locação finalizada."}), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    return blueprint


def criar_controller_pagamentos(service):
    blueprint = criar_controller("pagamentos", service)

    @blueprint.route("/<int:id_pagamento>/confirmar", methods=["POST"])
    def confirmar(id_pagamento):
        try:
            service.confirmar(id_pagamento)
            return jsonify({"mensagem": "Pagamento confirmado."}), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    return blueprint


def criar_controller_inspecoes(service):
    blueprint = criar_controller("inspecoes", service)

    @blueprint.route("/<int:id_inspecao>/finalizar", methods=["POST"])
    def finalizar(id_inspecao):
        try:
            service.finalizar(id_inspecao)
            return jsonify({"mensagem": "Inspeção finalizada."}), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    return blueprint


def criar_controller_chat(service):
    blueprint = criar_controller("chats", service)

    @blueprint.route("/triagem", methods=["POST"])
    def triagem():
        try:
            dados = request.get_json() or {}
            pergunta = dados.get("pergunta", "")

            resposta = service.triagem_inteligente(pergunta)

            return jsonify({
                "pergunta": pergunta,
                "resposta": resposta
            }), 200

        except Exception as erro:
            return jsonify({"erro": str(erro)}), 400

    return blueprint
