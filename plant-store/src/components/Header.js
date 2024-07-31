import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Pfp from '../assets/pfp.png';

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/'; // Adjust if your home page route is different

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">B.planet</Link>
      </div>
      {!isContactPage && (
        <nav className="nav-container">
          <ul>
            {isHomePage ? (
              <>
                <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
               
                <li>                
                    <img src={Pfp} alt="Profile" className="profile-pic" />
                                </li>
              </>
            ) : (
              <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
