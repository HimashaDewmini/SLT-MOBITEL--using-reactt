import React from 'react'
import './ApplyJob.css'

const ApplyJob = () => {
  return (
    <div className="form-container">
      <form>
        <h2>
          Job Title: <span className="title">Web Development Trainee</span>
        </h2>

        <label>
          Name with Initials:
          <input type="text" name="initials" required />
        </label>

        <label>
          Full Name:
          <input type="text" name="fullname" required />
        </label>

        <label>
          Gender:
          <select name="gender" required>
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Date of Birth:
          <input type="date" name="dob" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Contact Number:
          <input type="tel" name="contact" required />
        </label>

        <label>
          Field:
          <select name="field" required>
            <option value="" disabled selected>
              Select Field
            </option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </label>

        <div className="upload-section">
          <label>Upload your CV here</label>
          <div className="upload-box">
            <p>Drag & Drop files here</p>
            <span>or</span>
            <button type="button">Browse Files</button>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
      
    
  )
}

export default ApplyJob
