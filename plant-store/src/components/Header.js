import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Pfp from '../assets/pfp.png';
import { useSelector } from 'react-redux';

function Header() {
  const location = useLocation();
  const user = useSelector((state) => state.user);

  // Determine if the user is an admin
  const isAdmin = user && user.role === 'admin';

  // Determine if the current location is an admin page
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">B.planet</Link>
      </div>
      <nav className="nav-container">
        <ul>
          {isAdminPage ? (
            <>
              {/* Admin-specific links */}
              
              <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
              <li>
                <Link to="/login" className="login-button">Login</Link>
              </li>
            </>
          ) : (
            <>
              {/* Regular user links */}
              {!isAdmin && (
                <>
                  <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
                  <li>
                    <Link to="/profile">
                      <img src={Pfp} alt="Profile" className="profile-pic1" />
                    </Link>
                  </li>
                </>
              )}
              
              {!isAdmin && (
                <li><Link to="/login" className="login-button">Login</Link></li>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
