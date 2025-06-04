import React, { useState } from "react";
import "./LoginModal.css";
import google from "../../assets/13.png";
import facebook from "../../assets/12.png";
import loginImage from "../../assets/11.jpg";
import axios from "axios";

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);

      if (response.data.success) {
        alert("Login successful!");
        localStorage.setItem("token", response.data.token); // Optional
        onClose();
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="login-container">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            <button type="submit">Sign In</button>

            {error && <p className="error-text">{error}</p>}

            <p className="login-text">
              Don't have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToSignup(); }}>
                Sign Up
              </a>
            </p>

            <div className="divider"><span></span>OR<span></span></div>

            <div className="social-buttons">
              <img src={google} alt="Google Login" />
              <img src={facebook} alt="Facebook Login" />
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
