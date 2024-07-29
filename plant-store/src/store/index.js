import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login';
import productsReducer from '../reducers/products';

const store = configureStore({
  reducer: {
    login: loginReducer,
    products: productsReducer
  },
});

export default store;