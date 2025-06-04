// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
} = require("../controllers/JobModificationController");

// POST: Create new job
router.post("/", createJob);

// GET: All jobs
router.get("/", getAllJobs);

// PUT: Update job
router.put("/:id", updateJob);

// DELETE: Delete job
router.delete("/:id", deleteJob);

module.exports = router;
