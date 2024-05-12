const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Router = require('./router/Router')
const app = express();
const cors = require('cors');
const UserModel = require('./models/postInfo')
const ImageModel = require('./models/imageReport')
const ImageReqModel = require('./models/ImageRequest')
const LabProcess = require('./models/db') 
const multer = require('multer') 
const path = require('path')
const Patient = require("./models/patient");
const ImageReq = require("./models/imagings")
const Feedback = require("./models/Feedback")
const reportModel = require("./models/LaboratoryReport")
// pharmacist, medicine model
const MedicineMode = require("./models/MedicineModel")

// for authentication
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { patientDashboard, doctorDashboard } = require('./controllers/dashboardController');
const { loginController, signupController, checkSession, sendPasswordResetMail, verifyOtp, changePassword } = require('./controllers/authController');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect('mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(cors({ credentials: true, origin: `http://localhost:3000` })); // Add this line to enable CORS
app.use(bodyParser.json());

// again for authentication
app.use(session({
	saveUninitialized: true,
    resave: false,
	secret: 'some_secret_keya;a;akjdf',
	proxy: true,
	cookie: {
		secure: true,
		httpOnly: false,
		sameSite: 'none'
	}
	store: MongoStore.create({ mongoUrl: 'mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System' })
}));


app.post('/api/login', loginController);
app.post('/api/signup', signupController);
app.post('/api/forgotPassword', sendPasswordResetMail);
app.post('/api/verifyOtp', verifyOtp);
app.post('/api/changePassword', changePassword);

app.get('/api/checkSession', checkSession);
app.get('/api/dashboard/patient', patientDashboard);
app.get('/api/dashboard/doctor', doctorDashboard);
 
//imaging


//patient list display on Doctor's Page 
const listPatientController = async (req, res) => {
  try {
    const result = await Patient.find({}).exec();
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};


//Doctor Imaging request form
const doctorImageRequestController = async (req, res) => {
  try {
    const ImagingDetail = new ImageReqModel(req.body)
    await ImagingDetail.save()  
    res.status(201).json({ message: "Request uploaded successfully"});

   }
   catch {
    console.log('Error posting the Imaging Detail')
   }
};




app.post("/api/doctor_image_request", doctorImageRequestController);
app.get("/api/list_patient", listPatientController);

app.get("/", (req, res) => {
  res.send("Welcome to the Hospital Management System");
});
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

//Laboratory test request code
app.post('/api/labTestRequest', async (req, res) => {
  try {
    const LabModel = new LabProcess(req.body)
    await LabModel.save()  
    res.status(201).json({ message: 'Lab test request created successfully'});

  }
  catch {
    console.log('Error creating lab test request.')
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

app.get('/api/imagingRequest', async(req, res) => {
  try {
    const result = await ImageReqModel.find({})
    console.log(result)
    res.send(result)
    res.status(200)
  } catch (err) {
    console.log(err)
    res.json(err)
    res.status(500)
  }
})



// start
//the following for medicine database
// route all medicines frm databases
app.get('/medicines',async(request,response)=>{

  try{
      const medicines= await MedicineMode.find({});
      return response.status(202).json({
          count:medicines.length,
          data:medicines
      });
  }
  catch(error){
      console.log(error.message);
      response.status(500).send({message:error.message})
  }
  console.log(request)
  return response.status(201).send('this medicine')
  });
/// adding new medicine 
app.post('/medicines',async(request,response)=>{
  try{
      if(
          !request.body.name ||
          !request.body.manufacturer ||
          !request.body.unit ||
          !request.body.type ||
          !request.body.quantity||
          !request.body.expiryDate 
      )
      {
          return response.status(400).send({
              message:'sends all files required includes name,manufacturer,unit,type,quantity,expiryDate'
          });

      }
      const newMedicine = {
          name: request.body.name,
          manufacturer: request.body.manufacturer, // Corrected here
          unit: request.body.unit,
          type: request.body.type,
          quantity: request.body.quantity,
          expiryDate: request.body.expiryDate,
      };
      
      const medicine = await MedicineMode.create(newMedicine);
      return response.status(201).send(medicine);

  }
  catch(error){
      console.log(error.message);
      console.log("it is not working ")
      response.status(500).send({message:error.message})

  }


  });
/// the database should create on the mongodb
// end

//for user feedback submission form
app.post('/submit-feedback', async (req, res) => {
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

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ports ${PORT}`);
});
