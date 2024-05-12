import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import {
  sendVacancy,
  messageForm,
  deleteEmployeeById,
  fetchEmployees,
  searchById,
  CountEmploye,
  LoginForm,
  GetVacancy,
  Update,
  EmployeDisplay,
  UpdateEmployes,
  EmployeAttendance,
} from "./RouteForHrPage.js";
import cors from "cors";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(express.json());
app.post("/message", messageForm);
app.get("/search/:userid", searchById);
app.get("/employee", fetchEmployees);
app.get("/getVacancy", GetVacancy);
app.delete("/remove/:userid", deleteEmployeeById);
app.post("/vacancy", sendVacancy);
app.post("/login", LoginForm);
app.put("/update/:userid", Update);
// this is one is for a Employe Dave
/////////////////////////////////////////////
app.get("/display", EmployeDisplay);
app.put("/updateEmploye/:id", UpdateEmployes);
app.get("/count", CountEmploye);
app.post("/attendace", EmployeAttendance);
// const finance = require("./Finance/finance");
import finance from "./component/FinanceController/finance.js";
// updated
app.use(finance);
// the path where the finance frontend page going to be served
// on my divece the page path = ../softwareProject/my-app/build'
// app.use(
//   express.static(path.join(__dirname, "../softwareProject/my-app/build"))
// );
// for this part i think you can create your own router for each pages
app.get(
  [
    "/finance",
    "/paidsalry",
    "/sold-products",
    "/salary-payment",
    "/expense",
    "/revenue",
    "/pay-expense",
    "/sold-products",
    "/hospitalService",
  ],
  (req, res) => {
    // try {
    //   res.sendFile(
    //     path.join(__dirname, "../softwareProject/my-app/build", "index.html")
    //   );
    // } catch {
    //   res.status(404).send("app error");
    // }
  }
);
const jobApplicationSchema = new mongoose.Schema(
  {
    email: String,
    phoneNumber: String,
    cvFileName: String,
    cvFilePath: String,
  },
  { timestamps: true }
);

// Define a model for job applications
const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// API endpoint for submitting a job application
app.post("/submitJobApplication", upload.single("cv"), async (req, res) => {
  const { email, phoneNumber } = req.body;
  const cvFileName = req.file.filename;
  const cvFilePath = req.file.path;

  try {
    const jobApplication = new JobApplication({
      email,
      phoneNumber,
      cvFileName,
      cvFilePath,
    });
    await jobApplication.save();
    res.status(201).json({ message: "Job application submitted successfully" });
  } catch (error) {
    console.error("Error submitting job application:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API endpoint to fetch all job applications
app.get("/jobApplications", async (req, res) => {
  try {
    const jobApplications = await JobApplication.find();
    res.status(200).json(jobApplications);
  } catch (error) {
    console.error("Error fetching job applications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Serve CV files with appropriate headers
app.get("/downloadCV/:cvFileName", (req, res) => {
  const cvFileName = req.params.cvFileName;
  const filePath = path.join(__dirname, "uploads", cvFileName);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  // Set Content-Disposition header to force download
  res.setHeader("Content-Disposition", `attachment; filename=${cvFileName}`);
  res.sendFile(filePath);
});
app.listen(8000, () => {
  console.log(`app is running on port ${8000}`);
});
