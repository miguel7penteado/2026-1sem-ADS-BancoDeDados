from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, Column, String, Date, Text
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import date

# ------------------------------
# Flask + CORS
# ------------------------------
app = Flask(__name__)
CORS(app)

# ------------------------------
# Banco de Dados PostgreSQL
# ------------------------------
# SGBD: PostgreSQL
# Host: localhost
# Usuário: pessoas_user
# Banco: pessoasdb
# Tabela: pessoas
#
# Instale antes:
# pip install flask flask-cors sqlalchemy psycopg2-binary

DATABASE_URL = "postgresql+psycopg2://unip:unip@localhost:5432/bancounip"

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    future=True
)

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
    future=True
)

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
    foto = Column(Text)

# Cria a tabela caso ela ainda não exista
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
    return date.fromisoformat(value)

# ------------------------------
# CRUD
# ------------------------------

@app.route('/pessoas', methods=['GET'])
def listar():
    termo = (request.args.get('q') or '').strip()

    with SessionLocal() as session:
        query = session.query(Pessoa)

        if termo:
            like = f"%{termo}%"

            # No PostgreSQL, ilike funciona de forma nativa
            query = query.filter(
                (Pessoa.nome.ilike(like)) |
                (Pessoa.cpf.ilike(like))
            )

        pessoas = query.order_by(Pessoa.nome.asc()).all()
        return jsonify([to_dict(p) for p in pessoas])


@app.route('/pessoas', methods=['POST'])
def inserir():
    dados = request.get_json()

    if not dados:
        return jsonify({"error": "JSON inválido ou ausente"}), 400

    required = ['cpf', 'nome', 'endereco', 'data_nascimento']
    faltantes = [k for k in required if not dados.get(k)]

    if faltantes:
        return jsonify({
            "error": "Campos obrigatórios faltando",
            "fields": faltantes
        }), 422

    try:
        dn = parse_date_iso(dados['data_nascimento'])
    except Exception:
        return jsonify({
            "error": "data_nascimento inválida. Use YYYY-MM-DD"
        }), 422

    with SessionLocal() as session:
        try:
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

        except Exception as erro:
            session.rollback()
            return jsonify({
                "error": "Erro ao inserir pessoa",
                "details": str(erro)
            }), 500


@app.route('/pessoas/<cpf>', methods=['PUT'])
def alterar(cpf):
    dados = request.get_json()

    if not dados:
        return jsonify({"error": "JSON inválido ou ausente"}), 400

    with SessionLocal() as session:
        try:
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
                    return jsonify({
                        "error": "data_nascimento inválida. Use YYYY-MM-DD"
                    }), 422

            if 'foto' in dados:
                pessoa.foto = dados['foto']

            session.commit()
            session.refresh(pessoa)

            return jsonify(to_dict(pessoa)), 200

        except Exception as erro:
            session.rollback()
            return jsonify({
                "error": "Erro ao alterar pessoa",
                "details": str(erro)
            }), 500


@app.route('/pessoas/<cpf>', methods=['DELETE'])
def remover(cpf):
    with SessionLocal() as session:
        try:
            pessoa = session.query(Pessoa).filter_by(cpf=cpf).first()

            if not pessoa:
                return jsonify({"error": "CPF não encontrado"}), 404

            session.delete(pessoa)
            session.commit()

            return '', 204

        except Exception as erro:
            session.rollback()
            return jsonify({
                "error": "Erro ao remover pessoa",
                "details": str(erro)
            }), 500


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