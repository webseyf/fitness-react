import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerMenuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        headerMenuRef.current &&
        !headerMenuRef.current.contains(event.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <img src={Logo} className="logo" alt="Logo" />

      <button className="menu-toggle" onClick={toggleMenu} ref={menuToggleRef}>
        ☰ {/* You can replace this with an icon */}
      </button>

      <ul className={`header-menu ${menuOpen ? 'show' : ''}`} ref={headerMenuRef}>
       <a href="/"><li onClick={closeMenu}>Home</li></a> 
        <a href="#programs"><li onClick={closeMenu}>Programs</li></a>
        <a href="#why"><li onClick={closeMenu}>Why us</li></a>
        <a href="#plans"><li onClick={closeMenu}>Plans</li></a>
        <a href="#testimonial"><li onClick={closeMenu}>Testimonials</li></a>
      </ul>
    </div>
  );
};

export default Header;
