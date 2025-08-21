// src/components/Loader.js
import React from 'react';
import './loader.css';
import imagePath from '../pages/Images/BCORE Logo.png';

export const Loader = () => {
  return (
    <div className="loader">
      <img src={imagePath} alt="Loading..." className="loader-image" />
    </div>
  );
};
