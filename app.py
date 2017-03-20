from flask import Flask 
import os
from boto.dynamodb2.fields import HashKey
from boto.dynamodb2.table import Table
from flask import Flask, render_template
from flask.ext.dynamo import Dynamo

app = Flask(__name__)
# app.config.from_pyfile("settings.cfg")
# os.environ["AWS_ACCESS_KEY_ID"] = AWS_ACCESS_KEY_ID
# os.environ["AWS_SECRET_KEY"] = AWS_SECRET_KEY

@app.route("/") 
def home(): 
	return render_template('GET-POST-REQ.html') 

@app.route("/recipePage")
def RP():
	return "This should be our recipe page"

@app.route("/ingredientsPage")
def IP():
	return "this should be our ingredients page"


if __name__ == "__main__": 
	app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))
