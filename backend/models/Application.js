const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  initials: { type: String, required: true },
  fullname: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  field: { type: String, required: true },
  cv: { type: String }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
