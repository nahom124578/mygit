// const express = require("express");
import express from "express";

// const cors = require("cors");
import cors from "cors";
import mongoose from "mongoose";
// const financeRoute = require("../router/Router");
import createRouter from "./Router.js";
import schemas from "./model.js";
// import cron from "node-cron";
// const schemas = require("../models/Models");
// const cron = require("node-cron");
// schedule to monthly to reset the ispaid of the employee
// cron.schedule("0 0 1 * *", async () => {
//   await schemas.employee.updateMany({}, { isPaid: false });
// });
const finance = express.Router();
finance.use(cors());
finance.use(express.json());
finance.use("/api/v1", createRouter());

// module.exports = finance;
export default finance;
