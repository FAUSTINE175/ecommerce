import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'; // Adjust this import based on your context file location
import CartItems from '../components/CartItems/CartItems'; // Adjust this import based on your file structure
import './CSS/cart.css';

const Cart = () => {
    const { cartItems, all_product } = useContext(ShopContext); // Access cart items from context
    const [proceeding, setProceeding] = useState(false);
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        if (Object.keys(cartItems).length === 0) { // Check if cartItems is empty
            alert("Your cart is empty. Add some items before proceeding to checkout.");
            return;
        }
        setProceeding(true);
        navigate('/checkout'); // Navigate to the checkout page
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {/* Render Cart Items directly using cartItems */}
            <CartItems /> {/* Assuming CartItems handles displaying the items based on context */}
            <div className="cartitems-total">
            <button onClick={handleProceedToCheckout} disabled={proceeding}>
                Proceed to Checkout
            </button>
            </div>
        </div>
    );
};

export default Cart;