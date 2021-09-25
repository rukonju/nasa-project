import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="./logo.png" alt="" />
                </div>
                <div className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/projects">Our projects</a>
                    <a href="/about">About us</a>
                    <a className="login" href="/login">Login</a>
                </div>
            </nav>
            <div className="heading">
                <h1>Nasa <span>Project Managment Team</span></h1>
                <h3>Are you looking for <span>big brain</span> to solve your problems. Hire peoples  who perfect for your project.</h3>
                <h1>Total Budget: 100 Millions</h1>
            </div>
            
        </header>
    );
};

export default Header;