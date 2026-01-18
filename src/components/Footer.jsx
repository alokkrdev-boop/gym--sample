import React from 'react';
import './Footer.css'; // CSS file ko import kiya
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <h2 className='footer-logo'>APEX <span>GYM</span></h2>
        
        <div className='footer-socials'>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        
        <div className='footer-links'>
          <p>© 2026 APEX GYM. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;