import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import ProductList from './components/ProductsPage';
import ProductDescription from './components/ProductDescription';
import AdminProductDescription from './components/Admin/Prod';
import AdminHome from './components/Admin/Home';
import AdminProducts from './components/Admin/Product';
import AdminSettings from './components/Admin/Profile';
import Header from './components/Header';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Homepage from './components/Hero';

const RoutesComponent = () => {
  const userRole = localStorage.getItem('userRole');
  const isAdmin = userRole === 'admin';
  const isAuthenticated = Boolean(localStorage.getItem('loggedInUserEmail'));

  return (
    <BrowserRouter>
      <Header /> {/* The Header will be included on every page */}
      <Routes>
        {/* Redirect to login if not authenticated */}
        <Route
          path="*"
          element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDescription />} />
        
        {/* Admin routes */}
        <Route 
          path="/admin/home" 
          element={isAdmin ? <AdminHome /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin/products" 
          element={isAdmin ? <AdminProducts /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin/products/:productId" 
          element={isAdmin ? <AdminProductDescription /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin/settings" 
          element={isAdmin ? <AdminSettings /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin/products/add" 
          element={isAdmin ? <AdminProductDescription /> : <Navigate to="/" />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
