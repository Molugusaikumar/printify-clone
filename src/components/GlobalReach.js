// src/components/GlobalReach.js
import React from 'react';
import '../styles/GlobalReach.css';

const GlobalReach = () => {
  const subscribers = [
    {
      name: "Christina Umerez",
      location: "Toronto",
      description: "I’ve been using Printify for about two years; it allowed me to quit my job within 9 months. Now I’m in Bali being a digital nomad and working on my store.",
      photo: "https://printify.com/pfh/assets/resources/rockstars.webp"
    },
    {
      name: "John Doe",
      location: "New York",
      description: "With Printify, I scaled my online shop to a full-time income. The integration with eCommerce platforms made it easy!",
      photo: "https://printify.com/pfh/assets/resources/youtube.webp"
    },
    {
      name: "Sara Smith",
      location: "London",
      description: "I started my side hustle with Printify and now it's my main source of income. It has changed my life!",
      photo: "https://printify.com/pfh/assets/resources/amplified.webp"
    },
    {
      name: "Mike Johnson",
      location: "Sydney",
      description: "Thanks to Printify, I can manage my online store from anywhere and earn money while traveling.",
      photo: "https://printify.com/pfh/assets/resources/printing-profits.webp"
    },
    {
      name: "Emma Brown",
      location: "Berlin",
      description: "Printify has been essential in growing my brand. Their product range is fantastic!",
      photo: "https://printify.com/pfh/assets/resources/mentorship.webp"
    },
    {
      name: "Sophia Taylor",
      location: "Toronto",
      description: "I love how easy Printify makes it to sell unique products. It’s a great way to earn passive income.",
      photo: "https://printify.com/pfh/assets/resources/learning.webp"
    }
  ];

  return (
    <div className="global-reach-section">
      <h2>About us</h2>
      <div className="subscribers-container">
        {subscribers.map((subscriber, index) => (
          <div className="subscriber" key={index}>
            <img src={subscriber.photo} alt={subscriber.name} />
            <h3>{subscriber.name}</h3>
            <p>{subscriber.location}</p>
            <p>{subscriber.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalReach;
