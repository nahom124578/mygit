const express = require('express');
const LabProcess = require('./models/db');

const router = express.Router();

app.post('/labTestRequest', async (req, res) => {
  try {
    const {
      patientName,
      patientID,
      doctorName,
      doctorID,
      labTestType,
      testDate,
      urgency
    } = req.body;

    const newLabProcess = new LabProcess({
      patientName,
      patientID,
      doctorName,
      doctorID,
      labTestType,
      testDate,
      urgency
    });

    await newLabProcess.save();

    res.status(201).json({ message: 'Lab test request submitted successfully' });
  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).json({ message: 'Failed to submit lab test request' });
  }
});

module.exports = router;
