"use client"
import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.css';
import { usePathname } from "next/navigation";

const CustomButton = ({ children, scrolled, onClick, inverted, ...otherProps }) => {
  const pathname = usePathname();

  return (
    <div className={`button-container ${inverted ? 'inverted' : ''} ${scrolled ? 'scrolled' : ''} 
     ${pathname === "/portfolio" || pathname === "/services"? 'portfolio' : ''}`}>
      <button
        className="custom-button"
        {...otherProps}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  scrolled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CustomButton;
