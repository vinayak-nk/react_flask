from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/xyz', methods=['GET', 'POST'])
def hello_wolrd():
  
  if request.method == 'POST':
    print('---------------')
    print(request.form)
    print('---------------')
    fname = request.form['fname']
    lname = request.form['lname']
    return redirect(url_for('name', fname=fname))
  
  return render_template('hello.html', names_list = ['x', 'y', 'z'], request_method=request.method)


@app.route('/name/<string:fname>')
def name(fname):
  return fname

@app.route('/members')
def members():
  return {
    "members": ['m1', 'm2', 'm3']
  }

@app.route('/<string:name>')
def someFn(name):
  return name
