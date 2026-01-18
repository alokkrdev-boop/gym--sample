import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  // Aapka WhatsApp number (Country code ke saath, bina '+')
  const phoneNumber = "919204781140"; 
  
  // Aapka chosen message jo WhatsApp par auto-type ho jayega
  const message = "Hey%20APEX%20GYM!%20I’m%20ready%20to%20start%20my%20fitness%20journey.%20I%20saw%20your%20website%20and%20I’m%20interested%20in%20joining.%20Please%20share%20the%20membership%20details!%20🏋️‍♂️";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className='hero' id="hero">
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <p className='hero-sub'>FORGING ELITE ATHLETES</p>
        <h1 className='hero-main'>APEX <span>GYM</span></h1>
        
        <div className='hero-btns'>
          {/* WhatsApp Button */}
          <a 
            href={whatsappURL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='btn-wa'
          >
            <FaWhatsapp size={22} /> WHATSAPP US
          </a>
          
          {/* Scroll to Offers Button */}
          <a href="#offers" className='btn-sec'>
            OUR PLANS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;