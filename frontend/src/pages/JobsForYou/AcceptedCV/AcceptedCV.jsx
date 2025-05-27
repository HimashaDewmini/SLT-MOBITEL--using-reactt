import React from 'react'
import './AcceptedCV.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AcceptedCV = () => {
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
                    <li>
                      <Link to="/received-cvs">Received CVs</Link>
                    </li>
                    <li className="active">
                      <Link to="/accepted-cvs">Accepted CVs</Link>
                    </li>
                  </ul>
                </aside>

                 <section className="content">
      <div className="Jobcard">
        <h2>Accepted CVs</h2>
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
              <td>John Doe</td>
              <td>Male</td>
              <td>QA Trainee</td>
              <td>1234567890</td>
              <td><a href="#">Download</a></td>
            </tr>
            <tr>
              <td>Telecommunication</td>
              <td>Jane Smith</td>
              <td>Female</td>
              <td>Trainee</td>
              <td>0987654321</td>
              <td><a href="#">Download</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
        
      
    </div>
  )
}

export default AcceptedCV
