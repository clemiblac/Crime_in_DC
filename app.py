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


@app.route("/news")
def news_scrape():
    results=pd.read_sql('SELECT * FROM news_scrape',engine)
    results_json=results.to_json(orient='records')
    return results_json
    print(results_json)

print(news_scrape())


if __name__ == "__main__":
    app.run(debug=True)


