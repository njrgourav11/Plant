// src/RoutesComponent.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductsPage';
import ProductDescription from './components/ProductDescription';
import AdminProductDescription from './components/Admin';
import Header from './components/Header';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Homepage from './components/Hero';
import { useSelector, useDispatch } from 'react-redux';

const RoutesComponent = () => {
  const products = useSelector((state) => state.products.products); // Adjust based on your store setup
  const user = useSelector((state) => state.products.user); // Ensure this matches your state structure

  const dispatch = useDispatch();

  // Example: Dispatch an action to set products
  const setProducts = (products) => {
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  };

  return (
    <BrowserRouter>
      <Header /> {/* The Header will be included on every page */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDescription />} />
        <Route path="/admin/products/:productId" element={<AdminProductDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
