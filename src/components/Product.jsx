import React from 'react';
import './Product.css';

const Product = ({ productName, price, imageUrl, description }) => (
  <div className="product-card">
    <img src={imageUrl} alt={productName} className="product-image" />
    <div className="product-info">
      <h2 className="product-name">{productName}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  </div>
);

export default Product;