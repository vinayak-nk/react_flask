from server import db

class TodoModel(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  content = db.Column(db.String(240))
  
  def __str__(self) -> str:
      return f'{self.content}, {self.id}'
