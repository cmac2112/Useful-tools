from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, origins=['http://localhost:5173'])

#for ez documents, the repsonse from the ai can be split and stored into json objects
#we can then split the json items into their own things on the website.

#this is also the connection point between react and flask

#this python app is a server on itself, but react pulls from this api through http://localhost:5000/api/users
#all possible by using CORS corss origin resource sharings
@app.route('/api/users', methods=['GET'])
def hello_world():
    return jsonify({"users": [
        'i am json',
        'josonify'
    ],
    "members": [
        'i am a member',
        'memberify'
    ]})


if __name__ == "__main__":
    app.run(debug=True)