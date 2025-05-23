// src/components/Footer.jsx
import React from 'react';
import './footer.css'; 
import facebook from '../../assets/3.png';
import twitter from '../../assets/4.png';
import instagram from '../../assets/5.png';
import linkdin from '../../assets/6.png';
import youtube from '../../assets/7.png';
import tiktok from '../../assets/8.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>ABOUT US</h4>
          <a href="#">Corporate Responsibility</a>
          <a href="#">Investors</a>
          <a href="#">Media Center</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-col">
          <h4>BUSINESS</h4>
          <a href="#">Enterprises</a>
          <a href="#">SME</a>
          <a href="#">Wholesale</a>
          <a href="#">International</a>
        </div>

        <div className="footer-col">
          <h4>CONTACT US</h4>
          <p>Sri Lanka Telecom PLC<br />Lotus Road, Colombo 01</p>
          <p>Tel: +94 112 021 000</p>
          <p>Email: pr@slt.lk</p>
          <p>Mon - Fri: 9am to 5pm</p>
        </div>

        <div className="footer-col customer-support">
          <h4>CUSTOMER SUPPORT</h4>
          <p>Telephone: 1212</p>
          <p>Email: 1212@slt.com.lk</p>
          <p>Self Service: +94 112 12 12 12</p>
        </div>

        <div className="footer-col social-col">
          <h4 style={{ visibility: 'hidden' }}>Hidden</h4>
          <div className="social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={linkdin} alt="LinkedIn" />
            <img src={youtube} alt="YouTube" />
            <img src={tiktok} alt="Tiktok" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
