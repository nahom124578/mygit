import express from "express";
import cors from "cors";
import {
  getRevenue,
  serviceRevenue,
  productRevenue,
  getSoldProduct,
  getGivenServices,
  getExpense,
  payEpense,
  changeEmployeeInfo,
  getPaidSalary,
  payEmployee,
  getEmployee,
} from "./controller.js";

// Define a function to create and configure the router
function createRouter() {
  const router = express.Router();

  router.use(cors());
  router.use(express.json());

  router.route("/revenue").get(getRevenue);
  router.route("/soldproduct").get(getSoldProduct);
  router.route("/services").get(getGivenServices);
  router.route("/expenses").get(getExpense).post(payEpense);
  ///api/v1/expenses
  router
    .route("/salary")
    .get(getEmployee)
    .patch(changeEmployeeInfo)
    .post(payEmployee);
  router.route("/paidsalary").get(getPaidSalary);
  return router;
}

// Export the function to create the router
export default createRouter;
