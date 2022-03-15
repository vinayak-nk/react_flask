from flask import Flask, render_template, request, redirect, url_for, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from server.forms import Todo

app = Flask(__name__)
app.config['SECRET_KEY'] = 'SOME_KEY'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tmp/test.db'
db = SQLAlchemy(app)
# db.create_all()

from server.models import TodoModel
from server.routes import init_app_route
init_app_route(app)






# flask templates
@app.route('/', methods=['GET', 'POST'])
def hello_wolrd():
  todo_table_data = TodoModel.query.all()
  if request.method == 'POST':
    print('---------------')
    print(request.form)
    print('---------------')
    fname = request.form['fname']
    lname = request.form['lname']
    return redirect(url_for('name', fname=fname))
  
  return render_template('hello.html', names_list = ['x', 'y', 'z'], request_method=request.method, todo_table_data=todo_table_data)


@app.route('/name/<string:fname>')
def name(fname):
  return fname


@app.route('/todo', methods=['GET', 'POST'])
def todo():
  todo_form = Todo()
  if todo_form.validate_on_submit():
    print('======', todo_form.content.data)
    instance = TodoModel(content=todo_form.content.data)
    db.session.add(instance)
    db.session.commit() 
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
