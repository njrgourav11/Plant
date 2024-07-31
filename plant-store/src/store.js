// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductSlice'; // Correct path

const store = configureStore({
  reducer: {
    products: productsReducer, // Ensure 'products' matches usage in useSelector
  },
});

export default store;
