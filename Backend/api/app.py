from flask import Flask, request
import psycopg
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# TODO: Add routes for associating a user with a team, and a team/user with an event
    # Change output of endpoints to be JSON

@app.route("/users", methods=['GET', 'POST'])
def users():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM users")
                return cur.fetchall()
            elif request.method == 'POST':
                content = request.json
                cur.execute("INSERT INTO users (id, username) VALUES ('{}', '{}');".format(content['id'], content['username']))
                conn.commit()
                return "User added"
        
@app.route("/users/<id>", methods=['GET'])
def user(id):
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM users WHERE id = '{}'".format(id))
                return cur.fetchall()

@app.route("/teams", methods=['GET', 'POST'])
def teams():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM teams")
                return cur.fetchall()
            elif request.method == 'POST':
                content = request.json
                cur.execute("INSERT INTO teams (id, name) VALUES ('{}', '{}');".format(content['id'], content['name']))
                conn.commit()
                return "Team added"

@app.route("/teamMembers")
def teamMembers():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT users.username AS USER, teams.name AS TEAM FROM userTeam  \
                        INNER JOIN teams ON userTeam.team = teams.id \
                        INNER JOIN users ON userTeam.teamMember = users.id \
                        ;")
            return cur.fetchall()
        
@app.route("/events", methods=['GET', 'POST'])
def events():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM events")
                return cur.fetchall()
            elif request.method == 'POST':
                content = request.json
                cur.execute("INSERT INTO events (name, description, type, startDate, endDate, dateCreated) \
                            VALUES ('{}', '{}', '{}', '{}', '{}', '{}');".format(content['name'], content['description'], content['type'], content['startDate'], content['endDate'], content['dateCreated']))
                conn.commit()
                return "Event added"

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