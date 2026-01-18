import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "The vibe of APEX GYM is incredible. The trainers are helpful and the black aesthetic is just fire!",
      level: "Member for 6 Months"
    },
    {
      name: "Sanya Malhotra",
      text: "Best gym in the locality for females. Very safe environment and top-notch equipment.",
      level: "Member for 1 Year"
    },
    {
      name: "Amit Verma",
      text: "Transformation results are real here. If you want to get serious about fitness, join APEX.",
      level: "Member for 3 Months"
    }
  ];

  return (
    <div className='test-container'>
      <div className='test-header'>
        <p>REVIEWS</p>
        <h2>WHAT THEY <span>SAY</span></h2>
      </div>

      <div className='test-grid'>
        {reviews.map((rev, index) => (
          <div className='test-card' key={index}>
            <FaQuoteLeft className='quote-icon' />
            <div className='stars'>
              {[...Array(5)].map((_, i) => <FaStar key={i} color='#ff3131' />)}
            </div>
            <p className='test-text'>"{rev.text}"</p>
            <div className='test-footer'>
              <h4>{rev.name}</h4>
              <small>{rev.level}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;