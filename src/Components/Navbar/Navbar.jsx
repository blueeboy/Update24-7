import React, {useContext, useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';  
import search_icon from '../Assets/search.png';
import cancel_icon from '../Assets/cancel.png';
import cart_icon from '../Assets/cart.png';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <h1>Update247</h1>
        </div>
        <div className='nav-menu'>
            <ul>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/'>Shop </Link>{menu==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration: 'none', color: '#626262'}} to='/mens'>Men</Link>  {menu==="mens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/womens'>Women</Link> {menu==="womens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/kids'>Kids</Link> {menu==="kids"?<hr />:<></>}</li>
            </ul>
        </div>
        <div className='nav-search'>
            <div className='search-container'>
                <img src={search_icon} alt=''   className='search'/>
                <input placeholder='search...'></input>
                <img src={cancel_icon} alt=''   className='cancel'/>
            </div>
            <div className='nav-cart'>
                <Link to='/Cart'><img src={cart_icon} alt='' /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
      
    </div>
  )
}




export default Navbar
