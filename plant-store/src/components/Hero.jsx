import React from 'react';
import './Hero.css';  // Ensure you have the corresponding CSS file
import One from '../assets/Hero1.png';
import Two from '../assets/Hero2.png';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="text-section">
        <h1>'As Interesting <br /> as a Plant'</h1>
      </div>
      <div className="image-section">
        <img src={Two} alt="Plant 2" className="image-right" />

        <img src={One} alt="Plant 1" className="image-left" />
      </div>
    </div>
  );
};

export default Homepage;
