// src/components/AsSeenIn.js
import React from 'react';
import '../styles/AsSeenIn.css';

const AsSeenIn = () => {
  return (
    <div className="as-seen-in-section">
      <h2>As Seen In:</h2>
      <div className="logos-container">
        <img src="https://printify.com/pfh/assets/publishers/business-insider.svg" alt="Business Insider" />
        <img src="https://printify.com/pfh/assets/publishers/daily-mail.webp" alt="Daily Mail" />
        <img src="https://printify.com/pfh/assets/publishers/entrepreneur.webp" alt="Entrepreneur" />
        <img src="https://printify.com/pfh/assets/publishers/cnbc.webp" alt="CNBC" />
        <img src="https://printify.com/pfh/assets/publishers/forbes.webp" alt="Forbes" />
      </div>
    </div>
  );
};

export default AsSeenIn;
