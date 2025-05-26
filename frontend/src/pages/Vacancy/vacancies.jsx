import React from 'react';
import './vacancies.css';
import VacancyNavbar from '../../components/VacancyNavbar/VacancyNavbar';
import Card from '../../components/Card/card';

const Vacancies = () => {
  return (
    <div className="vacancies-page">
      <VacancyNavbar />

      <div className="paragraph">
        <p>Find your job that is prefer for you</p>
      </div>

      <div className="vacancy-card-wrapper">
        <Card />
      </div>

      <div className="card-footer">
        <a href="/applied-job">
          <button className="apply-btn2">Check the applied job status</button>
        </a>
      </div>
    </div>
  );
};

export default Vacancies;
