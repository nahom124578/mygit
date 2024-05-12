const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const request_schema = new Schema({
    patient_name : {
        type: String,
        default: null
    },
    dob: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: null
    },
    physician_name: {
        type: String,
        default: null
    },
    physician_contact: {
        type: String,
        default: null
    },
    imaging_procedure : {
        type: String,
        default: null
    },
    clinical_indication: {
        type: String,
        default: null
    },
    special_instructions: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Imagings', request_schema)