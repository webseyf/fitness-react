import React, { useState } from 'react';
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Testimonial.css"
function Testimonials() {
  const [selected, setSelected] = useState(0);

  // Navigation function
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setSelected((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    } else if (direction === 'right') {
      setSelected((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="testimonials-container" id='testimonial'>
      {/* Left section with text content */}
      <div className="testimonial-left">
        <h2>Testimonials</h2>
        
        <div className="programs-header">
        <span className='stroke-text' >WHAT THEY</span>
        <span >SAY ABOUT US</span>
        </div>
      
        <p className="testimonial-text">
          "{testimonialsData[selected].review}"
        </p>
        <div className="testimonial-author">
          <span className="author-name">{testimonialsData[selected].name}</span>
          <span className="author-status">{testimonialsData[selected].status}</span>
        </div>
      </div>

      {/* Right section with image and arrows */}
      <div className="testimonial-right">
        <img
          src={testimonialsData[selected].image}
          alt={testimonialsData[selected].name}
          className="testimonial-image"
        />
        <div className="testimonial-arrows">
          <img
            src={leftArrow}
            alt="Previous testimonial"
            className="arrow left-arrow"
            onClick={() => handleArrowClick('left')}
          />
          <img
            src={rightArrow}
            alt="Next testimonial"
            className="arrow right-arrow"
            onClick={() => handleArrowClick('right')}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
