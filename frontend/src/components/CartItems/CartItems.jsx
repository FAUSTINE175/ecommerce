import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';


const CartItems = () => {
    const {
        getTotalCartAmount,
        all_product,
        cartItems,
        removeFromCart,
        checkoutItems,
    } = useContext(ShopContext);
    const navigate = useNavigate();
    const [proceeding, setProceeding] = useState(false);

    const filteredProducts = all_product.filter((e) => cartItems[e.id] > 0);

    const handleProceedToCheckout = () => {
        if (filteredProducts.length === 0) {
            alert("Your cart is empty. Add some items before proceeding to checkout.");
            return;
        }
        console.log("Proceeding to Checkout...");
        setProceeding(true);
        navigate('/checkoutItems'); // Navigate to the checkout page
    };

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {filteredProducts.map((e) => (
                <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.Image} alt="" className="carticon-product-icon" />
                        <p>{e.name}</p>
                        <p>ksh{e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>ksh{e.new_price * cartItems[e.id]}</p>
                        <img
                            className="cartitems-remove-icon"
                            src={remove_icon}
                            onClick={() => removeFromCart(e.id)}
                            alt=""
                        />
                    </div>
                    <hr />
                </div>
            ))}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>ksh{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>ksh{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="cartitems-referralcode">
                    <p>Have a referral code?</p>
                    <div className="cartitems-referralbox">
                        <input type="text" placeholder="Referral code" />
                        <button>APPLY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
