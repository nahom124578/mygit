const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../models/Employee');
const vacancyRecord= require('../models/Employee');
const Employe = require('../models/Employee');

const app = express();
app.use(cors());
app.use(express.json());
// this below is intended for processing a front end request which is intended to make some difference betwen me and u ok man that may not be possible ok man ok man ok man ok man if that is a music its make me to thinks so much ok mn
app.post("/message", async (req, resp) => {
  const { userid, password } = req.body; // destructure a userid and passwords from hireforms and checks if it exist in a database
  try {
    // this below is a file to be saved in a databse ok man!!
    const UserExist = await Employe.findOne({ userid });
    const Passwordcheck = await Employe.findOne({ password });
    if (UserExist || Passwordcheck) {
      resp.status(408).json({
        message: "user already exist and the forms is not submitted failed ",
      });
      console.log("user already exist and the forms is not submitted failed ");
    } else {
      const newUser = new Employe(req.body);
      await newUser.save();
      resp.status(201).json({ message: "your data is succeesfully sent " });
    }
  } catch (error) {
    console.log(error);
    resp.status(404).json({ error: "internal server error " });
  }
});
console.log("server side ok below is a request one !");

app.get("/search/:userid", async (req, resp) => {
  // Trim whitespace from user
  const { userid } = req.params; // destructure Id from this request
  console.log("This is on the server side and the ID is ", userid);
  try {
    const employee = await Employe.findOne({ userid });
    if (employee) {
      resp.json(employee);
      console.log("User is found!");
    } else {
      resp.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    console.error("Error querying database ", error);
    resp.status(500).json({ message: "Internal server error" });
  }
});
// this below is just for a retrieving a stored data !
app.get("/employee", async (req, resp) => {
  try {
    const employees = await Employe.find(); // this is a query
    resp.status(200).json(employees); // send a result to front end
  } catch (error) {
    console.log(error);
  }
});
app.delete("/remove/:userid", async (req, resp) => {
  const { userid } = req.params;
  console.log("this is in server side and id is ", userid);
  try {
    await Employe.findOneAndDelete({ userid });
    resp.status(201).json({ message: "employe deleted successfully" });
  } catch (error) {
    console.log("employee is not deleted guys !!");
    console.log(`internal server error `);
  }
});
app.post("/vacancy", async (req, resp) => {
  try {
    const newUser = new vacancyRecord(req.body);
    await newUser.save();
    resp.status(202).json({ message: "Successfull posted !" });
  } catch (error) {
    console.log(error);
    resp.status(404).json({ message: "internal servor error !" });
  }
});
app.post("/login", async (req, resp) => {
  const { userid, password } = req.body; // to filter out a username and password from a requested forms to compare it in a database !
  // console.log("this is in a server side ok man ");
  // console.log("username:", userid);
  // console.log("passsord:", password);
  try {
    const newUser = await Employe.findOne({ userid });
    // this is used to find a user if it exsit in db
    console.log("wait......");
    if (newUser) {
      resp
        .status(404)
        .json({ error: "User already exist in employee so u can login" });
    } else {
      console.log("user not found ");
    }
  } catch (error) {
    console.log(error);
  }
});
app.listen(8000, () => {
  console.log(`server is running on port ${8000}`);
});

module.exports= app;
