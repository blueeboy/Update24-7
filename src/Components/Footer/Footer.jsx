import React from 'react'
import './Footer.css'
import instagram_image from '../Assets/instagram_img.png'
import whatsapp_image from '../Assets/whatsapp_img.png'
import twitter_image from '../Assets/twitter_img.png'
import facebook_image from '../Assets/facebook_img.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <h1>Update247</h1>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icons'>
                <img src={instagram_image} alt='' />
                <img src={whatsapp_image} alt='' />
                <img src={twitter_image} alt='' />
                <img src={facebook_image} alt='' />
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}




export default Footer
