const schemas = require('../models/Models');
        // 1 handling salary payment
    exports.getEmployee = async (req,res)=>{ 
            //reading
            try {console.log(req.body);
                const e = await schemas.employee.find();
                res.status(200).send(e);
            }catch (err){console.log(err);
                res.status(404).json({ error: 'Internal server error' });}};


    exports.payEmployee = async(req,res)=>{ 
        try{
            let body= req.body;  
            let p= { Name:              body.name,
                     employeeID:        body.employeeID,
                     paidAmount:        body.salary,
                     dateOfTransaction: new Date(),
                     bankName:          body.bankName,
                     bankAccountNumber: body.bankAccountNumber,
                     transactionID :    body.transactionID
                };
         await schemas.PaidSalary.create(p);
         await schemas.employee.updateOne({_id:req.body['_id']},{isPaid:true});
         res.status(200).send('ok');
        }
        catch(err){
             res.status(404).json({ error: 'Internal server error' });
        }
    };


    exports.getPaidSalary = async(req,res) => {
        try{
            const p = await schemas.PaidSalary.find();
            res.status(200).send(p);
        }
        catch{
            res.status(404).json({ error: 'Internal server error' });
        }
    };

    exports.changeEmployeeInfo = async(req,res)=>{
        // updating
            try {
            await schemas.employee.updateOne({_id:req.body['_id']},req.body);
            res.status(200).send('Succeded');
            
             }catch {
            res.status(404).json({ error: 'Internal server error' });  }
    };

    //2 handling the expense payment
    exports.payEpense= async (req,res)=>{
        // creating 
      try{
        const currentDate = new Date();
        const Year  = currentDate.getFullYear();
        const Month = currentDate.getMonth() + 1; 

        req.body['year']=Year;
        req.body['month']=Month;
        await schemas.expense.create(req.body);
        res.status(200).json('Successfully summitted !');
        }catch{    res.status(404).json({ error: 'Internal server error' });}
    
    };
    
     
    exports.getExpense = async (req,res)=>{
        // reading
        try {
            const e = await schemas.expense.find();
            res.status(200).send(e);
        }catch {
             res.status(404).json({ error: 'Internal server error' });}
    };


        //3 handling given sesrvices
    exports.getGivenServices =  async (req,res)=>{   
        // reading
        try {
            console.log(req.body);
            const s  = await schemas.service.find();
            res.status(200).send(s);
           
        }catch (err){
              res.status(404).json({ error: 'Internal server error' });}
      
   };
    //4  handling sold product
    exports.getSoldProduct = async (req,res)=>{
        try {
            const e = await schemas.soldproduct.find();
            res.status(200).send(e);
        }catch (err){
            res.status(404).json({ error: 'Internal server error' });} 
    };




            // create revenue when  product get sold
            // this is not an api it is afuction which going to be used to create revenue when product get sold 
            // revoved  when product get sold as middle ware
            // those of you who are going integrate back end please use this two controllers where sold product and given services are registred
            //########################################################################################################################
        exports.productRevenue = async(req,res)=>{
            const currentDate = new Date();
            const Year  = currentDate.getFullYear();
            const Month = currentDate.getMonth() + 1; 
            const r = await schemas.MonthlyRevenueRecord.find({month:Month,category:'soldProduct'});
            if (r.length===0){
                await schemas.MonthlyRevenueRecord.create({year:Year,month:Month,category:'soldProduct' ,amount:req.body['totalPrice']} );
            }
            else{
                const a = r['amount']+req.body['totalPrice'];
                await schemas.MonthlyRevenueRecord.updateOne({month:Month,category:'soldProduct'},{amount:a});

            }

        };



// this function also going to be used as middle ware when given service get registered 
        exports.serviceRevenue = async (req,res)=>{
            const currentDate = new Date();
            const Year  = currentDate.getFullYear();
            const Month = currentDate.getMonth() + 1; 
            const r = await schemas.MonthlyRevenueRecord.find({month:Month,category:'givenService'});
            if (r.length===0){
                await schemas.MonthlyRevenueRecord.create({year:Year,month:Month,category:'givenService' ,amount:req.body['paidAmount']} );
            }
            else{
                const a = r['amount']+req.body['paidAmount'];
                await schemas.MonthlyRevenueRecord.updateOne({month:Month,category:'givenService'},{amount:a});

            }

        };


//########################################################################################################################################



    // 5 handling revenue
    exports.getRevenue = async (req,res)=>{  
        // reading 
        try{
            const r = await schemas.MonthlyRevenueRecord.find();
        
            res.status(200).send(r);
        }catch(err){ 
            res.status(404).json({ error: 'Internal server error' });
        } 
        };

