import React, { useContext, useState } from 'react';
import './CheckoutItems.css';
import { ShopContext } from '../../context/ShopContext';

const Checkout = () => {
    const { getTotalCartAmount, all_product, cartItems } = useContext(ShopContext);
    const filteredProducts = all_product.filter((e) => cartItems[e.id] > 0);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderDetails = {
            userDetails,
            cartItems: filteredProducts,
            total: getTotalCartAmount(),
        };

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderDetails),
            });
            if (response.ok) {
                alert('Order placed successfully!');
            } else {
                alert('Failed to place order. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout-details">
                <div className="checkout-products">
                    <h2>Order Summary</h2>
                    <div className="checkout-products-header">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    {filteredProducts.map((e) => (
                        <div key={e.id} className="checkout-product">
                            <p>{e.name}</p>
                            <p>ksh{e.new_price}</p>
                            <p>{cartItems[e.id]}</p>
                            <p>ksh{e.new_price * cartItems[e.id]}</p>
                        </div>
                    ))}
                    <div className="checkout-total">
                        <h3>Total: ksh{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <div className="checkout-form">
                    <h2>Shipping Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={userDetails.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={userDetails.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="checkout-submit">
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
