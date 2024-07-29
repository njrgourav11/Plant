// src/RoutesComponent.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDescription from './components/ProductDescription';
import AdminProductDescription from './components/Admin'; // Ensure correct import path
import Header from './components/Header';
import Contact from './components/Contact';
import Profile from './components/Profile';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Header /> {/* The Header will be included on every page */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDescription />} />
        <Route path="/admin/products/:productId" element={<AdminProductDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
