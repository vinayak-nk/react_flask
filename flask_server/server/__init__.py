from flask import Flask

app = Flask(__name__)

@app.route('/members')
def members():
  return {
    "members": ['m1', 'm2', 'm3']
  }
