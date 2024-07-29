import React from 'react';
import { connect } from 'react-redux';

const AdminProductDescription = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Light: {product.light}</p>
      <p>Water: {product.water}</p>
      <img src={product.image} alt={product.name} />
      <form>
        <label>
          Name:
          <input type="text" value={product.name} />
        </label>
        <label>
          Description:
          <textarea value={product.description} />
        </label>
        <label>
          Light:
          <input type="text" value={product.light} />
        </label>
        <label>
          Water:
          <input type="text" value={product.water} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.productId;
  const product = state.products.find(product => product.id === parseInt(productId));
  return { product };
};

export default connect(mapStateToProps)(AdminProductDescription);