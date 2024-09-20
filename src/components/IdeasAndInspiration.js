// src/components/IdeasAndInspiration.js
import React from 'react';
import '../styles//IdeasAndInspiration.css';

const IdeasAndInspiration = () => {
  const ideasPhotos = [
    { id: 1, image: 'https://printify.com/pfh/assets/products-display/grid-image-1.webp', description: 'Creative Mugs' },
    { id: 2, image: 'https://printify.com/pfh/assets/products-display/grid-image-2.webp', description: 'Custom T-shirts' },
    { id: 3, image: 'https://printify.com/pfh/assets/products-display/grid-image-3.webp', description: 'Personalized Gifts' },
    { id: 4, image: 'https://printify.com/pfh/assets/products-display/grid-image-4.webp', description: 'Print Posters' },
  ];

  return (
    <div className="ideas-section">
      <h2>Ideas and Inspiration</h2>
      <div className="ideas-grid">
        {ideasPhotos.map((item) => (
          <div key={item.id} className="idea-item">
            <img src={item.image} alt={item.description} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeasAndInspiration;
