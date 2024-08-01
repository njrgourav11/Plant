import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDescription.css';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-content">
        <div className="product-header">
          <h1>{product.name}</h1>
          <p>{product.tagline}</p>
        </div>
        <div className="product-care-guide">
          <h2 className="care-guide-title">Plant Care Guide</h2>
          <div className="care-guide-item">
            <span>Water</span>
            <span>{product.care.water}</span>
          </div>
          <div className="care-guide-item">
            <span>Light</span>
            <span>{product.care.light}</span>
          </div>
          <div className="care-guide-item">
            <span>Tips</span>
            <span>{product.care.tips}</span>
          </div>
        </div>
        <div className="product-description">
          <h2 className="description-title">Description</h2>
          <p className="description-content">{product.description}</p>
        </div>
      </div>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
    </div>
  );
};

export default ProductDetail;
