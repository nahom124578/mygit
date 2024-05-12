// const mongoose = require("mongoose");
import mongoose, { model } from "mongoose";
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
// 1 employee schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: [true, " employee must have a name"] },
  firstName: {
    type: String,
    unique: true,
  },
  employeeID: { type: String, unique: true },
  salary: { type: Number, default: 0 },
  role: { type: String },
  bonus: { type: Number, default: 0 },
  currentMonthPenalty: { type: Number, default: 0 },
  outstandingDebt: { type: Number, default: 0 },
  bankName: { type: String },
  bankAccountNumber: { type: Number },
  onleave: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
});

// 2 expense schema
const expenseschema = new mongoose.Schema({
  year: { type: Number },
  month: { type: Number },
  Category: { type: String },
  BankName: { type: String },
  Amount: { type: Number },
  transactionId: { type: String, default: null },
});

// 3 sold product schema
const soldproductSchema = new mongoose.Schema({
  productId: { type: String },
  name: { type: String },
  unitPrice: { type: Number }, // i think sold quantity and  product id can't work to gether
  itemQuantity: { type: Number },
  category: { type: String },
  totalPrice: { type: Number },
  dateOfSale: { type: Date },
});
// 4 given services schema
const serviceSchema = new mongoose.Schema({
  service_id: { type: String },
  name: { type: String },
  description: { type: String },
  department: { type: String },
  paidAmount: { type: Number },
  paymentMethod: { type: String },
  payerName: { type: String },
});

// MonthlyRevenueRecord schema
const MonthlyRevenueRecordSchema = new mongoose.Schema({
  year: { type: Number },
  month: { type: Number },
  category: { type: String },
  amount: { type: Number, default: 0 },
});

// paid salary schema
const PaidSalarySchema = new mongoose.Schema({
  name: { type: String },
  employeeID: { type: String },
  paidAmount: { type: Number },
  dateOfTransaction: { type: Date },
  bankName: { type: String },
  bankAccountNumber: { type: Number },
  transactionID: { type: String },
});
export const PaidSalary = mongoose.model("PaidSalary", PaidSalarySchema);
export const MonthlyRevenueRecord = mongoose.model(
  "MonthlyRevenueRecord",
  MonthlyRevenueRecordSchema
);
export const service = mongoose.model("Service", serviceSchema);
export const soldproduct = mongoose.model("Sold_products", soldproductSchema);
export const expense = mongoose.model("MonthlyExpenseRecord", expenseschema);
export const employee = mongoose.model("Employee", employeeSchema);
export default {
  PaidSalary,
  MonthlyRevenueRecord,
  service,
  soldproduct,
  expense,
  employee,
};
