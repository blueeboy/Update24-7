import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CartPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Retrieve cart ID and cart data from URL
  const cartId = queryParams.get("cartId");
  const cartData = queryParams.get("cart"); // Encoded cart data

  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    if (cartData) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartData));
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, [cartData]);

  return (
    <div>
      <h1>Admin Cart View</h1>
      <p>Cart ID: {cartId}</p>

      {Object.keys(cartItems).length > 0 ? (
        <ul>
          {Object.entries(cartItems).map(([productId, quantity]) => (
            <li key={productId}>
              <p>Product ID: {productId}</p>
              <p>Quantity: {quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default CartPage;
