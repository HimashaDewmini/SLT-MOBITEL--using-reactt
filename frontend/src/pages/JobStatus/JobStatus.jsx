import React from 'react'
import './jobStatus.css'

const JobStatus = () => {
  return (
    <div className="job-status-page">
     <main className="main-wrapper">
      <div className="Job-card">
        <h2>Applied Job Status:</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Job Field</th>
                <th>Job Position</th>
                <th>Recommendation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Software</td>
                <td>Male</td>
                <td>Approved yesterday</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Telecommunication</td>
                <td>Trainee</td>
                <td>Rejected yesterday</td>
                <td>Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    </div>
  );
}

export default JobStatus
