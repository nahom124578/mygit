const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    first_name: {
        type: String,
        default: null
    },
    middle_name: {
        type : String,
        default: null
    },
    last_name: {
        type: String,
        default: null
    },
    dob: {
        type: String,
        default: null
    },
    phone_number: {
        type: String,
        default: null
    },
    gender: {
        type : String,
        default: null
    },
    address_one: {
        type: String,
        default: null
    },
    address_two: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type : String,
        defualt: null
    },
    email: {
        type: String,
        default: null
    },
    visit_yes: {
        type: String,
        default: null
    },
    visit_no: {
        type: String,
        default: null
    },
    department: {
        type : String,
        default: null
    },
    app_date: {
        type: String,
        default: null
    },
})

module.exports = mongoose.model('AppointmentDetails', PostSchema)