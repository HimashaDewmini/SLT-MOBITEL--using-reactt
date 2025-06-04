const express = require("express");
const router = express.Router();
const {
  getAcceptedCVs,
  deleteAcceptedCV,
} = require("../controllers/acceptedCVController");

// GET: All accepted CVs
router.get("/", getAcceptedCVs);

// DELETE: Delete accepted CV by ID
router.delete("/:id", deleteAcceptedCV);

module.exports = router;
