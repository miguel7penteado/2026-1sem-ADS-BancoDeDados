import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    """
    Configurações gerais da aplicação.

    As variáveis podem ser configuradas em um arquivo .env na raiz do projeto.
    """

    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = int(os.getenv("DB_PORT", "3306"))
    DB_USER = os.getenv("DB_USER", "root")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "")
    DB_NAME = os.getenv("DB_NAME", "locacao_veiculos_eletricos")

    API_HOST = os.getenv("API_HOST", "127.0.0.1")
    API_PORT = int(os.getenv("API_PORT", "5000"))
    DEBUG = os.getenv("DEBUG", "True").lower() == "true"
