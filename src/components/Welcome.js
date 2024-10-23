import React from 'react';
import '../styles/Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Welcome to Our E-Commerce Store!</h1>
            <p className="welcome-message">
                Discover amazing products and exclusive deals just for you.
                <br />
                Enjoy a seamless shopping experience and find everything you need right here!
            </p>
            <p className="call-to-action">Start exploring now!</p>
        </div>
    );
};

export default Welcome;
