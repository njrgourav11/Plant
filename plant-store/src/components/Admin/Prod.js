import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './Prod.css';
import img from '../../assets/image.png';

const ProductDetail = () => {

  return (
    <div>
        <h2 className="featured-heading">Product Description</h2>
    <div className="product-detail-container">

      <div className="product-content">
        <div className="product-header">
          <h1>Title</h1>
          <p>Subtitle</p>
        </div>
        <div className="product-care-guide">
          <h2 className="care-guide-title">Guide</h2>
          <div className="care-guide-item">
            <span>Guide 1</span>
            <span>description</span>
          </div>
          <div className="care-guide-item">
            <span>Guide 2</span>
            <span>description</span>
          </div>
          <div className="care-guide-item">
            <span>Guide 3</span>
            <span>description</span>
          </div>
          
        </div>
        <div className="product-description">
          <h2 className="description-title">Description</h2>
          <p className="description-content">Write your description</p>
        </div>
      </div>
      <div className="product-image-container">
        <img src={img} alt="product name" className="product-image" />
      </div>
    </div>
    </div>

  );
};

export default ProductDetail;
