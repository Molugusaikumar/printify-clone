// src/components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay muted loop>
        <source src="https://printify.com/pfh/assets/steps/select.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
};

export default HeroSection;
