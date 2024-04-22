// entry point of the app
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
require('dotenv').config();

const { patientDashboard, doctorDashboard } = require('./controllers/dashboardController');
const { loginController, signupController, checkSession,
    sendPasswordResetMail, verifyOtp, changePassword } = require('./controllers/authController');

const app = express();
const PORT = 5000;
const CLIENT_PORT = 3007;

// connect to db
require('./db')();

app.use(cors({ credentials: true, origin: `http://localhost:${CLIENT_PORT}` }));
app.use(express.json());
// app.use(session({
//     saveUninitialized: false,
//     resave: false,
//     secret: process.env.SECRET_KEY,
//     store: MongoStore.create({ mongoUrl: process.env.DB_URL })
// }));

app.post('/api/login', loginController); 
app.post('/api/signup', signupController);
app.post('/api/forgotPassword', sendPasswordResetMail);
app.post('/api/verifyOtp', verifyOtp);
app.post('/api/changePassword', changePassword);

app.get('/api/checkSession', checkSession);
app.get('/api/dashboard/patient', patientDashboard);
app.get('/api/dashboard/doctor', doctorDashboard);

module.exports=app;