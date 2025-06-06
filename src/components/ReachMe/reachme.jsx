import React, { useRef } from 'react';
import './style.css';
import IG from '../../assets/Instagram.svg';
import LinkedIn from '../../assets/LinkedIN.svg';
import Git from '../../assets/Github2.svg';
import emailjs from '@emailjs/browser';

const Reachme = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wytsm9m", "template_7ac21j4", form.current, {
        publicKey: "V7_904iijo0H6k3Du",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          // Reset the form after successful submission
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, Please try again!",error.text);
        }
      );
  };
  return (
    <div className='reachMe'>
     <h1 className='reachMeTitle'>Reach Me</h1>
     <span className='reachMeSpan'>Please fill out the form below to discuss about any work opportunities.</span>
     <form className='reachMeForm' ref={form} onSubmit={sendEmail}>
        <input className='name' placeholder='Your Name' type="text" name='your_name'></input>
        <input className='email' placeholder='Your Email' type="email" name='your_email'></input>
        <textarea className='msg' placeholder='Your Message' name="message" rows='5'></textarea>
        <button className='reachMeBtn' type="submit" value="send">Submit</button>
     </form>
     <div className='socialLink'>
            <a href='https://www.linkedin.com/in/ahamed-harish-othman-5ba25b21b' target='_blank' rel='noopener noreferrer'><img className='linkedIn' src={LinkedIn} alt='linkedin logo'/></a>
            <a href='https://github.com/AhamedHarish' target="_blank"><img className='git' src={Git} alt='github logo'/></a>
            <a href='https://www.instagram.com/ah.harishhh?igsh=MxJpYmkzZHM5NTBjZA==' target="_blank"><img className='insta' src={IG} alt='instagram logo'/></a>
     </div>
    </div>
  )
};

export default Reachme