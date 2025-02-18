import React, { createContext, useState, useEffect } from 'react'
import all_products from '../Components/Assets/all_products'


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_products.forEach(product => {
        cart[product.id] = 0; // Initialize cart using product IDs
    });
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId)=> {
        setCartItems((prev)=>({
            ...prev,
            [itemId]: prev[itemId]+1
        })); 
    } 
   
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(prev[itemId] - 1, 0) // Prevent negative values
        }));
    } 

    const getTotalCartAmount = () => {
        return Object.entries(cartItems).reduce((total, [id, quantity]) => {
            const itemInfo = all_products.find(product => product.id === Number(id));
            return itemInfo ? total + itemInfo.new_price * quantity : total;
        }, 0);
    }

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };

    useEffect(() => {
        console.log("Updated Cart Items:", cartItems);
    }, [cartItems]);

    
  

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};
   
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider
