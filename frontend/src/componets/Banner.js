import React from 'react';
import './Dashboard.css';
import estate from '../assests/estate.jpg'; // ✅ adjust the path as needed

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        src={estate}
        alt="Banner"
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
