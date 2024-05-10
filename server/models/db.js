const mongoose = require('mongoose');

const labProcessSchema = new mongoose.Schema({
  patientName: String,
  patientID: String,
  doctorName: String,
  doctorID: String,
  labTestType: String,
  testDate: Date,
  urgency: String,
  status: { type: String, default: 'pending' } // default status is 'pending'
}, {
  collection: 'Lab_Process' // set the collection name
});

const LabProcess = mongoose.model('LabProcess', labProcessSchema);

module.exports = LabProcess;
