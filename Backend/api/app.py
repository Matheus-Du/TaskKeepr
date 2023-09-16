from flask import Flask
import psycopg
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route("/users")
def users():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users")
            return cur.fetchall()

@app.route("/teams")
def teams():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM teams")
            return cur.fetchall()

@app.route("/teamMembers")
def teamMembers():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT users.username, teams.name FROM userTeam  \
                        INNER JOIN teams ON userTeam.team = teams.id \
                        INNER JOIN users ON userTeam.teamMember = users.id \
                        ;")
            return cur.fetchall()

@app.route("/")
def hello_world():
    return "Hello World"