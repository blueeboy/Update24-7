import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cancel.png'
import ProceedToCheckout from '../ProceedToCheckout/ProceedToCheckout'; 

const CartItems = () => {

const {getTotalCartAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext);

  // Generate a unique cart ID (You can use user ID or session ID for real implementation)
  const cartId = "cart_" + new Date().getTime(); // Example: cart_1700000000000
  const adminPhoneNumber = "+2349037239967"; // Replace with the actual admin's WhatsApp number




  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                            <div className='cartitems-format cartitems-format-main '>
                                <img src={e.image}  className='carticon-product-icon' alt=''/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' />
                            </div>
                            <hr/>
                        </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>


                
                <ProceedToCheckout cartId={cartId} adminPhoneNumber={adminPhoneNumber} />
                
            </div>
        </div>
    </div>
  )
}


export default CartItems
