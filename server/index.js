const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const labProcessRoutes = require('./LabReq/labProcessRoutes');
const logins= require('./loging/logins');
const appkida= require('./Backend_Appointment/appkida');
const feed = require('./Feedback/feed')
const human_res =require('./The_Manager/human-res')
const Router = require('./router/Router')
const app = express();

const { patientDashboard, doctorDashboard } = require('./controllers/dashboardController');
const { loginController, signupController, checkSession,
    sendPasswordResetMail, verifyOtp, changePassword } = require('./controllers/authController');
const cors = require('cors');
require('dotenv').config();


require('./db');
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

// Routes
app.use('/', labProcessRoutes);
app.use('/api', logins);
app.use('/',feed)
app.use('/api', appkida);
app.use('/', human_res);
app.use('/', Router);
//forlogin
app.post('/api/login', loginController); 
app.post('/api/signup', signupController);
app.post('/api/forgotPassword', sendPasswordResetMail);
app.post('/api/verifyOtp', verifyOtp);
app.post('/api/changePassword', changePassword);

app.get('/api/checkSession', checkSession);
app.get('/api/dashboard/patient', patientDashboard);
app.get('/api/dashboard/doctor', doctorDashboard);


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ports ${PORT}`);
});
