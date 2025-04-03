import React from 'react'
// import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import logoPng from '../../assets/ishaan-logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img src={logoPng} alt=" " />
                    <p>I am Frontend Developer based in Delhi, India. I am currently pursuing my Master's in Computer Applications</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <img src={user_icon} alt=" " />
                        <input type='email' placeholder='Enter your email address' />
                    </div>
                    <div className='footer-subscribe'>
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>

                <p className='footer-bottom-left'>© 2023 All rights reserved</p>

                <div className='footer-bottom-right'>
                    <p>Terms of Services</p>
                    <p>Privicy Policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </div>  
        )
}

            
export default Footer;