from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure your database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Example using SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from models import User, Product, Order

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create the tables

    app.run(debug=True)