import React from 'react'
import './Received.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Received = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
  return (
    
      <div className="main-content">
              <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                  <li >
                    <Link to="/job-creation"><b>Job Creation</b></Link>
                  </li>
                  <li >
                    <Link to="/job-modification">Job Modification</Link>
                  </li>
                  <li className="active">
                    <Link to="/received-cvs">Received CVs</Link>
                  </li>
                  <li>
                    <Link to="/accepted-cvs">Accepted CVs</Link>
                  </li>
                </ul>
              </aside>
              <section className="content">
      <div className="Jobcard">
        <h2>Received CVs</h2>
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Field</th>
              <th>Contact Number</th>
              <th>CV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software</td>
              <td>Dinith</td>
              <td>Male</td>
              <td>IT</td>
              <td>074 3231211</td>
              <td>dinith.pdf</td>
            </tr>
            <tr>
              <td>Telecom</td>
              <td>Dilshara</td>
              <td>Male</td>
              <td>IT</td>
              <td>074 3231211</td>
              <td>dilshara.pdf</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
      
      
    </div>
  )
}

export default Received
