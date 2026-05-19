import mysql.connector
from mysql.connector import Error
from config import Config


def get_connection():
    """
    Cria e retorna uma conexão com o banco de dados MySQL.

    Retorna:
        mysql.connector.connection.MySQLConnection
    """
    try:
        connection = mysql.connector.connect(
            host=Config.DB_HOST,
            port=Config.DB_PORT,
            user=Config.DB_USER,
            password=Config.DB_PASSWORD,
            database=Config.DB_NAME
        )

        return connection

    except Error as erro:
        print(f"Erro ao conectar ao MySQL: {erro}")
        raise erro
