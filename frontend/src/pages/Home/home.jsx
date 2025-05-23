import React from 'react';
import './home.css'; 
import Footer from '../../components/Footer/footer.jsx';
import Card from '../../components/Card/card.jsx';

function Home() {
  return (
    <div className='home-page'>
      <div className='home-content'>
        <Card />
        <Footer />
      </div>

    </div>
  );
}

export default Home;
