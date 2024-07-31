export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
