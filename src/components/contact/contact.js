import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import './contact.css';

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
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        
    {/* Req information Form */}
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
        <input type="text" name="user_name" placeholder='   Your Full Name' required />
      <label>Email</label>
        <input type="email" name="user_email" placeholder='  Your Email' required />
      <label>Message</label>
        <textarea name="message"  placeholder=' Your Message' required />
      <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
    
  );
};

export default ContactUs;

