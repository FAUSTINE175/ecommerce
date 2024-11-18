import React, { useState, createContext } from "react";
import all_product from "../components/assets/all-products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let product of all_product) {
        cart[product.id] = 0; // Initialize cart with 0 quantity for each product by id
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        console.log('Adding to cart, itemId:', itemId); // Log itemId when adding to cart
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log('Updated cartItems:', updatedCart); // Log the updated cartItems state
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        console.log('Removing from cart, itemId:', itemId); // Log itemId when removing from cart
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) };
            console.log('Updated cartItems after removal:', updatedCart); // Log updated cartItems after removal
            return updatedCart;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextvalue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    console.log('Current cartItems in ShopContext:', cartItems); // Log cartItems when the provider renders

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
