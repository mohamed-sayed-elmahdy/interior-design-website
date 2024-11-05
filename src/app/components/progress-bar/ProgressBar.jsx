// src/ProgressBar.js
import React, { useEffect, useState } from 'react';
import './progress-bar.styles.css';

const ProgressBar = ({ percentage, counter, bgColor}) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ 
        width: `${percentage}%`, 
        backgroundColor:`${bgColor === 'white'? 'white' : 'gray'}`
        }}>
      </div>
    </div>
  );
};

export default ProgressBar;
