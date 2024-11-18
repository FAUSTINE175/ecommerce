import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Filter products to only include those in the cart
    const filteredProducts = all_product.filter((e) => cartItems[e.id] > 0);

    console.log('Filtered Products in CartItems:', filteredProducts); // Log filtered products in the cart
    console.log('Current CartItems:', cartItems); // Log the current cartItems

    return (
        <div className='cartitems'>
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
                        <img src={e.Image} alt='' className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>ksh{e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>ksh{e.new_price * cartItems[e.id]}</p>
                        <img 
                            className='cartitems-remove-icon' 
                            src={remove_icon} 
                            onClick={() => removeFromCart(e.id)} 
                            alt='' 
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
                        <div className='cartitems-total-item'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>ksh{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-referralcode">
                    <p>Have a referral code?</p>
                    <div className="cartitems-referralbox">
                        <input type='text' placeholder='Referral code' />
                        <button>APPLY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
