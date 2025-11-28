import React from 'react';
import './Preloader.css';
import logo from '../../assets/logo.png';

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={logo} alt="Loading..." />
            <div className="spinner"></div>
        </div>
    );
};

export default Preloader;
