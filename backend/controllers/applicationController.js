const Application = require('../models/Application');
const AcceptedCV = require('../models/AcceptedCV');

// Submit a new application
const submitApplication = async (req, res) => {
  try {
    const {
      initials,
      fullname,
      gender,
      dob,
      email,
      contact,
      field,
    } = req.body;

    const newApplication = new Application({
      initials,
      fullname,
      gender,
      dob,
      email,
      contact,
      field,
      cv: req.file ? req.file.filename : null,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (error) {
    console.error("Submit Error:", error);
    res.status(500).json({ error: 'Error submitting application.' });
  }
};

// Get all received applications
const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: 'Failed to fetch applications.' });
  }
};

// Accept a CV and move it to accepted list
const acceptCV = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ message: "Application not found" });

    const accepted = new AcceptedCV({
      fullname: app.fullname,
      gender: app.gender,
      field: app.field,
      contact: app.contact,
      cv: app.cv,
    });

    await accepted.save();
    await Application.findByIdAndDelete(app._id);

    res.status(200).json({ message: "CV accepted and moved successfully" });
  } catch (error) {
    console.error("Accept Error:", error);
    res.status(500).json({ message: "Failed to accept CV", error });
  }
};

module.exports = {
  submitApplication,
  getAllApplications,
  acceptCV,
};
