import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import '../../styles.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofne39e', 'template_n1apwqq', form.current, 'tKaiQJpixG1fmy_8S')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
    
   e.target.reset();
  };

  return (
    
    <section id='contact' className='contac-section'>
      <h5 className='text-light'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        
    {/* Req information Form */}
        <form ref={form} onSubmit={sendEmail}>
          <label ><h5 className='text-light'>Name</h5></label>
        <input type="text" name="user_name" placeholder='   Your Full Name' required />
          <label><h5 className='text-light'>Email</h5></label>
        <input type="email" name="user_email" placeholder='  Your Email' required />
          <label><h5 className='text-light'>Message</h5></label>
        <textarea name="message"  placeholder=' Your Message' required />
          <button type="submit" className='btn btn-primary text-light'>Send Message</button> 
      </form>
      </div>
      <a href="#foot" className='_scrollDN2'>Scroll Down</a> 
    </section>



    
    
  );
};

export default ContactUs;

