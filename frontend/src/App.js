import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Vacancies from './pages/Vacancy/vacancies.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import LoginModal from './components/Login/LoginModal.jsx';
import SignupModal from './components/Signup/SignupModal.jsx'; // ✅ import SignupModal

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // ✅ modal control functions
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
      <Navbar onLoginClick={openLogin} />

      {isLoginOpen && (
        <LoginModal onClose={closeLogin} onSwitchToSignup={openSignup} />
      )}

      {isSignupOpen && (
        <SignupModal onClose={closeSignup} onSwitchToLogin={openLogin} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainhome" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacancies" element={<Vacancies />} />
      </Routes>
    </Router>
  );
}

export default App;
