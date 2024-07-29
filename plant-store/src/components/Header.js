import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Pfp from '../assets/pfp.png';

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/'; // Adjust if your home page route is different

  return (
    <header>
      <div className="logo">
        <a href="#">B.planet</a>
      </div>
      {!isContactPage && (
        <nav>
          <ul>
            {isHomePage ? (
              <>
                <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
                <li>
                  <img src={Pfp} alt="Profile" className="profile-pic" />
                </li>
              </>
            ) : (
              <>
                <li><Link to="/contact" className="contact-button">Contact Us</Link></li>
                {/* Add any additional links or elements for other pages here */}
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
