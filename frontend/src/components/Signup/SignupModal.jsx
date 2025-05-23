import React from "react";
import "./signup.css"; 
import signupImage from "../../assets/10.png"; 

export default function SignupModal({ onClose, onSwitchToLogin }) {
  return (
    <div className="popup-overlay">
      <div className="container">
        <button className="close-button" onClick={onClose}>×</button>

        <div className="image-box">
          <img src={signupImage} alt="Register" />
        </div>

        <div className="form-box">
          <h2>Register</h2>

          <form>
            <div className="form-group">
              <label>User ID</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" required />
            </div>
            <button type="submit">Submit</button>
          </form>

          <p className="signup-text">
            Already have an account?{" "}
            <a href="#" onClick={(e) => {
              e.preventDefault();
              onSwitchToLogin(); 
            }}>
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
