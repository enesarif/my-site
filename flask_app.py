
# A very simple Flask Hello World app for you to get started with...

import time

from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello world!'


@app.route('/time')
def get_current_time():
    return {'time': time.time()}
