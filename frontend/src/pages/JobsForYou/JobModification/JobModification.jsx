import React from 'react';
import './JobModification.css';
import { Link} from 'react-router-dom';
import search from '../../../assets/search.png'; 
const JobModification = () => {
    
  return (
   
        <div className="main-content">
              <aside className="sidebar">
          <ul>
            <li >
              <Link to="/job-creation"><b>Job Creation</b></Link>
            </li>
            <li className="active">
              <Link to="/job-modification">Job Modification</Link>
            </li>
            <li>
              <Link to="/received-cvs">Received CVs</Link>
            </li>
            <li>
              <Link to="/accepted-cvs">Accepted CVs</Link>
            </li>
          </ul>
        </aside>

    <div className="main-content">
      <section className="content">
        <div className="search-box">
          <input type="text" placeholder="Search"  />
          <button><img src={search} alt="Search" className="search" /></button>
        </div>

        <div className="Jobcard">
          <h2>Modify Jobs</h2>
          <table>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Job Field</th>
                <th>Created Date</th>
                <th>Status</th>
                <th>Modification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IT</td>
                <td>QA Trainee</td>
                <td>2023/10/14</td>
                <td>Rejected</td>
                <td>
                  <button className="icon-btn"><i className="fas fa-edit"></i></button>
                  <button className="icon-btn"><i className="fas fa-trash-alt"></i></button>
                </td>
              </tr>
              <tr>
                <td>HR</td>
                <td>HR Trainee</td>
                <td>2023/09/11</td>
                <td>Accepted</td>
                <td>
                  <button className="icon-btn"><i className="fas fa-edit"></i></button>
                  <button className="icon-btn"><i className="fas fa-trash-alt"></i></button>
                </td>
              </tr>
              <tr>
                <td>Finance</td>
                <td>Accountant</td>
                <td>2023/08/16</td>
                <td>Rejected</td>
                <td>
                  <button className="icon-btn"><i className="fas fa-edit"></i></button>
                  <button className="icon-btn"><i className="fas fa-trash-alt"></i></button>
                </td>
              </tr>
              <tr>
                <td>IT</td>
                <td>Web Developer</td>
                <td>2023/08/02</td>
                <td>Accepted</td>
                <td>
                  <button className="icon-btn"><i className="fas fa-edit"></i></button>
                  <button className="icon-btn"><i className="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
      
    </div>
  )
}

export default JobModification
