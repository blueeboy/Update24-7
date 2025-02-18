import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProceedToCheckout = ({ cartId, adminPhoneNumber }) => {
  const { cartItems } = useContext(ShopContext);
  const handleCheckout = () => {

    const filteredCart = Object.fromEntries(
      Object.entries(cartItems).filter(([_, quantity]) => quantity > 0)
    );
    
   // Convert cart items to a JSON string and encode it for URL
  const encodedCart = encodeURIComponent(JSON.stringify(cartItems));
    // Generate checkout link
    const checkoutLink = `https://blueeboy.github.io/Update24-7/#/Cart?cartId=${cartId}&cart=${encodedCart}`;
    
    // Encode message for WhatsApp
    const message = encodeURIComponent(`Hello, I want to place an order. Click here to view my cart: ${checkoutLink}`);
    
    // WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminPhoneNumber}&text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button onClick={handleCheckout} className="checkout-button">
      PROCEED TO CHECKOUT
    </button>
  );
};

export default ProceedToCheckout;
