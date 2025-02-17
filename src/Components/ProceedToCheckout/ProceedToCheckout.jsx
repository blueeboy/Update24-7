import React from "react";

const ProceedToCheckout = ({ cartId, adminPhoneNumber }) => {
  const handleCheckout = () => {
    // Generate checkout link
    const checkoutLink = `https://yourwebsite.com/checkout?cartId=${cartId}`;
    
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
