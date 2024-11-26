# routes/referrals.py
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import User, Order, db

referrals_bp = Blueprint('referrals', __name__)

@referrals_bp.route('/track', methods=['POST'])
@jwt_required()
def track_referral():
    current_user_id = get_jwt_identity()
    data = request.json
    referral_code = data.get('referral_code')
    
    referrer = User.query.filter_by(referral_code=referral_code).first()
    
    if not referrer or referrer.id == current_user_id:
        return jsonify({"error": "Invalid referral code"}), 400
    
    return jsonify({"message": "Referral tracked successfully"}), 200
