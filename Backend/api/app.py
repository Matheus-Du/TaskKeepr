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
            cur.execute("SELECT users.username AS USER, teams.name AS TEAM FROM userTeam  \
                        INNER JOIN teams ON userTeam.team = teams.id \
                        INNER JOIN users ON userTeam.teamMember = users.id \
                        ;")
            return cur.fetchall()
        
@app.route("/events")
def events():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM events")
            return cur.fetchall()

@app.route("/teamEvents")
def teamEvents():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT teams.name AS TEAM, events.name AS EVENT FROM teamEvent  \
                        INNER JOIN teams ON teamEvent.team = teams.id \
                        INNER JOIN events ON teamEvent.event = events.id \
                        ;")
            return cur.fetchall()
        
@app.route("/userEvents")
def userEvents():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT users.username AS USER, events.name AS EVENT FROM userEvent  \
                        INNER JOIN users ON userEvent.teamMember = users.id \
                        INNER JOIN events ON userEvent.event = events.id \
                        ;")
            return cur.fetchall()

@app.route("/")
def hello_world():
    return "Hello World"