// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  console.log('URL ID:', id);
  console.log('Products:', products);

  // Convert URL ID to integer
  const productId = parseInt(id, 10);
  console.log('Parsed Product ID:', productId);

  // Find the product by ID
  const product = products.find((p) => p.id === productId);
  console.log('Found Product:', product);

  // Return message if product not found
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
