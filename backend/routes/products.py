# routes/products.py
from flask import Blueprint, jsonify
from models import Product

products_bp = Blueprint('products', __name__)

@products_bp.route('/', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'description': p.description,
        'price': p.price,
        'stock': p.stock,
        'image_url': p.image_url
    } for p in products])