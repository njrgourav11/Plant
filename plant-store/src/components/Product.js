import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Light: {product.light}</p>
      <p>Water: {product.water}</p>
      <img src={product.image} alt={product.name} />
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default Product;