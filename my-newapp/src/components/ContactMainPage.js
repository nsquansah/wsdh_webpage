import React, { useState } from 'react';
import styles from '../styles/ContactMainPage.css';
import contactpagepic2 from '../images/contactus2.jpg';
import Footer from './Footer';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, message });
  };

  return (
    <div className='all'>


      <div className="contactForm">
        <div className="leftContent">
          <form onSubmit={handleSubmit}>

            <div className="formGroup">
              <label htmlFor="fullName" className="name">Full Name</label>
              <div className="inputContainer">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input"
                />
                <hr className="hr" />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="email" className="email">Email</label>
              <div className="inputContainer">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
                <hr className="hr" />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="message" className="message">Message</label>
              <div className="inputContainer">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input"
                ></textarea>
                <hr className="hr" />
              </div>
            </div>

              <button type="submit" className="submitButton">Submit</button>  
          </form>
        </div>

        <div className="rightContent">
          <p className="righttext1">Based in Ghana, Tamale</p>
          <p className="righttext2">Phone: +233 506478338</p>
          <p className="righttext3">wellskillsdevelopmenthub@gmail.com</p>

          

        </div>
      </div>

      <div className="imageContainer">
        <img src={contactpagepic2} alt="contact" className="image" />
      </div>

      

      <div className="Footer">
        <Footer />
      </div>

    </div>
  );
};

export default ContactPage;