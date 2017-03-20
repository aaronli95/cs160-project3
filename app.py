from flask import Flask 
import os
from boto.dynamodb2.fields import HashKey
from boto.dynamodb2.table import Table
from flask import Flask
from flask.ext.dynamo import Dynamo

app = Flask(__name__)
# app.config.from_pyfile("settings.cfg")
# os.environ["AWS_ACCESS_KEY_ID"] = AWS_ACCESS_KEY_ID
# os.environ["AWS_SECRET_KEY"] = AWS_SECRET_KEY

@app.route("/") 
def hello(): 
	return render_template('index.html') 

@app.route("/fuck")
def DB():
	return "fuck"


if __name__ == "__main__": 
	app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))
