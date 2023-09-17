from flask import Flask, request
import psycopg
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = Flask(__name__)

# TODO: Need to fix returns for GET requests; they should return obj ID's instead of names

# Add a new user to the database or return all users
@app.route("/users", methods=['GET', 'POST', 'DELETE'])
def addUser():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'POST':
                data = request.get_json()
                try:
                    cur.execute("INSERT INTO users (id, username) VALUES ('{}', '{}')".format(data['id'], data['username']))
                    conn.commit()
                except Exception:
                    return "Error: User with that ID already exists", 500
                else:
                    return "Success"
            elif request.method == 'GET':
                cur.execute("SELECT * FROM users")
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'id': row[0], 'username': row[1]})
                return json
            elif request.method == 'DELETE':
                data = request.get_json()
                try:
                    cur.execute("DELETE FROM users WHERE id = '{}'".format(data['id']))
                    conn.commit()
                except Exception:
                    return "Error: User with that ID does not exist", 500
                else:
                    return "Success"
        
# Add a new team to the database or return all teams
@app.route("/teams", methods=['GET', 'POST', 'DELETE'])
def addTeam():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'POST':
                data = request.get_json()
                try:
                    cur.execute("INSERT INTO teams (id, name) VALUES ('{}', '{}')".format(data['id'], data['name']))
                    conn.commit()
                except Exception:
                    return "Error: Team with that ID already exists", 500
                else:
                    return "Success"
            elif request.method == 'GET':
                cur.execute("SELECT * FROM teams")
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'id': row[0], 'name': row[1]})
                return json
            elif request.method == 'DELETE':
                data = request.get_json()
                try:
                    cur.execute("DELETE FROM teams WHERE id = '{}'".format(data['id']))
                    conn.commit()
                except Exception:
                    return "Error: Team with that ID does not exist", 500
                else:
                    return "Success"
                    
# Add a new event to the database or return all events
@app.route("/events", methods=['GET', 'POST', 'DELETE'])
def addEvent():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'POST':
                data = request.get_json()
                try:
                    cur.execute("INSERT INTO events (name, description, type, startDate, endDate, dateCreated) VALUES ('{}', '{}', '{}', '{}', '{}', '{}')".format(data['name'], data['description'], data['type'], data['startDate'], data['endDate'], data['dateCreated']))
                    conn.commit()
                except Exception:
                    return "Error: Event with that ID already exists", 500
                else:
                    return "Success"
            elif request.method == 'GET':
                cur.execute("SELECT * FROM events")
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'id': row[0], 'name': row[1], 'description': row[2], 'type': row[3], 'startDate': row[4], 'endDate': row[5], 'dateCreated': row[6]})
                return json
            elif request.method == 'DELETE':
                data = request.get_json()
                try:
                    cur.execute("DELETE FROM events WHERE id = '{}'".format(data['id']))
                    conn.commit()
                except Exception:
                    return "Error: Event with that ID does not exist", 500
                else:
                    return "Success"

# Given a team ID, return all users on that team or POST a user to add to that team
@app.route("/teams/<id>/users", methods=['GET', 'POST'])
def teamUsers(id):
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT users.id, users.username FROM userTeam \
                            INNER JOIN users ON userTeam.teamMember = users.id \
                            WHERE userTeam.team = '{}'".format(id))
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'userID': row[0], 'teamMember': row[1]})
                return json
            elif request.method == 'POST':
                # add user to team
                data = request.get_json()
                try:
                    cur.execute("INSERT INTO userTeam (team, teamMember) VALUES ('{}', '{}')".format(id, data['user']))
                    conn.commit()
                except Exception:
                    return "Error: User is already a member of that team", 500
                else:
                    return "Success"    
                    
# Given a user ID, return all events that user is associated with or POST an event to associate with that user
@app.route("/users/<id>/events", methods=['GET', 'POST'])
def userEvents(id):
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT events.id, events.name, events.description, events.type, \
                            events.dateCreated, events.startDate, events.endDate FROM events \
                            INNER JOIN userEvent ON events.id = userEvent.event \
                            WHERE userEvent.teamMember = '{}'".format(id))
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'eventID': row[0], 'name': row[1], 'description': row[2], 'type': row[3], 
                                 'dateCreated': row[4], 'startDate': row[5], 'endDate': row[6]})
                return json
            elif request.method == 'POST':
                # assign event to user
                data = request.get_json()
                try:
                    cur.execute("INSERT INTO userEvent (event, teamMember) VALUES ('{}', '{}')".format(data['event'], id))
                    conn.commit()
                except Exception:
                    return "Error: Event is already associated with that user", 500
                else:
                    return "Success"
                        
# Given a team ID, return all events that team is associated with or POST an event to associate with that team
@app.route("/teams/<id>/events", methods=['GET', 'POST'])
def teamEvents(id):
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            if request.method == 'GET':
                cur.execute("SELECT events.id, events.name, events.description, events.type, \
                            events.dateCreated, events.startDate, events.endDate FROM teamEvent \
                            INNER JOIN events ON teamEvent.event = events.id \
                            WHERE teamEvent.team = '{}'".format(id))
                data = cur.fetchall()
                # convert each row to a JSON object and return as a list of JSON objects
                json = []
                for row in data:
                    json.append({'eventID': row[0], 'name': row[1], 'description': row[2], 'type': row[3], 
                                 'dateCreated': row[4], 'startDate': row[5], 'endDate': row[6]})
                return json
            elif request.method == 'POST':
                # assign event to team
                data = request.get_json()
                try:
                    cur.execute("INSERT INTO teamEvent (event, team) VALUES ('{}', '{}')".format(data['event'], id))
                    conn.commit()
                except Exception:
                    return "Error: Event is already associated with that team", 500
                else:
                    return "Success"

@app.route("/")
def hello_world():
    return "Hello World"