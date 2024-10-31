import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Logo from '../../assets/logo.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';

function Footer() {
  return (
    <footer className="footer-container">
      {/* Divider */}
      <hr className="footer-divider" />

      {/* Social Media Links */}
      <div className="footer-socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
        </a>
      </div>

      {/* Brand Logo */}
      <div className="footer-logo">
        <img src={Logo} alt="Company Logo" className="logo-icon" />
      </div>

      {/* Copyright and Links */}
      <div className="footer-links">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav>
          <a href="/" className="footer-link">Back to Home</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
