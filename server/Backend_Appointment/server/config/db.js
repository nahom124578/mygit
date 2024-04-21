const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect('mongodb+srv://FirstMongo:mongo123@hospitalmanagementsyste.mq1fdvh.mongodb.net/Hospital_Management_System')
        console.log('Database connected')

    } catch(error) {
        console.log(error)
    }
}

module.exports = connectDB;