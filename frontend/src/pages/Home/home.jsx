import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/navbar.jsx'; 
import Footer from '../../components/Footer/footer.jsx';
import Card from '../../components/Card/card.jsx';

function Home() {
  return (
    <div className='home-page'>
      <div className='home-content'>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
