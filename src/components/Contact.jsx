import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dymff36', 'template_rje4c9q', form.current, '505hBYBqvH8Fm8Iix')

    e.target.reset();

  };



  return (

    <div className="form-container">
      <form action="" onSubmit={sendEmail} ref={form}>
        <div className='tag'>Contact</div>
        <div className='container'>
          <div className="input-container">
            <input type="text" name="name" placeholder='Name' required />
          </div>
          <div className="input-container">
            <input type="email" name="email" placeholder='Email' required />
          </div>
          <div className="input-container">
            <input type="text" name="subject" placeholder='Subject' required />
          </div>
          <div className="input-container">
            <textarea name="message" cols="30" rows="10" placeholder='Your Message...' required></textarea>
          </div>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )





}

export default Contact;