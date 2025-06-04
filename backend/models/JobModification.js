
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  field: { type: String, required: true },
  title: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

module.exports = mongoose.model("Job", jobSchema);
