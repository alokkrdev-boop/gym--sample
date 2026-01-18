import React from 'react';
import './contact.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-container' id="contact"> {/* ID added here */}
      <div className='contact-header'>
        <p>GET IN TOUCH</p>
        <h2>VISIT <span>US</span></h2>
      </div>

      <div className='contact-wrapper'>
        <div className='contact-info'>
          <div className='info-item'>
            <FaMapMarkerAlt className='info-icon' />
            <div>
              <h3>Location</h3>
              <p>123 Fitness Street, Near cyber cell, Your City</p>
            </div>
          </div>

          <div className='info-item'>
            <FaPhoneAlt className='info-icon' />
            <div>
              <h3>Call Us</h3>
              <p>+91 99999 99999</p>
            </div>
          </div>

          <div className='info-item'>
            <FaClock className='info-icon' />
            <div>
              <h3>Timing</h3>
              <p>Mon - Sat: 6:00 AM - 10:00 PM</p>
              <p>Sunday: 8:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>

        <div className='contact-map'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620649363!2d77.22732107550005!3d28.61291197567491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x7179713aa8144ad5!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1705550000000!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;