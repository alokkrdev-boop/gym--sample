import React from 'react';
import './gallery.css';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800', 
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800', 
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800', 
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800', 
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800', 
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800', 
  ];

  return (
    <div className='gallery-container' id="gallery"> {/* ID added here */}
      <div className='gallery-header'>
        <p>OUR FACILITY</p>
        <h2>GYM <span>GALLERY</span></h2>
      </div>
      
      <div className='gallery-grid'>
        {images.map((img, index) => (
          <div className='gallery-item' key={index}>
            <img src={img} alt={`Gym Gear ${index}`} />
            <div className='gallery-overlay'>
              <span>APEX VIEW</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;