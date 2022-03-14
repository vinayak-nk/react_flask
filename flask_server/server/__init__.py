from flask import Flask, render_template, request, redirect, url_for
from server.forms import Todo

app = Flask(__name__)
app.config['SECRET_KEY'] = 'SOME_KEY'

@app.route('/', methods=['GET', 'POST'])
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


@app.route('/todo', methods=['GET', 'POST'])
def todo():
  todo_form = Todo()
  if todo_form.validate_on_submit():
    print('======', todo_form.content.data)
    return redirect('/')
  return render_template('todo.html', form_some_name=todo_form)

@app.route('/members')
def members():
  return {
    "members": ['m1', 'm2', 'm3']
  }

@app.route('/<string:name>')
def someFn(name):
  return name
