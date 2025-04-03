import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4d21d585-f696-4e9b-b902-000193ac7da6");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>I'm currently availaible to take on new projects, so feel free to message me that you want me to work on. You can contact anytime.</p>
                <div className='contact-details'>
                    <div className="contact-detail">
                        <img src={mail_icon} alt=" " /> <p>ishaanrajput05@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=" " /><p>+91- 859-526-5008</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=" " /> <p>Delhi, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type='text' placeholder='Enter your name'  name='name'/>
                <label htmlFor="">Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea placeholder='Enter your message here' name='message' id="" rows="8"></textarea>
                <button className='contact-submit' type='submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact