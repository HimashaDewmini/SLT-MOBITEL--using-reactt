import React, { useState } from 'react';
import './JobCreation.css';
import { Link } from 'react-router-dom';

const JobCreation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="main-container">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li className="active">
            <Link to="/job-creation"><b>Job Creation</b></Link>
          </li>
          <li>
            <Link to="/job-modification">Job Modification</Link>
          </li>
          <li>
            <Link to="/received-cvs">Received CVs</Link>
          </li>
          <li>
            <Link to="/accepted-cvs">Accepted CVs</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="job-form">
          <h2>Company Job Vacancy: Web Development Trainee</h2>
          <form>
            <div className="form-grid">
              <input type="text" placeholder="Job ID" />
              <input type="text" placeholder="Job Field" />
              <input type="text" placeholder="Job Position" />
              <input type="text" placeholder="Contact Number" />
              <input type="text" placeholder="Background" />
              <input type="text" placeholder="Salary" />
              <input type="email" placeholder="Company Email" />
              <input type="text" placeholder="Company Location" />
              <input type="date" />
              <input type="text" placeholder="Work Type" />
              <textarea placeholder="Job Description"></textarea>
            </div>
            <button type="submit" className="submit-btn">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobCreation;
