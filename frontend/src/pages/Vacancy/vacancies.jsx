import React from 'react'
import './vacancies.css';
import Navbar from '../../components/Navbar/navbar';
import Card from '../../components/Card/card';

const vacancies = () => {
  return (
    <div className="vacancies-page">
      
       <div class="paragraph">
        <p>Find your job that is prefer for you</p>
        
      </div>
      <div className="vacancy-card-wrapper">
        <Card />
      </div>
    <div class="card-footer">
     <a href="appliedJob.html">
     <button class="apply-btn2">Checked the applied job status</button>
    </a>
    </div>
      
    </div>
  )
}

export default vacancies
