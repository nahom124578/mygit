const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const labProcessRoutes = require('./LabReq/labProcessRoutes');
const logins= require('./loging/logins');
const appkida= require('./Backend_Appointment/appkida');
const feed = require('./Feedback/feed')
const human_res =require('./The_Manager/human-res')
const Router = require('./router/Router')
const server = require('./server');


const cors = require('cors');


const app = express();

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
app.use('/api',feed)
app.use('/api', appkida);
app.use('/', human_res);
app.use('/', Router);
app.use('/',server)


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on ports ${PORT}`);
});
