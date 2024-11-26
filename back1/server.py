from flask import Flask, request, jsonify
import products_dao
import users_dao
from sql_connection import get_sql_connection
import bcrypt

app = Flask(__name__)
connection = get_sql_connection()

@app.route('/')
def home():
    return "Welcome to the Freebandz Management System API!"

# Products Endpoints
@app.route('/getproducts', methods=['GET'])
def get_products():
    products = products_dao.get_all_products(connection)
    response = jsonify(products)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# User Signup Endpoint
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    user_id = users_dao.insert_new_user(connection, data)
    return jsonify({"message": "Signup successful!", "user_id": user_id}), 201

# User Login Endpoint
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = users_dao.get_user_by_email(connection, data['email'])
    
    if user and bcrypt.checkpw(data['password'].encode('utf-8'), user[3].encode('utf-8')):  # user[3] is the password
        return jsonify({"message": "Login successful!", "user_id": user[0]}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

if __name__ == "__main__":
    print("starting python flask server for Freebandz management system")
    app.run(port=5000)