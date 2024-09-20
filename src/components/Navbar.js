// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Printify Clone</h1>
      </div>
      <ul className="navbar-menu">
        <li>Features</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
