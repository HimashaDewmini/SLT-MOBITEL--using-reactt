import React, { useEffect, useState } from 'react';
import './AcceptedCV.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AcceptedCVs = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [acceptedCVs, setAcceptedCVs] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    fetchAcceptedCVs();
  }, []);

  const fetchAcceptedCVs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/accepted');
      if (Array.isArray(response.data)) {
        setAcceptedCVs(response.data);
      } else {
        console.error('Unexpected data format:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch accepted CVs:', error);
    }
  };

  const deleteCV = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this CV?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/accepted/${id}`);
        setAcceptedCVs((prev) => prev.filter((cv) => cv._id !== id));
      } catch (error) {
        console.error('Failed to delete CV:', error);
      }
    }
  };

  return (
    <div className="main-content">
      <button className="hamburger" onClick={toggleSidebar}>☰</button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/job-creation">Job Creation</Link></li>
          <li><Link to="/job-modification">Job Modification</Link></li>
          <li><Link to="/received-cvs">Received CVs</Link></li>
          <li className="active"><b><Link to="/accepted-cvs">Accepted CVs</Link></b></li>
        </ul>
      </aside>

      <section className="content">
        <div className="Jobcard">
          <h2>Accepted CVs</h2>

          {acceptedCVs.length === 0 ? (
            <p>No accepted CVs available.</p>
          ) : (
            <table className="accepted-cv-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Field</th>
                  <th>Contact</th>
                  <th>CV</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {acceptedCVs.map((cv) => (
                  <tr key={cv._id}>
                    <td>{cv.fullname}</td>
                    <td>{cv.gender}</td>
                    <td>{cv.field}</td>
                    <td>{cv.contact}</td>
                    <td>
                      {cv.cv ? (
                        <a
                          href={`http://localhost:5000/uploads/${cv.cv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View CV
                        </a>
                      ) : (
                        'No CV'
                      )}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteCV(cv._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

export default AcceptedCVs;
