    const dotenv=require('dotenv');    
    const finance = require('../Finance/finance');
    const mongoose = require('mongoose');
    dotenv.config({path: './config.env'});


   



    mongoose.connect(process.env.database).then(()=>console.log('data base connected'));


    const port= process.env.PORT;
    finance.listen(port,()=>{   
        console.log(`app running on port ${port} ...`); 
    });