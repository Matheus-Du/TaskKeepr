from flask import Flask, request, jsonify
import psycopg
import os
from dotenv import load_dotenv
import cohere

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
        res = get_summary(message)

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

def get_summary(chat):
	co = cohere.Client('VovM8HYiisv03U7UMnD9k6puo3z4TisNzS8im1No')
	return co.generate(
		model= 'command-nightly',
		# stream= True,
		prompt = '\n'.join(chat) + '\nFor context: \'\'. '+ 
		'In the format of this example: \'-Leo is fixing the login bug on signin page from 2 pm to 4 pm\'?' + 
		'what am I doing today in bullet point?',
		max_tokens = 100,
		temperature= 0.1
	)[0]

if __name__ == '__main__':
    app.run(debug=True)