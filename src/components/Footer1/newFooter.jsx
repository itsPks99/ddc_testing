import React from 'react';
import { FaBehance, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";

import './newFooter.css';

const NewFooter = () => {
  return (
    <footer className="newfooter-container">
      <div className="newfooter-content">
        <div className="newfooter-title-container">
          <h1 className="newfooter-title"> Delhi Digital Co </h1>
        </div>

        <div className="newfooter-nav-container">
          <div className="newfooter-social-left">
            <a href="http://facebook.com/delhidigitalco/" target="." className="newfooter-social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.behance.net/gallery/188394459/DDC-Portfolio" target="." className="newfooter-social-icon newfooter-whatsapp">
              <FaBehance />
            </a>

          </div>

          <div className="newfooter-nav">
            <a href="/privacy-policy" className="newfooter-link">Privacy Policy</a>
            <a href="/terms-of-services" className="newfooter-link">Terms of Services</a>
            <a href="/contactUs" className="newfooter-link">Contact Us</a>
            <a href="/about" className="newfooter-link">About Us</a>
          </div>

          <div className="newfooter-social-right">
            <a href="https://in.linkedin.com/company/delhidigitalco" target="." className="newfooter-social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/delhidigitalco/?hl=en" target="." className="newfooter-social-icon">
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <div className="newfooter-copyright">
          © {new Date().getFullYear()} Delhi Digital Co. | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;