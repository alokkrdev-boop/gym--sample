// offers.jsx
import React from 'react';
import './offers.css';
import { FaCheckCircle } from 'react-icons/fa';

const Offers = () => {
  const plans = [
    { name: 'SILVER', price: '1,499', color: '#ccc' },
    { name: 'GOLD', price: '2,999', color: '#ff3131' },
    { name: 'PLATINUM', price: '4,999', color: '#ffd700' }
  ];
  return (
    <section className='offers' id="offers">
      <div className='offers-head'>
        <p>PRICING</p>
        <h2>CHOOSE <span>PLAN</span></h2>
      </div>
      <div className='offers-grid'>
        {plans.map((p, i) => (
          <div className='card' key={i} style={{borderTop: `4px solid ${p.color}`}}>
            <h3>{p.name}</h3>
            <div className='price'>₹{p.price}<span>/mo</span></div>
            <ul className='features'>
              <li><FaCheckCircle /> All Machines Access</li>
              <li><FaCheckCircle /> Locker Room</li>
              <li><FaCheckCircle /> Free Training</li>
            </ul>
            <button className='plan-btn'>GET STARTED</button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Offers;