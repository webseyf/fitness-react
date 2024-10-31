import React, { useState } from 'react';
import './Subscribe.css';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      setSubmitted(true);
      // You could add backend communication here if needed
    }
  };

  return (
    <div className="subscribe-container">
    <div className="programs-header">
        <span className='stroke-text' >READY TO LEVEL </span><span>UP WITH US?</span>
        
        </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="email-input" // Assign this if additional styling is needed
          />
          <button type="submit" className="subscribe-button">Join Now</button>
          {error && <span className="error-message">{error}</span>}
        </form>
      ) : (
        <p className="success-message">Thank you for subscribing! 🎉</p>
      )}
    </div>
  );
}

export default Subscribe;
