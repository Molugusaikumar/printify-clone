// src/components/SuccessStories.js
import React from 'react';
import '../styles/SuccessStories.css';

const SuccessStories = () => {
  return (
    <div className="success-stories-section">
      <div className="video-container">
        <video controls className="testimonial-video">
          <source src="https://printify.com/wp-content/uploads/2023/03/Christina-Testimonial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="story-content">
        <h2>Real people use Printify</h2>
        <p>
          “I’ve been using Printify for about two years, it allowed me to quit my job within 9 months. Now I’m in Bali being a digital nomad and working on my store.”
        </p>
        <p><strong>Christina Umerez, Toronto</strong></p>
        <p>Read more real-life stories of success</p>
        <p>Connect and start selling: Printify integrates with all the top selling platforms in the world.</p>
        <a href="#integrations" className="see-integrations">See all integrations</a>
      </div>
    </div>
  );
};

export default SuccessStories;
