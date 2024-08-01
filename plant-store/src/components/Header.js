import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Pfp from '../assets/pfp.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions'; // Import your logout action

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Determine if the user is an admin
  const isAdmin = user && user.role === 'admin';

  // Determine if the current location is an admin page
  const isAdminPage = location.pathname.startsWith('/admin');

  // Logout function
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    localStorage.removeItem('userRole'); // Clear the user role from local storage
  };

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
                {user ? (
                  <button onClick={handleLogout} className="logout-button">Logout</button>
                ) : (
                  <Link to="/login" className="login-button">Login</Link>
                )}
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
                <li>
                  {user ? (
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                  ) : (
                    <Link to="/login" className="login-button">Login</Link>
                  )}
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
