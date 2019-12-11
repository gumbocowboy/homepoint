import random
from flask import Flask, jsonify
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
from flask_cors import CORS, cross_origin
from days import totalDays
import weather
import hdd
import dirlist
import network

app = Flask(__name__)
CORS(app)
# @app.route('/')
# # Defining the index page and returning the index.html page with
# def index():

#     temp, status = weather.get_all()

#     grandTotal, grandUsed, grandFree = hdd.getHDD()
#     return render_template('index.html', ree=ree, temp=temp, status=status, grandTotal=grandTotal, grandUsed=grandUsed, grandFree=grandFree)

@app.route('/love')
#Requrest for LOVE widget
def api_LOVE():
    print("Love Pinged")
    days =  {'days': totalDays}
    return jsonify(days)

@app.route('/weather')
#Request for WEATHER widget
def api_WEATHER():
    print("Weather Pinged")
    temp, status = weather.get_all()
    print(temp)
    print(status)
    currentweather ={"temp":temp, "status":status}
    return jsonify(currentweather)

@app.route('/dirlist')
#This is a test
def api_DIR():
    print ("DIR pinged")
    dirnum = {'movies': dirlist.getmovies(), 'anime':dirlist.getAnime() }
    return jsonify(dirnum)
@app.route('/network')
#Request for NETWORK widget
def api_NETWORK():
    print("NETWORK pinged.")
    devices = {'devices': network.getDevices(), 'macs': network.getMacs(), 'matched': network.knownDevices()}
    return jsonify(devices)
if __name__ == '__main__':
    print ("Server should be running...")
    app.run(debug=True, host='192.168.10.104')
