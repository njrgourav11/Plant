import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Pfp from '../assets/pfp.png';
import { useSelector } from 'react-redux';

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/'; // Adjust if your home page route is different

  // Get user data from Redux store
  const user = useSelector((state) => state.user);
  
  // Check if the user is logged in and is an admin
  const isAdmin = user && user.role === 'admin';

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">B.planet</Link>
      </div>
      {!isContactPage && (
        <nav className="nav-container">
          <ul>
            {(isHomePage || isAdmin) && (
              <>
                <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
                {isAdmin && (
                  <li><Link to="/login" className="login-button">Login</Link></li>
                )}
                {!isAdmin && (
                  <li>
                    <Link to="/profile">
                      <img src={Pfp} alt="Profile" className="profile-pic1" />
                    </Link>
                  </li>
                )}
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
