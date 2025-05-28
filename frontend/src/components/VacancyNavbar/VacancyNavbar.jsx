import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './vacancyNavbar.css';
import logo from '../../assets/1.png';

function VacancyNavbar({ onLoginClick }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
  
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="SLT Logo" className="logo" />
        <h1 className="program-title">Training Program</h1>
        <div className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>

      

      {/* Navigation Links */}
      <nav className={`nav-links ${isMobileMenuOpen ? 'show' : 'hide'}`}>
      <Link to="/applied-job" onClick={() => setMobileMenuOpen(false)}>Job Status</Link>
      <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>Apply for Job</Link>
      <Link to="/vacancy-creation" onClick={() => setMobileMenuOpen(false)}>Jobs for You</Link>
      <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
      <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Logout</Link>
    </nav>
    </header>
  );
}

export default VacancyNavbar;
