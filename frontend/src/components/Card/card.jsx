import React from 'react'
import './card.css';

const card = () => {
  return (
    <div>
        <main className="card-row">
        {/* Card 1 */}
        <div className="card">
          <div className="card-header">Trainee Network Engineers</div>
          <div className="card-body">
            <p>
              We are hiring new training network engineers for SLTMobitel. Only
              an associate degree, a bachelor’s degree in computer science,
              information technology, computer engineering, or a related field
              undergraduates (3rd year, 4th year), and fresh graduates are
              preferred.
            </p>
            <ul>
              <li>No job experiences are needed.</li>
              <li>Networking knowledge.</li>
              <li>Operating systems knowledge.</li>
              <li>Network devices and security knowledge.</li>
              <li>Networking device configuration knowledge.</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="apply.html">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-header">Accountant - Financial Accounting</div>
          <div className="card-body">
            <p>
              Sri Lanka Telecom is in search of high caliber, result-oriented
              and qualified individuals capable of playing a key role in the
              finance team. You will be engaged in a range of tasks in financial
              accounting in a highly IT-backed work environment and expected to
              collaborate with subsidiary companies and cross-functional
              departments.
            </p>
            <ul>
              <li>Associate Membership of ICA/CIMA/ACCA</li>
              <li>Preference to prize winners.</li>
              <li>Excellent communication and leadership skills.</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="apply.html">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-header">Engineers</div>
          <div className="card-body">
            <p>
              As an Engineer of the pioneering ICT solutions provider, you will
              be a distinguished member of our team, responsible for planning,
              designing, operating and maintaining our state-of-the-art ICT
              infrastructure.
            </p>
            <ul>
              <li>Four-year ICT related degree.</li>
              <li>Associate Member of IESL.</li>
              <li>
                Knowledge of cloud, data center, and security is an advantage.
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="apply.html">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <div className="card-header">Technicians</div>
          <div className="card-body">
            <p>
              Technicians are mainly responsible for installing, maintaining,
              and repairing electronic communications equipment in
              telecommunication networks and internet supply systems.
            </p>
            <ul>
              <li>6 O/L passes + English + Math.</li>
              <li>Level 4 technical certification.</li>
              <li>Repair and fault diagnosis skills.</li>
            </ul>
          </div>
          <div className="card-footer">
            <a href="apply.html">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        </div>
      </main>
      
    </div>
  )
}

export default card;
