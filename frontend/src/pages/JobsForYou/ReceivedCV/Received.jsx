import React, { useEffect, useState } from 'react';
import './Received.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Received = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [applications, setApplications] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/applications');
        setApplications(response.data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };
    fetchApplications();
  }, []);

  const acceptCV = async (application) => {
    try {
      await axios.post('http://localhost:5000/api/accepted', application);
      alert("CV accepted successfully!");
    } catch (error) {
      console.error("Failed to accept CV:", error);
    }
  };

  return (
    <div className="main-content">
      <button className="hamburger" onClick={toggleSidebar}>☰</button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/job-creation"><b>Job Creation</b></Link></li>
          <li><Link to="/job-modification">Job Modification</Link></li>
          <li className="active"><Link to="/received-cvs">Received CVs</Link></li>
          <li><Link to="/accepted-cvs">Accepted CVs</Link></li>
        </ul>
      </aside>

      <section className="content">
        <div className="Jobcard">
          <h2>Received CVs</h2>
          <table>
            <thead>
              <tr>
                <th>Job Field</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Field</th>
                <th>Contact</th>
                <th>CV</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id}>
                  <td>{app.field}</td>
                  <td>{app.fullname}</td>
                  <td>{app.gender}</td>
                  <td>{app.field}</td>
                  <td>{app.contact}</td>
                  <td>
                    {app.cv ? (
                      <a href={`http://localhost:5000/uploads/${app.cv}`} target="_blank" rel="noreferrer">
                        {app.cv}
                      </a>
                    ) : 'No CV'}
                  </td>
                  <td>
                    <button className="accept-btn" onClick={() => acceptCV(app)}>Accept</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Received;
