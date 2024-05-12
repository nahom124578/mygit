import mongoose from "mongoose";
mongoose
  // .connect("mongodb://localhost:27017/mydatabase")
  .connect(
    "mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_"
  )
  .then(() => {
    console.log("u have successfully connected guys be happy ");
  })
  .catch((e) => {
    console.log(e);
  });
// let us now create a schema then a collection in database management systems
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
  bonus: {
    type: Number,
  },
  punishment: {
    type: Number,
  },
  attendance: {
    type: Boolean,
    default: false,
  },
  onleave: {
    type: Boolean,
    default: false,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
});
const Vacancy = new mongoose.Schema({
  jobTitle: {
    type: String,
    require: true,
  },
  jobDescription: {
    type: String,
    require: true,
  },
  preferredQualifications: {
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
  Deadline: {
    type: String,
    require: true,
  },
});
// this is intended to create a collection in database ....
const Employe = mongoose.model("employees", Hiremploye);
const vacancyRecord = mongoose.model("VacancyRecord", Vacancy);
/////// this one is for a Feyisa Finance page DB schema
// 2 expense schema

export { Employe, vacancyRecord };
