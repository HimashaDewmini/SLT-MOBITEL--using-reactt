import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Vacancy from './pages/Vacancy/vacancies.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import VacancyNavbar from './components/VacancyNavbar/VacancyNavbar.jsx';
import LoginModal from './components/Login/LoginModal.jsx';
import SignupModal from './components/Signup/SignupModal.jsx';
import JobStatus from './pages/JobStatus/JobStatus.jsx';  
import ApplyJob from './pages/ApplyJob/ApplyJob.jsx'; 
import JobCreation from './pages/JobsForYou/JobCreation/JobCreation.jsx';
import JobModification from './pages/JobsForYou/JobModification/JobModification.jsx';
import ReceivedCVs from './pages/JobsForYou/ReceivedCV/Received.jsx';
import AcceptedCVs from './pages/JobsForYou/AcceptedCV/AcceptedCV.jsx';
import Logout from './components/Logout/Logout.jsx';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const openSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const closeSignup = () => {
    setIsSignupOpen(false);
  };

  return (
    <Router>
      {isLoginOpen && (
        <LoginModal onClose={closeLogin} onSwitchToSignup={openSignup} />
      )}
      {isSignupOpen && (
        <SignupModal onClose={closeSignup} onSwitchToLogin={openLogin} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar onLoginClick={openLogin} />
              <Home />
            </>
          }
        />
        <Route
          path="/mainhome"
          element={
            <>
              <Navbar onLoginClick={openLogin} />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar onLoginClick={openLogin} />
              <About />
            </>
          }
        />
        <Route
          path="/vacancies"
          element={
            <>
              <VacancyNavbar />
              <Vacancy />
            </>
          }
        />
        <Route
          path="/applied-job"
          element={
            <>
              <VacancyNavbar />
              <JobStatus />
            </>
          }
        />

        <Route
            path="/apply"
            element={
              <>
                <VacancyNavbar />
                <ApplyJob />
              </>
            }
          />
          <Route
                path="/vacancy-creation"
                element={
                  <>
                    <VacancyNavbar />
                    <JobCreation />
                </>
              }
           />
           <Route path="/job-creation" element={
            <>
            <VacancyNavbar/>
            <JobCreation />
            </>
            } 
            />
        <Route path="/job-modification" element={
          <>
          <JobModification />
          <VacancyNavbar />

          </>
          } 
          />
        <Route path="/received-cvs" element={
          <>

          <ReceivedCVs />
          <VacancyNavbar/>
          </>
          }
          />
        <Route path="/accepted-cvs" element={
        <>
        <AcceptedCVs /> 
        <VacancyNavbar />
        </>
        }
        />
        <Route path="/logout" element={
          <Logout />
        } 
          
        />


          
      </Routes>
    </Router>
  );
}

export default App;
