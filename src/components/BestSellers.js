// src/components/BestSellers.js
import React from 'react';
import '../styles/BestSellers.css';

const BestSellers = () => {
  const bestSellers = [
    { id: 1, name: 'Men\'s T-Shirt', image: 'https://printify.com/pfh/assets/products-display/t-shirt.webp' },
    { id: 2, name: 'Women\'s Sweatshirt', image: 'https://printify.com/pfh/assets/products-display/sweatshirt.webp' },
    { id: 3, name: 'Mugs', image: 'https://printify.com/pfh/assets/products-display/mug.webp' },
    { id: 4, name: 'Men\'s Hoodie', image: 'https://printify.com/pfh/assets/products-display/hoodie.webp' },
    { id: 5, name: 'Kids Clothing', image: 'https://printify.com/pfh/assets/products-display/kids-clothing.webp' },
    { id: 6, name: 'Phone Cases', image: 'https://printify.com/pfh/assets/products-display/phone-cases.webp' },
    { id: 7, name: 'Candles', image: 'https://printify.com/pfh/assets/products-display/candles.webp' },
    { id: 8, name: 'Stickers', image: 'https://printify.com/pfh/assets/products-display/stickers.webp' },
    { id: 9, name: 'Posters', image: 'https://printify.com/pfh/assets/products-display/posters.webp' },
    { id: 10, name: 'Bags', image: 'https://printify.com/pfh/assets/products-display/bag.webp' },
  ];

  return (
    <div className="bestsellers-section">
      <h2>Features</h2>
      <div className="bestsellers-scroller">
        {bestSellers.map((item) => (
          <div key={item.id} className="bestseller-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
