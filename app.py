#import flask
from flask import (
    Flask,
    render_template,
    jsonify,
    redirect,
    request)

from flask_caching import Cache

cache_config = {
    "DEBUG": True,          # some Flask specific configs
    "CACHE_TYPE": "simple", # Flask-Caching related configs
    "CACHE_DEFAULT_TIMEOUT": 18000
}

# importing necessary libraries
import pandas as pd
import json
from datetime import datetime

#Importing sqlalchemy requirements
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import pymysql 
pymysql.install_as_MySQLdb()

import os
is_heroku = False
if 'IS_HEROKU' in os.environ:
    is_heroku = True


API_KEY=os.environ['API_KEY']
census_api=os.environ['census_api']
database=os.environ['database']
geocode_key=os.environ['geocode_key']
host=os.environ['host']
port=os.environ['port']
username=os.environ['username']
password=os.environ['password']
# #Database setup
# from config import (
# username,
# password,
# host,
# database
# )


#Deep Learning requirements
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

import pymysql
pymysql.install_as_MySQLdb()

engine = create_engine(f"mysql://{username}:{password}@{host}/{database}",echo = True)





# tell Flask to use the above defined config

app=Flask(__name__)

app.config.from_mapping(cache_config)
cache = Cache(app)

@app.route("/")
@cache.cached(timeout=18000)
def home():
    return render_template("index.html")

@app.route("/machine-learning")
@cache.cached(timeout=18000)
def machine():
    return render_template("machine_learning.html")
    

@app.route("/about")
@cache.cached(timeout=18000)
def about():
    return render_template("about.html")

##############   Data Routes  ######################
@app.route("/news")
@cache.cached(timeout=18000)
def news_scrape():
    results=pd.read_sql('SELECT * FROM news_scrape',engine)
    results_json=results.to_json(orient='records')
    return results_json


@app.route("/census")
@cache.cached(timeout=18000)
def census():
    results=pd.read_sql('SELECT * FROM census',engine)
    results_json=results.to_json(orient='records')
    return results_json


@app.route("/crime2010")
@cache.cached(timeout=18000)
def crime2010():
    results=pd.read_sql('SELECT * FROM crime2010',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2011")
@cache.cached(timeout=18000)
def crime2011():
    results=pd.read_sql('SELECT * FROM crime2011',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2012")
@cache.cached(timeout=18000)
def crime2012():
    results=pd.read_sql('SELECT * FROM crime2012',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2013")
@cache.cached(timeout=18000)
def crime2013():
    results=pd.read_sql('SELECT * FROM crime2013',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2014")
@cache.cached(timeout=18000)
def crime2014():
    results=pd.read_sql('SELECT * FROM crime2014',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2015")
@cache.cached(timeout=18000)
def crime2015():
    results=pd.read_sql('SELECT * FROM crime2015',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2016")
@cache.cached(timeout=18000)
def crime2016():
    results=pd.read_sql('SELECT * FROM crime2016',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2017")
@cache.cached(timeout=18000)
def crime2017():
    results=pd.read_sql('SELECT * FROM crime2017',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2018")
@cache.cached(timeout=18000)
def crime2018():
    results=pd.read_sql('SELECT * FROM crime2018',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/crime2019")
def crime2019():
    results=pd.read_sql('SELECT * FROM crime2019',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/police")
@cache.cached(timeout=18000)
def police():
    results=pd.read_sql('SELECT * FROM dc_police',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/grocery")
@cache.cached(timeout=18000)
def grocery():
    results=pd.read_sql('SELECT * FROM dc_grocery',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/pubschool")
@cache.cached(timeout=18000)
def pubschool():
    results=pd.read_sql('SELECT * FROM dc_pub_schools',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/prischool")
@cache.cached(timeout=18000)
def prischool():
    results=pd.read_sql('SELECT * FROM dc_pri_schools',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/unemployment")
@cache.cached(timeout=18000)
def unemployment():
    results=pd.read_sql('SELECT * FROM unemployment',engine)
    results_json=results.to_json(orient='records')
    return results_json

@app.route("/ml", methods=["GET", "POST"])
def ml():

    ward = request.args.get("ward")
    time = request.args.get("time")
    year = request.args.get("year")
    month = request.args.get("month")
    day = request.args.get("day")
    print(f"ward: {ward} | time {time} | year {year} | month {month} | day {day}")
    print(ward)


    results=pd.read_sql('SELECT * FROM crime_ML',engine)

    from sklearn.model_selection import train_test_split
    from sklearn.neighbors import KNeighborsClassifier
    from sklearn.preprocessing import StandardScaler

    X_train, X_test, y_train, y_test = train_test_split(results[['WARD','Y','M','D','t']], results['OFFENSE'], random_state=42)
    #X_scaler = StandardScaler().fit(X_train)
    #X_train_scaled = X_scaler.transform(X_train)
    #X_test_scaled = X_scaler.transform(X_test)
    
    #for k in range(1, 20, 2):
        
    #    knn = KNeighborsClassifier(n_neighbors=k)
        
    #    knn.fit(X_train_scaled, y_train)

    knn = KNeighborsClassifier(n_neighbors=19)
    knn.fit(X_train, y_train)
    
 #####################################################################


    time = pd.to_datetime(time)
    timeTransf=time.timestamp()
 #####################################################################  
    prediction=knn.predict([[ward,year,month,day,timeTransf]])

    print("--- printing prediction here ---")
    print(prediction)

    prediction_dict = {
        'CrimeType': prediction[0]
    }

    return jsonify(prediction_dict)




if __name__ == "__main__":
    app.run(debug=True)


