import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  // Menu close karne ke liye function
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className={scroll ? "navbar active-scroll" : "navbar"}>
      <div className='nav-container'>
        <div className='logo'>
          <h1>APEX <span>GYM</span></h1>
        </div>

        {/* Desktop Menu */}
        <ul className='nav-links'>
          <li><a href="#hero">Home</a></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='nav-btns-desktop'>
          <button className='join-btn'>JOIN NOW</button>
        </div>

        {/* Hamburger Icon - Iski Z-Index zyada honi chahiye */}
        <div className='mobile-toggle' onClick={handleNav}>
          {nav ? <HiX size={30} className="close-icon" /> : <HiMenuAlt3 size={30} />}
        </div>

        {/* Mobile Sidebar */}
        <div className={nav ? 'mobile-menu open' : 'mobile-menu'}>
          <ul onClick={() => setNav(false)}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;