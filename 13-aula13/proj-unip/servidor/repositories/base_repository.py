from database import get_connection


class BaseRepository:
    """
    Camada Repository/DAO.

    Responsável por executar comandos SQL no banco MySQL.
    """

    def __init__(self, entidade_config):
        self.table = entidade_config["table"]
        self.pk = entidade_config["pk"]
        self.columns = entidade_config["columns"]

    def listar_todos(self):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            sql = f"SELECT * FROM {self.table}"
            cursor.execute(sql)
            return cursor.fetchall()

        finally:
            cursor.close()
            connection.close()

    def buscar_por_id(self, id_registro):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            sql = f"SELECT * FROM {self.table} WHERE {self.pk} = %s"
            cursor.execute(sql, (id_registro,))
            return cursor.fetchone()

        finally:
            cursor.close()
            connection.close()

    def inserir(self, dados):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            campos = []
            valores = []

            for coluna in self.columns:
                if coluna in dados:
                    campos.append(coluna)
                    valores.append(dados[coluna])

            if not campos:
                raise ValueError("Nenhum campo válido foi informado para inserção.")

            placeholders = ", ".join(["%s"] * len(campos))
            campos_sql = ", ".join(campos)

            sql = f"""
                INSERT INTO {self.table} ({campos_sql})
                VALUES ({placeholders})
            """

            cursor.execute(sql, valores)
            connection.commit()

            return cursor.lastrowid

        except Exception as erro:
            connection.rollback()
            raise erro

        finally:
            cursor.close()
            connection.close()

    def atualizar(self, id_registro, dados):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            campos = []
            valores = []

            for coluna in self.columns:
                if coluna in dados:
                    campos.append(f"{coluna} = %s")
                    valores.append(dados[coluna])

            if not campos:
                return False

            valores.append(id_registro)
            campos_sql = ", ".join(campos)

            sql = f"""
                UPDATE {self.table}
                SET {campos_sql}
                WHERE {self.pk} = %s
            """

            cursor.execute(sql, valores)
            connection.commit()

            return cursor.rowcount > 0

        except Exception as erro:
            connection.rollback()
            raise erro

        finally:
            cursor.close()
            connection.close()

    def remover(self, id_registro):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            sql = f"DELETE FROM {self.table} WHERE {self.pk} = %s"
            cursor.execute(sql, (id_registro,))
            connection.commit()

            return cursor.rowcount > 0

        except Exception as erro:
            connection.rollback()
            raise erro

        finally:
            cursor.close()
            connection.close()

    def executar_query(self, sql, parametros=None):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            cursor.execute(sql, parametros or ())
            return cursor.fetchall()

        finally:
            cursor.close()
            connection.close()

    def executar_comando(self, sql, parametros=None):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            cursor.execute(sql, parametros or ())
            connection.commit()
            return cursor.rowcount > 0

        except Exception as erro:
            connection.rollback()
            raise erro

        finally:
            cursor.close()
            connection.close()
