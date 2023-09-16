from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)

@app.route('/messages', methods=['POST'])
def create_message():
    try:
        # Get the JSON data from the request
        body = request.get_json()['data']
        message = body['message']
        print(message, datetime.datetime.now().isoformat())

        # FIXME @LEO: chain route with Cohere API, using the `text`


        # FIXME @MATHEUS: insert result from Cohere into DB

        return jsonify({'message': 'Message summarized successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route("/")
def hello_world():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)