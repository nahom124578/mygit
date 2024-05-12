const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    image : {
        type: String,
        default: null
    }, 
    details : {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('radiologistresultreportings', PostSchema)