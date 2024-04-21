const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('../models/Employee');

const router = express();

// router.use(express.json()); // Corrected invocation
// router.use(cors());

// mongoose.connect("mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System");

// router.post('/login', (req, res) => {
//     const{username,password}= req.body;
//     console.log(req.body)
//     EmployeeModel.findOne({username:username}) // Corrected typo
//         .then(user=>{
//             if (user){
//                 if (user.password=== password){
//                     res.json("yes")
//                 }
//                 else{
//                     res.jso("the password is incorrect")
//                 }
//             }
//             else{
//                res.json("not registered") 
//             }
//         }) // Return response inside .then()
//         .catch(err => res.json(err));
// });

router.post('/register', (reqq, res) => {
    console.log(reqq.body)
    EmployeeModel.create(reqq.body) // Corrected typo
        .then(Hospital_Management_System => res.json(Hospital_Management_System)) // Return response inside .then()
        .catch(err => res.json(err));
});

module.exports=router;