// src/reducers/ProductSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { products as productData } from '../data/products';

const initialState = {
  products: productData || [], // Ensure products is an array
  user: {
    role: '', // Example initial state for user
    name: '', // Example initial state for name
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setProducts, setUser } = productSlice.actions;
export default productSlice.reducer;
