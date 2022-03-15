from flask import Blueprint
from server.service import index, show_todo, create, delete_data

my_app = Blueprint('my_app', __name__, template_folder='templates')

my_app.route('/api', methods=['GET'])(index)
my_app.route('/api/<int:id>', methods=['GET'])(show_todo)
my_app.route('/api/create', methods=['POST'])(create)
my_app.route('/api/<int:id>', methods=['DELETE'])(delete_data)
