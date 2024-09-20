// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Integrations</h3>
          <ul>
            <li>Shopify</li>
            <li>Etsy</li>
            <li>eBay</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>PrestaShop</li>
            <li>BigCommerce</li>
            <li>Wix</li>
            <li>WooCommerce</li>
            <li>Squarespace</li>
            <li>Printify API</li>
            <li>Printify Pop-Up Store</li>
            <li>Shutterstock</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Discover</h3>
          <ul>
            <li>Blog</li>
            <li>Guides</li>
            <li>Products</li>
            <li>Etsy print-on-demand</li>
            <li>Shopify print-on-demand</li>
            <li>Woocommerce print-on-demand</li>
            <li>Wix print-on-demand</li>
            <li>Squarespace print-on-demand</li>
            <li>Make Your Own Shirt</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Brands</h3>
          <ul>
            <li>Pricing</li>
            <li>Shipping Rates</li>
            <li>Mockup Generator</li>
            <li>Start selling</li>
            <li>Custom T-shirts</li>
            <li>Custom Hoodies</li>
            <li>Custom Mugs</li>
            <li>Custom Socks</li>
            <li>Custom Backpacks</li>
            <li>Custom Branding</li>
            <li>Sell on Etsy</li>
            <li>Sell on Social Media</li>
            <li>Free T-shirt Designs</li>
            <li>Custom Products</li>
            <li>Custom All-Over-Print Hoodies</li>
            <li>Start a Clothing Line</li>
            <li>Start POD Business</li>
            <li>Bulk Orders</li>
            <li>Transferring To Printify</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Printify</h3>
          <ul>
            <li>Print on Demand</li>
            <li>Print Providers</li>
            <li>Experts Program</li>
            <li>Printify Express Delivery</li>
            <li>Become a Partner</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Printify Quality Promise</li>
            <li>Jobs</li>
            <li>Webinars</li>
            <li>Printing Profits Podcast</li>
            <li>Contact Us</li>
            <li>Affiliate</li>
            <li>Contact Sales</li>
            <li>POD Glossary</li>
            <li>Network Fulfillment Status</li>
            <li>Merchant Protection</li>
            <li>Security</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Printify, Inc. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
