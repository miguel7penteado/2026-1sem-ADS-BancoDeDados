from repositories.base_repository import BaseRepository


class BaseService:
    """
    Camada Service.

    Responsável por concentrar regras de negócio antes de chamar o Repository.
    """

    def __init__(self, entidade_config):
        self.repository = BaseRepository(entidade_config)

    def listar_todos(self):
        return self.repository.listar_todos()

    def buscar_por_id(self, id_registro):
        registro = self.repository.buscar_por_id(id_registro)

        if registro is None:
            raise ValueError("Registro não encontrado.")

        return registro

    def inserir(self, dados):
        if dados is None:
            raise ValueError("O corpo da requisição JSON não foi informado.")

        novo_id = self.repository.inserir(dados)
        return self.repository.buscar_por_id(novo_id)

    def atualizar(self, id_registro, dados):
        if dados is None:
            raise ValueError("O corpo da requisição JSON não foi informado.")

        atualizado = self.repository.atualizar(id_registro, dados)

        if not atualizado:
            raise ValueError("Registro não encontrado ou nenhum campo alterado.")

        return self.repository.buscar_por_id(id_registro)

    def remover(self, id_registro):
        removido = self.repository.remover(id_registro)

        if not removido:
            raise ValueError("Registro não encontrado.")

        return True


class VeiculoService(BaseService):
    def listar_disponiveis(self):
        sql = f"""
            SELECT *
            FROM {self.repository.table}
            WHERE status_veiculo = %s
        """

        return self.repository.executar_query(sql, ("disponivel",))

    def atualizar_status(self, id_veiculo, status):
        sql = """
            UPDATE Veiculo
            SET status_veiculo = %s
            WHERE id_veiculo = %s
        """

        return self.repository.executar_comando(sql, (status, id_veiculo))


class AgendamentoService(BaseService):
    def confirmar(self, id_agendamento):
        sql = """
            UPDATE Agendamento
            SET status_agendamento = 'confirmado'
            WHERE id_agendamento = %s
        """

        return self.repository.executar_comando(sql, (id_agendamento,))

    def cancelar(self, id_agendamento):
        sql = """
            UPDATE Agendamento
            SET status_agendamento = 'cancelado'
            WHERE id_agendamento = %s
        """

        return self.repository.executar_comando(sql, (id_agendamento,))


class LocacaoService(BaseService):
    def finalizar(self, id_locacao, dados):
        data_devolucao = dados.get("data_devolucao")
        tempo_locacao_horas = dados.get("tempo_locacao_horas")
        valor_total = dados.get("valor_total")

        sql = """
            UPDATE Locacao
            SET data_devolucao = %s,
                tempo_locacao_horas = %s,
                valor_total = %s,
                status_locacao = 'finalizada'
            WHERE id_locacao = %s
        """

        return self.repository.executar_comando(
            sql,
            (
                data_devolucao,
                tempo_locacao_horas,
                valor_total,
                id_locacao
            )
        )


class PagamentoService(BaseService):
    def confirmar(self, id_pagamento):
        sql = """
            UPDATE Pagamento
            SET status_pagamento = 'confirmado'
            WHERE id_pagamento = %s
        """

        return self.repository.executar_comando(sql, (id_pagamento,))


class InspecaoService(BaseService):
    def finalizar(self, id_inspecao):
        sql = """
            UPDATE Inspecao
            SET status_inspecao = 'finalizada',
                data_fim = NOW()
            WHERE id_inspecao = %s
        """

        return self.repository.executar_comando(sql, (id_inspecao,))


class ChatService(BaseService):
    def triagem_inteligente(self, pergunta):
        pergunta = (pergunta or "").lower()

        if "pagamento" in pergunta or "pagar" in pergunta:
            return "Sua dúvida parece estar relacionada a pagamento."

        if "carro" in pergunta or "veículo" in pergunta or "veiculo" in pergunta:
            return "Sua dúvida parece estar relacionada aos veículos disponíveis."

        if "agendamento" in pergunta or "reserva" in pergunta or "locação" in pergunta or "locacao" in pergunta:
            return "Sua dúvida parece estar relacionada ao agendamento da locação."

        if "inspeção" in pergunta or "inspecao" in pergunta:
            return "Sua dúvida parece estar relacionada à inspeção do veículo."

        return "Sua dúvida será encaminhada para um atendente."
