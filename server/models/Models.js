const mongoose = require('mongoose');





// 1 employee schema
const employeeSchema = new mongoose.Schema({
        name :                   {type:String,  required: [true, ' employee must have a name']},
        employeeID :             {type:String,  unique: true,},
        salary:                  {type:Number,  default:0},
        role:                    {type:String},
        bonus:                   {type:Number,  default:0},
        currentMonthPenalty:     {type:Number,  default:0},
        outstandingDebt:         {type:Number,  default:0},
        bankName:                {type:String},
        bankAccountNumber:       {type:Number},
        onleave:                 {type:Boolean, default:false},
        isPaid:                  {type:Boolean, default: false}
        });

// 2 expense schema
const expenseschema = new mongoose.Schema({
        year:           {type:Number},
        month:          {type:Number},
        Category:       {type:String},
        Amount:         {type:Number},
        transactionId:  {type:String,default:null}});


// 3 sold product schema
const soldproductSchema = new mongoose.Schema({
   
        productId:      {type:String},
        name:           {type:String},
        unitPrice:      {type:Number},// i think sold quantity and  product id can't work to gether
        itemQuantity:   {type:Number},
        category:       {type:String},
        totalPrice:     {type:Number},
        dateOfSale:     {type:Date}
      });


// 4 given services schema
const serviceSchema = new mongoose.Schema({  
        service_id:       {type:String},
        name:             {type:String},
        description:      {type:String},
        department:       {type:String},
        paidAmount:       {type:Number},
        paymentMethod:    {type:String},
        payerName:        {type:String}

});



// MonthlyRevenueRecord schema
const MonthlyRevenueRecordSchema = new mongoose.Schema({
        year:       {type:Number},
        month:      {type:Number},
        category:   {type:String},
        amount:     {type:Number,default:0}
    }
);

// paid salary schema
const PaidSalarySchema= new mongoose.Schema({
        name:               {type:String},
        employeeID:         {type:String},
        paidAmount:         {type:Number},
        dateOfTransaction:  {type:Date},
        bankName:           {type:String},
        bankAccountNumber:  {type:Number},
        transactionID:      {type:String}
});





    exports.PaidSalary           = mongoose.model('PaidSalary',PaidSalarySchema);
    exports.MonthlyRevenueRecord = mongoose.model('MonthlyRevenueRecord',MonthlyRevenueRecordSchema);
    exports.service              = mongoose.model('Service',serviceSchema);
    exports.soldproduct          = mongoose.model('Sold_products',soldproductSchema);
    exports.expense              = mongoose.model('MonthlyExpenseRecord',expenseschema);
    exports.employee             = mongoose.model('Employees',employeeSchema);




