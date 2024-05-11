const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ImgReqSchema = new Schema({
    patient_name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30
    },
    physician_name: {
        type : String,
        required: true,
        minLength: 4,
        maxLength: 30

    },
    physician_contact: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10

    },
    dob: {
        type: Date,
        required: true
    },
    
    gender: {
        type : String,
        required: true,
        enum: ['Male', 'Female']
    },
    imaging_procedure: {
        type: String,
        required: true,
        enum: ['CT Scan', 'MRI', 'X-Ray', 'Ultrasound']

    },
    clinical_indication: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 1024

    },
    special_instructions: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 1024

    }
})

const ImageReq =   mongoose.model("imagings", ImgReqSchema);
module.exports = ImageReq;



