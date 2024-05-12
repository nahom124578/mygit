import express from "express"; 
import cors from 'cors'; // Import cors package
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3008, () => {
    console.log("Server is listening on port 3008....");
})

app.use(cors({
    origin: '*',//'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  }));

let ContentArchiveDB

MongoClient.connect("mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System")
.then((client) => {
    ContentArchiveDB = client.db();
})
.catch((err) => console.log(err));

app.get('/content_archive', 
    async (req, res) => {
        while(!ContentArchiveDB){
            console.log("Please wait until connection with database is made...")
            await new Promise(resolve => setTimeout(resolve, 2000))
        }
        ContentArchiveDB
        .collection("Content")
        .find()
        .toArray()
        .then((result) => {
            res.status(200).send(result) 
        })
        .catch(err => {
            res.status(501).json({err: "Error - could not fetch the documents" })
        })
}) 


app.get('/content_archive/:input_title', 
    async (req, res) => {
        while(!ContentArchiveDB){
            console.log("Please wait until connection with database is made...")
            await new Promise(resolve => setTimeout(resolve, 2000))
        }
        ContentArchiveDB
        .collection("Content")
        .find({title : { $regex: new RegExp(req.params.input_title, 'i') }})
        .toArray()
        .then((result) => {
            res.status(200).send(result) 
        })
        .catch(err => {
            res.status(501).json({err: "Error - could not fetch the documents" })
        })
}) 


app.get('/patient/count', (req,res) => {
    MongoClient.connect("mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System")
    .then(result => {
        result
        .db()
        .collection("patients")
        .countDocuments()
        .then(patientCount => {res.json({patientCount})})
    })
    .catch(err => console.log("Could not fetch patients' data..."+err))
})

app.get('/patient', (req, res) => {
    MongoClient.connect("mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System")
    .then(result => {
        result
        .db()
        .collection("patients")
        .find()
        .toArray()
        .then(patientListResult => {res.send(patientListResult)})
    })
    .catch(err => console.log("Could not fetch patients' data..."+err))
})

app.get('/feedback', (req, res) => {
    MongoClient.connect("mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System")
    .then(result => {
        result
        .db()
        .collection("Feedback")
        .find()
        .toArray()
        .then(feedbackListResult => {res.send(feedbackListResult)})
    })
    .catch(err => console.log("Could not fetch feedback data..."+err))
})
    
app.get('/employees', (req, res) => {
    MongoClient.connect("mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_")
    .then(result => {
        result
        .db()
        .collection("employees")
        .find()
        .toArray()
        .then(staffListResult => {res.send(staffListResult)})
    })
    .catch(err => console.log("Could not fetch staffs' data..."+err))
})
