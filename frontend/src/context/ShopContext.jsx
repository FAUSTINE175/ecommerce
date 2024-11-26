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
    const [checkoutDetails, setCheckoutDetails] = useState(null);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) };
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

    const checkout = (userDetails) => {
        const filteredProducts = all_product.filter((product) => cartItems[product.id] > 0);
        const orderDetails = {
            userDetails,
            items: filteredProducts.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.new_price,
                quantity: cartItems[product.id],
                total: product.new_price * cartItems[product.id],
            })),
            totalAmount: getTotalCartAmount(),
        };

        setCheckoutDetails(orderDetails);
        setCartItems(getDefaultCart());
        return orderDetails;
    };

    const contextvalue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        checkout,
        checkoutDetails,
    };

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
