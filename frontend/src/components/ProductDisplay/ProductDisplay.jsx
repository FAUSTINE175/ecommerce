import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props; // Destructure product prop correctly
    const { addToCart } = useContext(ShopContext);  // Use useContext to access addToCart function

    console.log(product); // Debugging to see the product object

    if (!product) {
        return <div>Loading...</div>;  // If product is undefined, show loading
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.Image} alt='' />
                    <img src={product.Image} alt='' />
                    <img src={product.Image} alt='' />
                    <img src={product.Image} alt='' />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.Image} alt='' />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A powerful and feature-packed smartphone that offers lightning-fast 5G connectivity and impressive performance. With its stunning display, versatile camera system, long-lasting battery, and seamless integration with the Galaxy ecosystem, it’s a device that elevates your mobile experience to the next level.
                </div>
                <div className="productdisplay-right-color">
                    <h1>Select color</h1>
                    <div className="productdisplay-right-colors">
                        <div>Black</div>
                        <div>White</div>
                        <div>Blue</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>Samsung, a33, a15, a35</p>
                <p className='productdisplay-right-category'><span>Tags :</span>modern, latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
