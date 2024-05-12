// import from "./model.js";
// import expense from "./model.js";
import {
  PaidSalary,
  MonthlyRevenueRecord,
  service,
  soldproduct,
  expense,
  employee,
} from "./model.js";
import { Employe } from "../Mongodb.js";
// 1 handling salary payment
export const getEmployee = async (req, res) => {
  //reading
  try {
    console.log("heloo from emplyee");
    let e = await Employe.find();

    // console.log("this is a e : ", e);
    for (let i = 0; i < e.length; i++) {
      e[i]["name"] = e[i]["firstName"];
    }
    //console.log("this is after e : ", e);
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
    await PaidSalary.create(p);
    await employee.updateOne({ _id: req.body["_id"] }, { isPaid: true });
    res.status(200).send("ok");
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};

export const getPaidSalary = async (req, res) => {
  try {
    const p = await PaidSalary.find();
    res.status(200).send(p);
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};

export const changeEmployeeInfo = async (req, res) => {
  // updating
  try {
    await employee.updateOne({ _id: req.body["_id"] }, req.body);
    res.status(200).send("Succeded");
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};
//2 handling the expense payment
export const payEpense = async (req, res) => {
  // creating
  console.log("this is a expense !");
  try {
    const currentDate = new Date();
    const Year = currentDate.getFullYear();
    const Month = currentDate.getMonth() + 1;
    req.body["year"] = Year;
    req.body["month"] = Month;
    // const newUser = new expense(req.body);
    // await newUser.save();
    // console.log("this is Database ");
    await expense.create(req.body);
    res.status(200).json("Successfully summitted !");
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};

export const getExpense = async (req, res) => {
  // reading
  try {
    const e = await expense.find();
    res.status(200).send(e);
  } catch {
    res.status(404).json({ error: "Internal server error" });
  }
};

//3 handling given sesrvices
export const getGivenServices = async (req, res) => {
  // reading
  try {
    const s = await service.find();
    res.status(200).send(s);
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};
//4  handling sold product
export const getSoldProduct = async (req, res) => {
  try {
    const e = await soldproduct.find();
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
  const r = await MonthlyRevenueRecord.find({
    month: Month,
    category: "soldProduct",
  });
  if (r.length === 0) {
    await MonthlyRevenueRecord.create({
      year: Year,
      month: Month,
      category: "soldProduct",
      amount: req.body["totalPrice"],
    });
  } else {
    const a = r["amount"] + req.body["totalPrice"];
    await MonthlyRevenueRecord.updateOne(
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
  const r = await MonthlyRevenueRecord.find({
    month: Month,
    category: "givenService",
  });
  if (r.length === 0) {
    await MonthlyRevenueRecord.create({
      year: Year,
      month: Month,
      category: "givenService",
      amount: req.body["paidAmount"],
    });
  } else {
    const a = r["amount"] + req.body["paidAmount"];
    await MonthlyRevenueRecord.updateOne(
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
    const r = await MonthlyRevenueRecord.find();

    res.status(200).send(r);
  } catch (err) {
    res.status(404).json({ error: "Internal server error" });
  }
};
