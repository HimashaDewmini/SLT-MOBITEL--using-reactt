const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const {
  submitApplication,
  getAllApplications,
  acceptCV,
} = require("../controllers/applicationController");

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer setup for CV upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST: Submit Application with CV upload
router.post("/apply", upload.single("cv"), submitApplication);

// GET: Get all received applications
router.get("/applications", getAllApplications);

// POST: Accept a CV (move to accepted list)
router.post("/accept/:id", acceptCV);

module.exports = router;
