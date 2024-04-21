const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
        firstName:String ,
        lastName:String,
        dateOfBirth:String,
        gender:String,
        role:String,
        username:String,
        phoneNumber:String,
        email:String,
        password:String,
        confirmPassword:String
});
const labProcessSchema = new mongoose.Schema({
        patientName: String,
        patientID: String,
        doctorName: String,
        doctorID: String,
        labTestType: String,
        testDate: Date,
        urgency: String,
        status: { type: String, default: 'pending' } // default status is 'pending'
      }, {
        collection: 'Lab_Process' // set the collection name
});
const feedbackSchema = new mongoose.Schema({
        department: {
          type: String,
          required: true
        },
        feedback: {
          type: Object,
          required: true
        },
        improvement: {
          type: String,
          required: true
        },
        timestamp: {
          type: Date,
          default: Date.now
        }
      }, {
        collection: 'Feedback' // Specify collection name as 'Feedback'
      });
      
      const schema = new mongoose.Schema({
        firstname: {
          type: String,
          require: true,
        },
        lastName: {
          type: String,
          require: true,
        },
        age: {
          type: Number,
          require: true,
        },
      });
      const Hiremploye = mongoose.Schema({
        firstName: {
          type: String,
          require: true,
        },
        lastName: {
          type: String,
          require: true,
        },
        specialization: {
          type: String,
          require: true,
        },
        role: {
          type: String,
          require: true,
        },
        department: {
          type: String,
          require: true,
        },
        email: {
          type: String,
          require: true,
        },
        startDate: {
          type: String,
          require: true,
        },
        salary: {
          type: Number,
          require: true,
        },
        phoneNumber: {
          type: Number,
          require: true,
        },
        salary: {
          type: Number,
          require: true,
        },
        address: {
          type: String,
          require: true,
        },
        birthday: {
          type: String,
          require: true,
        },
        gender: {
          type: String,
          require: true,
        },
        userid: {
          type: String,
          require: true,
        },
        password: {
          type: String,
          require: true,
        },
        bank: {
          type: Number,
          require: true,
        },
        emergencyContact: {
          type: Number,
          require: true,
        },
      });
      const Vacancy = new mongoose.Schema({
        jobTitle: {
          type: String,
          require: true,
        },
        jobDescrption: {
          type: String,
          require: true,
        },
        preferdQualification: {
          type: String,
          require: true,
        },
        requiredQualifications: {
          type: String,
          require: true,
        },
        applicationInstructions: {
          type: String,
          require: true,
        },
        publishDate: {
          type: String,
          require: true,
        },
      });
      
      const User = mongoose.model("User", schema); // this is intended to create a collection in database ....
      const Employe = mongoose.model("employees", Hiremploye);
      const vacancyRecord = mongoose.model("VacancyRecord", Vacancy);

    
      
const Feedback = mongoose.model('Feedback', feedbackSchema);
const LabProcess = mongoose.model('LabProcess', labProcessSchema);
const EmployeeModel = mongoose.model("Employee",EmployeeSchema)

module.exports = EmployeeModel;
module.exports = LabProcess;
module.exports = Feedback;
module.exports =  User;
module.exports =Employe;
module.exports =vacancyRecord;
      