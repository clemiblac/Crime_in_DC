#import flask
from flask import (
    Flask,
    render_template,
    jsonify,
    redirect)

# importing necessary libraries
import pandas as pd
import json
from datetime import datetime

#Importing sqlalchemy requirements
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

#Database setup
from config import (
username,
password,
host,
database
)


engine = create_engine(f"mysql://{username}:{password}@{host}/{database}",echo = True)


app=Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/machine-learning")
def machine():
    return render_template("machine_learning.html")
    

@app.route("/acknowledgements")
def acknowledge():
    return render_template("acknowledgements.html")

@app.route("/about")
def about():
    return render_template("about.html")

##############   Data Routes  ######################
@app.route("/news")
def news_scrape():
    results=pd.read_sql('SELECT * FROM news_scrape',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2010")
def crime2010():
    results=pd.read_sql('SELECT * FROM crime2010',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2011")
def crime2011():
    results=pd.read_sql('SELECT * FROM crime2011',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2012")
def crime2012():
    results=pd.read_sql('SELECT * FROM crime2012',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2013")
def crime2013():
    results=pd.read_sql('SELECT * FROM crime2013',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2014")
def crime2014():
    results=pd.read_sql('SELECT * FROM crime2014',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2015")
def crime2015():
    results=pd.read_sql('SELECT * FROM crime2015',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2016")
def crime2016():
    results=pd.read_sql('SELECT * FROM crime2016',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2017")
def crime2017():
    results=pd.read_sql('SELECT * FROM crime2017',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2018")
def crime2018():
    results=pd.read_sql('SELECT * FROM crime2018',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2019")
def crime2019():
    results=pd.read_sql('SELECT * FROM crime2019',engine)
    results_json=results.to_json(orient='records')
    return results_json


if __name__ == "__main__":
    app.run(debug=True)


