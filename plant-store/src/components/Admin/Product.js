// src/components/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { products } from '../../data/products';
import AddImageIcon from '../../assets/image.png'; // Replace with the actual path to your image

const ProductList = () => {
  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  const displayedProducts = products.slice(0, 6); // Show only the first 6 products

  return (
    <div>
      <h2 className="featured-heading">Featured Products</h2>
      <div className="product-grid">
        {/* Display the first 6 products */}
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
        
        {/* Show 16 additional boxes with a fixed image */}
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="product-card placeholder">
            <img src={AddImageIcon} alt="Add Image" />
            <p>Add Image</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
