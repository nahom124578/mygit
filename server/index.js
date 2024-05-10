const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Router = require('./router/Router')
const app = express();
const cors = require('cors');
const UserModel = require('./models/postInfo')
const ImageModel = require('./models/imageReport')
const multer = require('multer') 
const path = require('path')

require('dotenv').config();

// Connect to MongoDB
mongoose.connect('mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json()); 
//lab request display
app.put('/update/:id', async (req, res) => {
  try {
      const id = req.params.id; // Get the ID of the request to update
      // Update the request with the specified ID to set 'checked' to true
      await requestModel.findByIdAndUpdate(id, { checked: true });
      // Respond with a success message
      res.status(200).json({ message: 'Document updated successfully' });
  } catch (error) {
      // If an error occurs, respond with an error message
      res.status(500).json({ error: 'Failed to update document' });
  }
});

// Define the GET endpoint for retrieving unchecked lab requests
app.get('/api/labrequest', (req, res) => {
  // Find all lab requests where 'checked' is false
  requestModel.find({ checked: false })
      .then(requests => res.json(requests)) // Respond with the found requests
      .catch(err => res.json(err)); // If an error occurs, respond with the error
});
//lab report send
app.post('/api/labresult', async (req, res) => {
  try {
      const newTest = req.body;

      // Check if required fields are present
      if (!newTest.patientID || !newTest.requestID || !newTest.person || !newTest.ID) {
          console.log("Please fill all required field");
          // Respond with a 400 status code and an error message if any required field is missing
          return res.status(400).json({ error: 'Please fill all required field' });
      }

      // Create a new document based on the request body and save it to the database
      const newForm = new reportModel(newTest);
      const response = await newForm.save();
      console.log(response);
      
      // Respond with a 201 status code and a success message
      res.status(201).json({ message: 'Laboratory report successfully sent!' });
  } catch (error) {
      // If an error occurs, respond with a 500 status code and an error message
      console.error('Failed to submit form:', error);
      res.status(500).json({ error: 'Unable to report data. Try again later.' });
  }
});

//lab request
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

//configuring the server disk storage for image storage and other files
const storage = multer.diskStorage(
  {
    destination: (req, file, cb) => {
      cb(null, './server/Public/images') //first parameter is an error
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
  }
)

const upload  = multer({
  storage: storage
})


//for the radiologist image
app.post('/api/uploadRadImage',upload.single('image'), async (req, res) => {
  try {
    const image = req.file
    const imageUrl = `./server/Public/images/${image.filename}`

    const newDetail = new ImageModel ({
      image: imageUrl,
      details: req.body.details
    })

    await newDetail.save()
  }
  catch(err) {
    console.log(err)
  }
})


// to update an appointment
app.put('/api/updateApp/:upId', async (req, res) => {
    const { upId } = req.params;
    const updatedData = req.body;
    console.log(updatedData)  

    try {

      const user = await UserModel.findByIdAndUpdate(upId, updatedData, { new: true }); 
      console.log(user)
      if (!user) {
        console.log(upId)
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  });

//to sChedule new appointments
app.post('/api/posts', async(req, res) => {
   try {
    const AppDetail = new UserModel(req.body)
    const newPost = await AppDetail.save()  
    const newPostID = newPost._id
    res.status(201).json({ message: 'Post created successfully', postId: newPostID });

   }
   catch {
    console.log('Error posting the Appointment Detail')
   }
})

//to delete an appointment
app.delete('/api/deleteApp/:id', async(req, res) => {
    const {id} = req.params
    try {
     await UserModel.findByIdAndDelete(id)
     res.status(201).json({ message: 'Cancelled successfully'});
    }
    catch {
     console.log('Document not found')
    }
 })


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ports ${PORT}`);
});
