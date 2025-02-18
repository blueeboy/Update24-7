import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const CartPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Retrieve cart ID and cart data from URL
  const cartId = queryParams.get("cartId");
  const cartData = queryParams.get("cart"); // Encoded cart data

  const { all_products } = useContext(ShopContext); // Get product details
  const [cartItems, setCartItems] = useState({}); // Store parsed cart data
  const [cartProducts, setCartProducts] = useState([]); // Store product details


  useEffect(() => {
    if (cartData && all_products.length > 0) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartData));
        setCartItems(parsedCart);

         // Map cart items to product details
         const selectedProducts = all_products
         .filter(product => parsedCart[product.id] > 0) // Only include selected products
         .map((product) => ({
           ...product,
           quantity: parsedCart[product.id], // Add quantity from cart
         }));

       setCartProducts(selectedProducts);
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, [cartData, all_products]); // Re-run effect when cart data changes or products update

  return (
    <div>
      <h1>Admin Cart View</h1>
      <p>Cart ID: {cartId}</p>

      {cartProducts.length > 0 ? (
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} width="50" />
              <p>{product.name}</p>
              <p>Price: ${product.new_price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.new_price * product.quantity}</p>
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
