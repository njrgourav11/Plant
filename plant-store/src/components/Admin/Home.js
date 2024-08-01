import React from 'react';
import './Home.css';  // Ensure you have the corresponding CSS file
import One from '../../assets/Hero1.png';
import Two from '../../assets/Hero2.png';
import Feature from "./Product";
import Profile from "./Profile";
import Contact from "../Contact";
import Prod from "./Prod";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="text-section">
          <h1>'Heading'</h1>
        </div>
        <div className="image-section">
          <img src={Two} alt="Plant 2" className="image-right" />
          <img src={One} alt="Plant 1" className="image-left" />
        </div>
      </div>
      <Feature/>
      <Prod/>
      <Profile/>
      <Contact/>
      
    </>
  );
};

export default Homepage;
