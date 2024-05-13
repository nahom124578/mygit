// this below is intended for processing a front end request which is intended to make some difference betwen me and u ok man that may not be possible ok man ok man ok man ok man if that is a music its make me to thinks so much ok mn
// i have just created this files to simply and make a code to easly manage it
const { Employe, vacancyRecord } = require("./component/Mongodb.js"); // this will make a server to connect to a database systems
const { MongoClient, ObjectId } = require("mongodb");
let MyConnectionDB;
let MyAttendanceConnectionDB;
const mongoconnection =
  "mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/";
MongoClient.connect(mongoconnection).then((client) => {
  MyConnectionDB = client.db("Hospital_Management_");
  MyAttendanceConnectionDB = client.db("Hospital_Management_System");
});
export const messageForm = async (req, resp) => {
  const { userid, password } = req.body;
  try {
    const UserExist = await Employe.findOne({ userid });
    const Passwordcheck = await Employe.findOne({ password });
    if (UserExist || Passwordcheck) {
      resp.status(408).json({
        message: "User already exists and the form submission failed.",
      });
      console.log("User already exists and the form submission failed.");
    } else {
      const newUser = new Employe(req.body);
      await newUser.save();
      resp.status(201).json({ message: "Your data was successfully sent." });
    }
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Internal server error." });
  }
};

export const searchById = async (req, resp) => {
  const { userid } = req.params;
  try {
    const employee = await Employe.findOne({ userid });
    if (employee) {
      resp.json(employee);
      console.log("User is found!");
    } else {
      resp.status(404).json({ message: "Employee not found." });
    }
  } catch (error) {
    console.error("Error querying database: ", error);
    resp.status(500).json({ message: "Internal server error." });
  }
};

export const fetchEmployees = async (req, resp) => {
  try {
    const employees = await Employe.find();
    resp.status(200).json(employees);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Internal server error." });
  }
};

export const deleteEmployeeById = async (req, resp) => {
  const { userid } = req.params;
  try {
    await Employe.findOneAndDelete({ userid });
    resp.status(201).json({ message: "Employee deleted successfully." });
  } catch (error) {
    console.log("Employee deletion failed.");
    console.log("Internal server error.");
    resp.status(500).json({ error: "Internal server error." });
  }
};

export const sendVacancy = async (req, resp) => {
  try {
    const newUser = new vacancyRecord(req.body);
    await newUser.save();
    resp.status(202).json({ message: "Vacancy successfully posted." });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Internal server error." });
  }
};
export const LoginForm = async (req, resp) => {
  const { userid, password } = req.body; // to filter out a username and password from a requested forms to compare it in a database !
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
};
export const Update = async (req, resp) => {
  const { userid } = req.params;
  console.log("this is a user id for a edit button here ", userid);
  const { punishment, bonus } = req.body;
  try {
    // Find the employee by userid and update their data
    const updatedEmployee = await Employe.findOneAndUpdate(
      { userid },
      { $set: { punishment, bonus } },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return resp.status(404).json({ message: "Employee not found" });
    }

    return resp
      .status(200)
      .json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    console.error("Error updating employee:", error);
    return resp.status(500).json({ message: "Internal server error" });
  }
};
export const GetVacancy = async (req, resp) => {
  console.log("server of a vacancy is here man ");
  try {
    const response = await vacancyRecord.find().sort({ _id: -1 }).limit(1);
    console.log("here in server side is beauty", response.length);
    if (response.length === 0) {
      return resp.status(404).json({ message: "No vacancies found" });
    }
    const vacancy = response[0]; // Extract the vacancy record from the response

    resp.status(200).json(vacancy); // Send only the vacancy object to the frontend
    console.log("here is the first one ", vacancy);
  } catch (error) {
    console.log("not successfull");
    console.log(error);
    resp.status(500).json({ message: "Internal server error" });
  }
};
export const EmployeDisplay = async (req, res) => {
  try {
    const employeed = await MyConnectionDB.collection("employees")
      .find()
      .toArray();
    res.status(200).json(employeed);
    console.log(employeed);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const UpdateEmployes = (req, res) => {
  MongoClient.connect(mongoconnection)
    .then((client) => {
      const db = client.db("Hospital_Management_");

      const collection = db.collection("employees");

      const objectId = ObjectId.isValid(req.params.id)
        ? new ObjectId(req.params.id)
        : null;
      if (!objectId) {
        throw new Error("Invalid ObjectId");
      }
      const updateFields = { $set: req.body };

      return collection.updateOne({ _id: objectId }, updateFields);
    })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send(error.toString());
    });
};
export const EmployeAttendance = (req, res) => {
  MyAttendanceConnectionDB.collection("Attendance")
    .insertOne(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not add the document" });
    });
};
export const CountEmploye = async (req, res) => {
  try {
    if (!MyConnectionDB) {
      return res
        .status(200)
        .json({ error: "Database connection not established" });
    }

    const employeeCountByDepartment = await MyConnectionDB.collection(
      "employees"
    )
      .aggregate([
        {
          $group: {
            _id: "$role",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: "$_id",
            count: { $cond: [{ $eq: ["$_id", null] }, 0, "$count"] },
          },
        },
      ])
      .toArray();
    res.status(200).json(employeeCountByDepartment);
  } catch (error) {
    console.error("Error fetching employees by department:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Consider more specific error messages
  }
};
//////////////////////////////////////////////////////////////////
///// this is for a FEYISA fINANCE PAGE///////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// const schemas = require("../models/Models");
// 1 handling salary payment
export const getEmployee = async (req, res) => {
  //reading
  try {
    const e = await schemas.employee.find();
    res.status(200).send(e);
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};
export const payEmployee = async (req, res) => {
  try {
    let body = req.body;
    let p = {
      Name: body.name,
      employeeID: body.employeeID,
      paidAmount: body.salary,
      dateOfTransaction: new Date(),
      bankName: body.bankName,
      bankAccountNumber: body.bankAccountNumber,
      transactionID: body.transactionID,
    };
    await schemas.PaidSalary.create(p);
    await schemas.employee.updateOne(
      { _id: req.body["_id"] },
      { isPaid: true }
    );
    res.status(200).send("ok");
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};

export const getPaidSalary = async (req, res) => {
  try {
    const p = await schemas.PaidSalary.find();
    res.status(200).send(p);
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};

export const changeEmployeeInfo = async (req, res) => {
  // updating
  try {
    await schemas.employee.updateOne({ _id: req.body["_id"] }, req.body);
    res.status(200).send("Succeded");
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};

//2 handling the expense payment
export const payEpense = async (req, res) => {
  // creating
  try {
    const currentDate = new Date();
    const Year = currentDate.getFullYear();
    const Month = currentDate.getMonth() + 1;

    req.body["year"] = Year;
    req.body["month"] = Month;
    await schemas.expense.create(req.body);
    res.status(200).json("Successfully summitted !");
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};

export const getExpense = async (req, res) => {
  // reading
  try {
    const e = await schemas.expense.find();
    res.status(200).send(e);
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};

//3 handling given sesrvices
export const getGivenServices = async (req, res) => {
  // reading
  try {
    const s = await schemas.service.find();
    res.status(200).send(s);
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};
//4  handling sold product
export const getSoldProduct = async (req, res) => {
  try {
    const e = await schemas.soldproduct.find();
    res.status(200).send(e);
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};

// create revenue when  product get sold
// this is not an api it is afuction which going to be used to create revenue when product get sold
// revoved  when product get sold as middle ware
// those of you who are going integrate back end please use this two controllers where sold product and given services are registred
//########################################################################################################################
export const productRevenue = async (req, res) => {
  const currentDate = new Date();
  const Year = currentDate.getFullYear();
  const Month = currentDate.getMonth() + 1;
  const r = await schemas.MonthlyRevenueRecord.find({
    month: Month,
    category: "soldProduct",
  });
  if (r.length === 0) {
    await schemas.MonthlyRevenueRecord.create({
      year: Year,
      month: Month,
      category: "soldProduct",
      amount: req.body["totalPrice"],
    });
  } else {
    const a = r["amount"] + req.body["totalPrice"];
    await schemas.MonthlyRevenueRecord.updateOne(
      { month: Month, category: "soldProduct" },
      { amount: a }
    );
  }
};

// this function also going to be used as middle ware when given service get registered
export const serviceRevenue = async (req, res) => {
  const currentDate = new Date();
  const Year = currentDate.getFullYear();
  const Month = currentDate.getMonth() + 1;
  const r = await schemas.MonthlyRevenueRecord.find({
    month: Month,
    category: "givenService",
  });
  if (r.length === 0) {
    await schemas.MonthlyRevenueRecord.create({
      year: Year,
      month: Month,
      category: "givenService",
      amount: req.body["paidAmount"],
    });
  } else {
    const a = r["amount"] + req.body["paidAmount"];
    await schemas.MonthlyRevenueRecord.updateOne(
      { month: Month, category: "givenService" },
      { amount: a }
    );
  }
};

//########################################################################################################################################

// 5 handling revenue
export const getRevenue = async (req, res) => {
  // reading
  try {
    const r = await schemas.MonthlyRevenueRecord.find();

    res.status(200).send(r);
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};
