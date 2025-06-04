import React, { useState } from 'react';
import './ApplyJob.css';
import axios from 'axios';

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    initials: '',
    fullname: '',
    gender: '',
    dob: '',
    email: '',
    contact: '',
    field: '',
  });

  const [cvFile, setCvFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      if (cvFile) {
        data.append('cv', cvFile);
      }

      const response = await axios.post('http://localhost:5000/api/apply', data);
      setMessage(response.data.message);
      setFormData({
        initials: '',
        fullname: '',
        gender: '',
        dob: '',
        email: '',
        contact: '',
        field: '',
      });
      setCvFile(null);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>
          Job Title: <span className="title">Web Development Trainee</span>
        </h2>

        <label>
          Name with Initials:
          <input type="text" name="initials" value={formData.initials} onChange={handleChange} required />
        </label>

        <label>
          Full Name:
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Contact Number:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>

        <label>
          Field:
          <select name="field" value={formData.field} onChange={handleChange} required>
            <option value="" disabled>Select Field</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </label>

        <div className="upload-section">
          <label>Upload your CV here</label>
          <div className="upload-box">
            <input type="file" name="cv" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
            {cvFile && <p>Selected: {cvFile.name}</p>}
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default ApplyJob;
