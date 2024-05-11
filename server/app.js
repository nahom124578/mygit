const ImageReq = require("./model/imagings");
const Patient = require("./model/patient");
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express(); //creating an express app
app.use(express.json()); //
app.use(cors()); //cross origin resource sharing




// LOgicccc


const listPatientController = async (req, res) => {
  try {
    const result = await Patient.find({}).exec();
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};







const doctorImageRequestController = async (req, res) => {
  try {
    const NewDoctorImageRequest = new ImageReq({
      patient_name: req.body.patient_name,
      physician_name: req.body.physician_name,
      physician_contact: req.body.physician_contact,
      dob: req.body.dob,
      gender: req.body.gender,
      imaging_procedure: req.body.imaging_procedure,
      clinical_indication: req.body.clinical_indication,
      special_instructions: req.body.special_instructions,
    });
    await NewDoctorImageRequest.save();
    res
      .status(200)
      .json({ message: "Imaging Request Saved Successfully successfully" });
  } catch (err) {
    res.status(500).json({ error: "Somthing Went Wrong!" });
  }
};




app.post("/api/doctor_image_request", doctorImageRequestController);
app.get("/api/list_patient", listPatientController);

app.get("/", (req, res) => {
  res.send("Welcome to the Hospital Management System");
});




mongoose
  .connect(
    "mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System"
  )
  .then((result) => {
    console.log("connected to database successfully");
    app.listen(3001, () => {
      console.log(" listening on port");
    }); //listen for requests on port 3000
  });



module.exports = app;