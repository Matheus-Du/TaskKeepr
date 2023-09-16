from flask import Flask, request
import psycopg
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = Flask(__name__)

# TODO: Add routes for associating a user with a team, and a team/user with an event
    # Change output of endpoints to be JSON

@app.route("/users", methods=['GET', 'POST'])
def users():
    # Get all users or POST a new user
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM users")
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'id': row[0], 'username': row[1]})
                return json
            elif request.method == 'POST':
                content = request.json
                cur.execute("INSERT INTO users (id, username) VALUES ('{}', '{}');".format(content['id'], content['username']))
                conn.commit()
                return "User added"
        
@app.route("/users/<id>", methods=['GET'])
def user(id):
    # Get specific user by id
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM users WHERE id = '{}'".format(id))
                data = cur.fetchone()
                # convert the row to a JSON object and return as a list of JSON objects
                json = {'id': data[0], 'username': data[1]}
                return json

@app.route("/teams", methods=['GET', 'POST'])
def teams():
    # Get all teams or POST a new team
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM teams")
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'id': row[0], 'name': row[1]})
                return json
            elif request.method == 'POST':
                content = request.json
                cur.execute("INSERT INTO teams (id, name) VALUES ('{}', '{}');".format(content['id'], content['name']))
                conn.commit()
                return "Team added"

@app.route("/teamMembers", methods=['GET'])
def teamMembers():
    # Get all users and their associated team
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT users.username AS USER, teams.name AS TEAM FROM userTeam  \
                        INNER JOIN teams ON userTeam.team = teams.id \
                        INNER JOIN users ON userTeam.teamMember = users.id \
                        ;")
            data = cur.fetchall()
            # convert each row to a JSON object and return as a list of JSON objects
            json = []
            for row in data:
                json.append({'teamMember': row[0], 'team': row[1]})
            return json
        
@app.route("/events", methods=['GET', 'POST'])
def events():
    # GET all events or POST a new event
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT * FROM events")
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'id': row[0], 'name': row[1]})
                return json
            elif request.method == 'POST':
                content = request.json
                cur.execute("INSERT INTO events (name, description, type, startDate, endDate, dateCreated) \
                            VALUES ('{}', '{}', '{}', '{}', '{}', '{}');".format(content['name'], content['description'], content['type'], content['startDate'], content['endDate'], content['dateCreated']))
                conn.commit()
                return "Event added"

@app.route("/teamEvents", methods=['GET', 'POST'])
def teamEvents():
    # Get all teams and their associated events or POST a new team/event association
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                    cur.execute("SELECT events.name, teams.name FROM teamEvent  \
                                INNER JOIN teams ON teamEvent.team = teams.id \
                                INNER JOIN events ON teamEvent.event = events.id \
                                ;")
                    data = cur.fetchall()
                    # convert each row to a JSON object and return as a list of JSON objects
                    json = []
                    for row in data:
                        json.append({'event': row[0], 'team': row[1]})
                    return json
            elif request.method == 'POST':
                    content = request.json
                    cur.execute("INSERT INTO teamEvent (event, team) VALUES ('{}', '{}');".format(content['event'], content['team']))
                    conn.commit()
                    return "Team/Event association added"
        
@app.route("/userEvents", methods=['GET', 'POST'])
def userEvents():
    # Get all users and their associated events or POST a new user/event association
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                data = cur.execute("SELECT users.username AS USER, events.name AS EVENT FROM userEvent \
                            INNER JOIN users ON userEvent.teamMember = users.id \
                            INNER JOIN events ON userEvent.event = events.id \
                            ;")
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'user': row[0], 'event': row[1]})
                return json
            elif request.method == 'POST':
                content = request.json
                cur.execute("INSERT INTO userEvent (event, teamMember) VALUES ('{}', '{}');".format(content['event'], content['teamMember']))
                conn.commit()
                return "User/Event association added"

@app.route("/")
def hello_world():
    return "Hello World"