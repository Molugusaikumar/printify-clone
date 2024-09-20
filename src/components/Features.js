// src/components/Features.js
import React from 'react';
import '../styles/Features.css';


const Features = () => {
  return (
    <div className="features-section">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Easy Setup</h3>
          <p>Get started with your custom products in minutes.</p>
        </div>
        <div className="feature-card">
          <h3>Global Reach</h3>
          <p>Sell your products to customers worldwide.</p>
        </div>
        <div className="feature-card">
          <h3>Custom Designs</h3>
          <p>Create unique designs for your products with our tools.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
