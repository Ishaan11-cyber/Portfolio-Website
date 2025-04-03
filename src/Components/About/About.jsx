import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt=" " />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt='' />
            </div>
            <div className='about-right'>
                <div className='about-par'>
                    <p>I am an Front-End Developer with good hands on experiece in making User Interfaces usiing React JS</p>
                    <p>My passion for front end development is not only refelected in my extensive experience but also the enthusiasm and dedication i bring to each project.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    <div className='about-skill'><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>JAVA</p><hr style={{width:"60%"}} /></div>
                    <div className='about-skill'><p>MySQL</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>3+</h1>
                    <p>Years Experience</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>5+</h1>
                    <p>Happy Clients</p>
                </div>
             
            </div>
    </div>
  )
}

export default About;