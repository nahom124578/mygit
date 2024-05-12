const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const reportSchema = new Schema({
    patientID: {
        type: String,
        required: true // patientID is required
    },
    requestID: {
        type: String,
        required: true // requestID is required
    },
    testDate: {
        type: Date,
        default: Date.now // Set default value to current timestamp
    },
    testName: {
        type: String,
        default: null // Default value for testName is null
    },
    testType: {
        type: String,
        default: null // Default value for testType is null
    },
    testValue: {
        type: String,
        default: null // Default value for testValue is null
    },
    unit: {
        type: String,
        default: null // Default value for unit is null
    },
    person: {
        type: String,
        required: true // person is required
    },
    ID: {
        type: String,
        required: true // ID is required
    }
});

module.exports = mongoose.model("Lab_Technician", reportSchema)