# routes/auth.py
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models import User, db
import random
import string

auth_bp = Blueprint('auth', __name__)

def generate_referral_code():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    existing_user = User.query.filter_by(email=data['email']).first()
    
    if existing_user:
        return jsonify({"error": "Email already registered"}), 400
    
    new_user = User(
        username=data['username'],
        email=data['email'],
        referral_code=generate_referral_code()
    )
    new_user.set_password(data['password'])
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({
        "message": "User registered successfully",
        "referral_code": new_user.referral_code
    }), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({
            "access_token": access_token,
            "user_id": user.id
        }), 200
    
    return jsonify({"error": "Invalid credentials"}), 401
