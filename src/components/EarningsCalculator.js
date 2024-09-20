// src/components/EarningsCalculator.js
import React, { useState } from 'react';
import '../styles/EarningsCalculator.css';

const productData = {
  tshirt: { price: 20, label: 'T-shirt' },
  socks: { price: 15, label: 'Socks' },
  phoneCase: { price: 10, label: 'Phone case' },
  notebook: { price: 12, label: 'Notebook' },
};

const EarningsCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('tshirt');
  const [dailySales, setDailySales] = useState(1);
  const fulfillmentCost = productData[selectedProduct].price;

  const calculateMonthlyEarnings = () => {
    return ((fulfillmentCost - 8.26) * dailySales * 30).toFixed(2);
  };

  return (
    <div className="earnings-section">
      <div className="earnings-photo">
        <img src="https://printify.com/pfh/assets/profit-calculator/t-shirt-desktop.webp" alt="Earnings Calculator" />
      </div>
      <div className="earnings-content">
        <h2>Pricing</h2>
        <p>Choose a product</p>
        <p>Fulfillment Cost*: ${fulfillmentCost.toFixed(2)}</p>
        <div className="product-options">
          {Object.keys(productData).map((key) => (
            <div
              key={key}
              className={`product-option ${selectedProduct === key ? 'selected' : ''}`}
              onClick={() => setSelectedProduct(key)}
            >
              {productData[key].label}
            </div>
          ))}
        </div>

        <div className="earnings-form">
          <h3>Quantity and Price</h3>
          <label>
            Sell it for: $
            <input
              type="number"
              value={fulfillmentCost}
              onChange={() => {}}
              min="0"
              step="0.01"
              className="input-field"
              readOnly // Make the input read-only to prevent manual editing
            />
          </label>
          <label>
            Daily sales:
            <input
              type="number"
              value={dailySales}
              onChange={(e) => setDailySales(e.target.value)}
              min="0"
              className="input-field"
            />
          </label>
        </div>
        
        <h3>Your Monthly Earnings:</h3>
        <p className="monthly-earnings">${calculateMonthlyEarnings()}</p>
        <p className="footer-note">
          *The production cost includes the fulfillment price of one item with one print. It doesn't include shipping fees, taxes, and other possible storefront expenses.
        </p>
      </div>
    </div>
  );
};

export default EarningsCalculator;
