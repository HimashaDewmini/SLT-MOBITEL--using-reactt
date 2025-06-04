import React, { useState } from "react";
import axios from "axios";
import "./signup.css"; 
import signupImage from "../../assets/10.png"; 

export default function SignupModal({ onClose, onSwitchToLogin }) {
 const [formData, setFormData] = useState({
  userId: '',
  name: '',
  email: '', 
  password: '',
  confirmPassword: '',
});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
  userId: formData.userId,
  name: formData.name,
  email: formData.email,
  password: formData.password,
});

      alert("User registered successfully!");
      onSwitchToLogin(); // switch to login page
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="container">
        <button className="close-button" onClick={onClose}>×</button>

        <div className="image-box">
          <img src={signupImage} alt="Register" />
        </div>

        <div className="form-box">
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User ID</label>
              <input name="userId" value={formData.userId} onChange={handleChange} type="text" required />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input name="name" value={formData.name} onChange={handleChange} type="text" required />
            </div>
            <div className="form-group">
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input name="password" value={formData.password} onChange={handleChange} type="password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" required />
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
