import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      {/* LEFT SECTION */}
      <div className="footer-left">
        <Logo />
      </div>

      {/* MIDDLE SECTION */}
      <div className="footer-middle">
        <h3 className="footer-title">Well Skills Development Hub</h3>
        <p>
          We believe skills are the foundation of transformation. From digital expertise and creative problem-solving to leadership and strategic thinking, we bring together technical know-how and real-world experience to deliver meaningful solutions. Our focus is on innovation, excellence, and impact, ensuring every project we undertake drives value and creates opportunities.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="footer-right">
        <h3 className="contactus">Contact Us</h3>
        <p className="email"><MdEmail /><a className="wellskills" href="mailto:wellskillsdevelopmenthub@gmail.com"> wellskillsdevelopmenthub@gmail.com</a></p>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaTiktok /></a>
        </div>
        <p className="address">Tamale, Ghana</p>
      </div>
    </footer>
  );
};

export default Footer;
