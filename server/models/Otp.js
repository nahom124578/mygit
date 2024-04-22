// schema for OTP (one time password)
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: String,
    otp: String,
    otpExpiration: Date
});

const Otp = mongoose.model('otps', otpSchema);

module.exports = Otp;

