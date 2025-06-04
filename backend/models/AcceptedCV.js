const mongoose = require('mongoose');

const acceptedSchema = new mongoose.Schema({
  fullname: String,
  gender: String,
  field: String,
  contact: String,
  cv: String
});

module.exports = mongoose.model('Accepted', acceptedSchema);
