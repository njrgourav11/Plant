import React from 'react';
import { connect } from 'react-redux';

const ProductDescription = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Light: {product.light}</p>
      <p>Water: {product.water}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.productId;
  const product = state.products.find(product => product.id === parseInt(productId));
  return { product };
};

export default connect(mapStateToProps)(ProductDescription);