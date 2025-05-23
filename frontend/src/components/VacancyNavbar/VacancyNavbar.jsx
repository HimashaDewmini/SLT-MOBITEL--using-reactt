import React from 'react';
import { Link } from 'react-router-dom';
import './vacancyNavbar.css';
import logo from '../../assets/1.png'; 

function VacancyNavbar() {
  return (
    <div>
      {/* Header with Logo and Program Title */}
      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="SLT Logo" className="logo" />
          <h1 className="program-title">Training Program</h1>
        </div>
      
      {/* Navigation Links */}
      <nav className="vacancy-navbar">
        <div className="nav-links">
          <Link to="/applied-job">Job Status</Link>
          <Link to="/apply">Apply for Job</Link>
          <Link to="/vacancy-creation">Jobs for You</Link>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      </header>

    </div>
  );
}

export default VacancyNavbar;
