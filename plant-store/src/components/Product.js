import React from 'react';

const ProductList = ({ products }) => {
  if (!Array.isArray(products)) {
    return <div>Products is not an array</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;