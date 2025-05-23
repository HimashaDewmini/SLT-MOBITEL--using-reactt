
import React from 'react';
import './navbar.css';
import logo from '../../assets/1.png';
import { Link } from 'react-router-dom'; 



function Navbar({ onLoginClick }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="SLT Logo" className="logo" />
        <h1 className="program-title">Training Program</h1>
      </div>
      <nav className="nav-links">
        
        <Link to="/mainhome">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/vacancies">Vacancies</Link>
        <button onClick={onLoginClick}>Login</button>
      </nav>

      
    </header>
  );
}

export default Navbar;
