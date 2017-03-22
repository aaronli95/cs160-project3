import os
from boto.dynamodb2.fields import HashKey
from boto.dynamodb2.table import Table
from flask import Flask, render_template
from flask.ext.dynamo import Dynamo

app = Flask(__name__,static_folder="static")
# app.config.from_pyfile("settings.cfg")
# os.environ["AWS_ACCESS_KEY_ID"] = AWS_ACCESS_KEY_ID
# os.environ["AWS_SECRET_KEY"] = AWS_SECRET_KEY

@app.route("/") 
@app.route("/templates/index.html")
def home(): 
	return render_template('index.html') 

@app.route("/recipePage")
@app.route("/templates/recipePage.html")
def RP():
	return render_template('recipePage.html')

@app.route("/ingredientPage")
@app.route("/templates/ingredientPage.html")
def IP():
	return render_template('ingredientPage.html')

@app.route("/displayRecipePage")
@app.route("/templates/displayRecipePage.html")
def DRP():
	return render_template('displayRecipePage.html')


if __name__ == "__main__": 
	app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))
