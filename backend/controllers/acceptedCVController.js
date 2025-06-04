const AcceptedCV = require('../models/AcceptedCV');

// Get all accepted CVs
const getAcceptedCVs = async (req, res) => {
  try {
    const cvs = await AcceptedCV.find();
    res.status(200).json(cvs);
  } catch (error) {
    console.error("Fetch Accepted Error:", error);
    res.status(500).json({ message: "Failed to fetch accepted CVs" });
  }
};

// Delete accepted CV
const deleteAcceptedCV = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCV = await AcceptedCV.findByIdAndDelete(id);

    if (!deletedCV) {
      return res.status(404).json({ message: "CV not found" });
    }

    res.status(200).json({ message: "CV deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error.message);
    res.status(500).json({ message: "Failed to delete CV", error: error.message });
  }
};

module.exports = {
  getAcceptedCVs,
  deleteAcceptedCV,
};
