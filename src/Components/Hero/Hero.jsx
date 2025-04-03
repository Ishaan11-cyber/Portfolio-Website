import React from 'react'
import './Hero.css'
import profileImage from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileImage} alt='profile'/>
        <h1><span>I am Ishaan Rajput,</span> Frontend Developer based in India</h1>
        <p>I am Frontend Developer based in Delhi, India. I am currently pursuing my Master's  in Computer Applications</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</ AnchorLink></div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero