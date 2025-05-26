import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/1.png';
import { Link } from 'react-router-dom';

function Navbar({ onLoginClick }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="SLT Logo" className="logo" />
        <h1 className="program-title">Training Program</h1>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>

      <nav className={`nav-links ${isMobileMenuOpen ? 'show' : 'hide'}`}>
        <Link to="/mainhome" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link to="/vacancies" onClick={() => setMobileMenuOpen(false)}>Vacancies</Link>
        <button onClick={() => {
          onLoginClick();
          setMobileMenuOpen(false);
        }}>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
