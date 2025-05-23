import React from 'react'
import './about.css';
import aboutImage from '../../assets/14.avif';

const about = () => {
  return (
    <div>
      
        <div class="about-container">

          <div class="about">
          <h2>About Us</h2>
          <p>"Welcome to <strong>SLT-Mobitel</strong>, where technology meets innovation. Established as Sri Lanka's premier telecommunications service provider, we are dedicated to delivering reliable, high-speed connectivity and cutting-edge solutions. Our mission is to empower individuals, businesses, and communities through seamless communication and digital transformation. With a passionate team of technology experts, we continuously push the boundaries to connect Sri Lanka to the world, fostering a smarter and more connected future. Join us as we shape the next generation of digital experiences."</p>
              
          <button>Learn more</button>
          </div>

          <div class="about-content">
              <img src={aboutImage} alt="About Us" class="about-image"/>
          </div>

        </div>
      
    </div>
  )
}

export default about;
