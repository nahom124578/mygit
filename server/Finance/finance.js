    const express = require('express');
   
    const cors = require('cors')
    const path = require('path');
    const financeRoute= require('../router/Router')
    const schemas = require('../models/Models');
    const cron = require('node-cron');


// schedule to monthly to reset the ispaid of the employee
    cron.schedule('0 0 1 * *',  async()  => {
        await schemas.employee.updateMany({},{isPaid:true});
            });

    const finance= express();
    finance.use(cors());
    finance.use(express.json());
    finance.use(express.static(path.join(__dirname,'../../softwareProject/my-app/build')));   
    finance.use('/api/v1',financeRoute);
 module.exports = finance;
  
      

