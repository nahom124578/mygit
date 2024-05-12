// import Usercontroller from "./Usercontroller.js";
// const Usercontroller = require("./Usercontroller.js");
import express from "express";
import { User } from "./Mongodb.js";
const router = express.Router(); // this is a front end router ok mans
//router.post("/",Usercontroller.createusername)->this is when a reuest is done by reaact from front end to back end by using a axios or other http request and make a post request to backend
// router.get("/:id",Usercontroller.getid);-> this is when a retrievalis want to be made from a backend to front end by using a id in Db

// module.exports =router;
router.post("/", async (req, res) => {
  try {
    const newusers = new User(req.body);
    await newusers.save();
    res.status(201).json(newusers);
    console.log("successfully registered !!");
  } catch (error) {
    res.status(404).json({ error: "internal server error " });
  }
});
// router.get("/:id", Usercontroller.getById); // this is mainlt a query from a front end to fetch a data from a backend db
export { router };
