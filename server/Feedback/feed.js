const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const connectDB = require('./db');
const Feedback = require('../models/Employee');

const app1 = express();

// Connect to MongoDB
// connectDB();

// Middleware
app1.use(bodyParser.json());
app1.use(cors());

// POST route to save feedback
app1.post('/submit-feedback', async (req, res) => {
  try {
    console.log("Received feedback data:", req.body);
    const { department, feedback, improvement } = req.body;

    const newFeedback = new Feedback({
      department,
      feedback,
      improvement,
    });

    const savedFeedback = await newFeedback.save();

    console.log("Saved feedback:", savedFeedback);

    res.status(200).json({ message: 'Feedback submitted successfully', data: savedFeedback });

  } catch (error) {
    console.error("Error in try-catch:", error);
    res.status(500).json({ message: 'Failed to submit feedback', error: error.message });
  }
});

// Define server port
const PORT = 3002;

// Start server
app1.listen(PORT, () => {
  console.log(`Server is running on  aport ${PORT}`);
});

module.exports=app1;