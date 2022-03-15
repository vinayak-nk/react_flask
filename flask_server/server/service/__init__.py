from flask import jsonify, request, json
from server import db
from server.models import TodoModel

def todo_serializer(todo):
  return {
    'id': todo.id,
    'content': todo.content,
  }

# get all data
def index():
  return jsonify(list(map(todo_serializer, TodoModel.query.all())))

# get data based on id
def show_todo(id):
  return jsonify(list(map(todo_serializer, TodoModel.query.filter_by(id=id))))

# add data
def create():
  request_data = json.loads(request.data)
  table_instance = TodoModel(content=request_data['content'])
  
  db.session.add(table_instance)
  db.session.commit()
  
  return {'201': 'todo created successfully'} 

# delete data on id
def delete_data(id):
  # request_data = json.loads(request.data)
  TodoModel.query.filter_by(id=int(id)).delete()
  db.session.commit()
  
  return {'204': 'todo deleted successfully'}
