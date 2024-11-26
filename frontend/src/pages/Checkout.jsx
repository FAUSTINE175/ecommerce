import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './CheckoutItems.css'; // Ensure this CSS file styles the layout appropriately

const Checkout = () => {
    const { cartItems, all_product, getTotalCartAmount } = useContext(ShopContext);

    // Filter the products based on the items in the cart
    const filteredProducts = all_product.filter((product) => cartItems[product.id] > 0);

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <div className="order-summary">
                <h3>Order Summary</h3>
                {filteredProducts.map((product) => (
                    <div key={product.id} className="order-item">
                        <img src={product.Image} alt={product.name} className="product-image" />
                        <div>
                            <p>{product.name}</p>
                            <p>Quantity: {cartItems[product.id]}</p>
                            <p>Total: ksh{product.new_price * cartItems[product.id]}</p>
                        </div>
                    </div>
                ))}
                <div className="totals">
                    <p>Subtotal: ksh{getTotalCartAmount()}</p>
                    <p>Shipping: Free</p>
                    <hr />
                    <p><strong>Total: ksh{getTotalCartAmount()}</strong></p>
                </div>
            </div>

            <div className="customer-info">
                <h3>Shipping Information</h3>
                <form>
                    <input type="text" placeholder="Full Name" required />
                    <input type="text" placeholder="Address" required />
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="Phone Number" required />
                    <input type="email" placeholder="Email Address" required />
                </form>
            </div>

            <div className="payment-info">
                <h3>Payment Method</h3>
                <form>
                    <input type="text" placeholder="Card Number" required />
                    <input type="text" placeholder="Expiry Date" required />
                    <input type="text" placeholder="CVV" required />
                </form>
            </div>

            <button className="place-order-btn">Place Order</button>
        </div>
    );
};

export default Checkout;
