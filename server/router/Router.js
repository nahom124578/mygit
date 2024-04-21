const express = require('express');
const cors = require('cors')
const financeController = require('../controllers/controllers')


const router= express();
router.use(cors());
router.use(express.json());
 
   router
   .route('/revenue')
   .get(financeController .getRevenue);
  

   router
   .route('/soldproduct')
   .get(financeController.getSoldProduct);
   

    router
    .route('/services')
    .get(financeController .getGivenServices);

    router
    .route('/expenses')
    .get(financeController .getExpense)
    .post(financeController .payEpense);
    
    router
    .route('/salary')
    .get(financeController.getEmployee)
    .patch(financeController .changeEmployeeInfo)
    .post(financeController .payEmployee);
    router
    .route('/paidsalary')
    .get(financeController.getPaidSalary);


    module.exports = router;
