from flask import Flask, request, jsonify
import psycopg
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route('/messages', methods=['POST'])
def create_message():
    try:
        # Get the JSON data from the request
        body = request.get_json()['data']
        message = body['messages']
        print(body)

        # FIXME @LEO: chain route with Cohere API, using the `text`


        # FIXME @MATHEUS: insert result from Cohere into DB

        return jsonify({'message': 'Message summarized successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route("/db")
def db():
    with psycopg.connect(os.getenv('DATABASE_URL')) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users")
            return cur.fetchall()

@app.route("/")
def hello_world():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)