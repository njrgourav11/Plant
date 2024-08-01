// src/components/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import { products } from '../data/products';

const ProductList = () => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="featured-heading">Featured Products</h2> {/* Add heading here */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
