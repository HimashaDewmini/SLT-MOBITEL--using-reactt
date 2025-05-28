import React from "react";
import "./LoginModal.css"; 
import google from "../../assets/13.png";
import facebook from "../../assets/12.png";
import loginImage from "../../assets/11.jpg"; 

export default function LoginModal({ onClose, onSwitchToSignup }) {
  return (
    <div className="popup-overlay">
      <div className="login-container">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label>Email address :</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password :</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Sign In</button>

            <p className="login-text">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToSignup(); 
                }}
              >
                Sign Up
              </a>
            </p>

            <div className="divider"><span></span>OR<span></span></div>

            <div className="social-buttons">
              <img src={google} alt="Google" />
              <img src={facebook} alt="Facebook" />
            </div>
          </form>
        </div>

        <div className="image-box">
          <img src={loginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}
