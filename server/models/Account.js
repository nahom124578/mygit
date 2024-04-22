 // account schema
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    Name: {
        firstName: String,
        lastName: String
    },
    dateOfBirth: Date,
    gender: String,
    role: String,
    username: String,
    phoneNumber: String,
    email: String,
    passwordHash: String
});

const Account = mongoose.model('accounts', accountSchema);

module.exports = Account;
