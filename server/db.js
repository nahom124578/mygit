// mongodb connection setup 
const mongoose = require('mongoose');

require('dotenv').config();

const db = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('DB connected');
    } catch(err) {
        err => console.log(err);
    }
}
module.exports = db;
