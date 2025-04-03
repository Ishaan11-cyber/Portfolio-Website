import React, { useState } from 'react'
import './Navbar.css'
import logoPng from '../../assets/ishaan-logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu]= useState('home');
  return (
    <div className='navbar'>
        <img src={logoPng} alt='logo' />
        <img src={menu_open} alt=" " className='nav-mob-open' />
        <ul className='nav-menu'>
          <img src={menu_close} alt=" " className='nav-mob-close' />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu('home')}>Home</p>{menu==='home' ? <img src={underline} alt=" "/> : <></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About</p>{menu==='about' ? <img src={underline} alt=" "/> : <></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p>{menu==='services' ? <img src={underline} alt=" "/> : <></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={()=>setMenu('portfolio')}>Portfolio</p>{menu==='portfolio' ? <img src={underline} alt=" "/> : <></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p>{menu==='contact' ? <img src={underline} alt=" "/> : <></>}</AnchorLink></li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar