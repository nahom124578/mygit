const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  id: String,
  gender: String,
  dob: String,
  registrationDate: String,
  phoneNumber: String,
  email: String,
  emergencyContact: String,
  streetAddress: String,
  streetAddress2: String
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;