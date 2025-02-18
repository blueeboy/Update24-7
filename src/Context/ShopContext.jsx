import React, { createContext, useState, useEffect } from 'react'
import all_products from '../Components/Assets/all_products'


export const ShopContext = createContext(null);

const getDefaultCart = ()=> {
    let cart = {};
    for (let index = 1; index <= all_products.length; index++) { // Start from 1
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) 
    } 
   
    const removeFromCart = (itemId)=> {
        if (cartItems[itemId] > 0) {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
    } 

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find(product=>product.id===Number(item))
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }  
        }
        return totalAmount;
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
