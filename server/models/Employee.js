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
      const Hiremploye = new mongoose.Schema({
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
      const reportSchema = new mongoose.Schema({
        patientID: {
            type: String,
            required: true // patientID is required
        },
        requestID: {
            type: String,
            required: true // requestID is required
        },
        testDate: {
            type: Date,
            default: Date.now // Set default value to current timestamp
        },
        testName: {
            type: String,
            default: null // Default value for testName is null
        },
        testType: {
            type: String,
            default: null // Default value for testType is null
        },
        testValue: {
            type: String,
            default: null // Default value for testValue is null
        },
        unit: {
            type: String,
            default: null // Default value for unit is null
        },
        person: {
            type: String,
            required: true // person is required
        },
        ID: {
            type: String,
            required: true // ID is required
        }
    });
    const requestSchema = new mongoose.Schema({
      checked: Boolean, // Whether the request has been checked
      patientName: String, // Name of the patient
      patientID: String, // ID of the patient
      doctorName: String, // Name of the doctor
      doctorID: String, // ID of the doctor
      labTestType: String, // Type of lab test requested
      testDate: Date, // Date of the test
      urgency: Boolean, // Whether the request is urgent
  });
  const ImgReqSchema = new Schema({
    patient_name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30
    },
    physician_name: {
        type : String,
        required: true,
        minLength: 4,
        maxLength: 30

    },
    physician_contact: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10

    },
    dob: {
        type: Date,
        required: true
    },
    
    gender: {
        type : String,
        required: true,
        enum: ['Male', 'Female']
    },
    imaging_procedure: {
        type: String,
        required: true,
        enum: ['CT Scan', 'MRI', 'X-Ray', 'Ultrasound']

    },
    clinical_indication: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 1024

    },
    special_instructions: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 1024

    }
})

const ImageReq =   mongoose.model("imagings", ImgReqSchema);





  
  // Create a Mongoose model based on the request schema
  const requestModel = mongoose.model("LabRequest", requestSchema);
  
    
    // Create a Mongoose model based on the schema
    const reportModel = mongoose.model("LabReport", reportSchema);
    
      
      const User = mongoose.model("User", schema); // this is intended to create a collection in database ....
      const employes_list = mongoose.model("employes_list", Hiremploye);
      const vacancyRecord = mongoose.model("VacancyRecord", Vacancy);

    
      
const Feedback = mongoose.model('Feedback', feedbackSchema);
const LabProcess = mongoose.model('LabProcess', labProcessSchema);
const EmployeeModel = mongoose.model("Employee",EmployeeSchema)

module.exports = EmployeeModel;
module.exports = LabProcess;
module.exports = Feedback;
module.exports =  User;
module.exports =employes_list;
module.exports =vacancyRecord;
module.exports = reportModel;
module.exports= requestModel;
module.exports = ImageReq;
      