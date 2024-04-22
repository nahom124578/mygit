// login, signup, session check and passwordChange logics
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

const Account = require('../models/Account');
const Otp = require('../models/Otp');
require('dotenv').config();


/**
 * Handle login logic, inlcuding comparing credentials and
 * creating a new session based on the username, email and role
 */
const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingAccount = await Account.findOne({username: username});

        if (existingAccount && bcrypt.compareSync(password, existingAccount.passwordHash)) { 
            req.session.username = username;
            req.session.email = existingAccount.email;
            req.session.role = existingAccount.role;
            return res.status(200).send({username: username, role: req.session.role, email: req.session.email});
        } else {
            return res.status(404).send('username or password incorrect');
        }   
    } catch (err) {
        console.log(err);
    }
};

/**
 * Handle account creation logic, inlcuding hashing passwords and
 * checking for already used usernames, phoneNumbers, and emails
 */
const signupController = async (req, res) => {
    try {
        const { firstName, lastName, dateOfBirth, gender, role, username, phoneNumber, email, password } = req.body;
        const existingUsername = await Account.findOne({username: username}, {username: 1});
        const existingPhoneNumber = await Account.findOne({phoneNumber: phoneNumber}, {phoneNumber: 1});
        const existingEmail = await Account.findOne({email: email}, {email: 1});


        if (existingUsername) {
            return res.status(404).send('username is taken');
        } else if (existingPhoneNumber) {
            return res.status(404).send('phone number already in use');
        } else if (existingEmail) {
            return res.status(404).send('email already in use');
        } else {
            const Name = {firstName: firstName, lastName: lastName};
            const passwordHash = bcrypt.hashSync(password, 10);
            const newAccount = new Account({ Name, dateOfBirth, gender, role, username, phoneNumber, email, passwordHash})

            await newAccount.save();
            req.session.username = username;
            req.session.email = email;
            req.session.role = role;
            return res.status(200).send({username: username, role: role, email: email});
        }
    } catch (err) {
        console.log(err);
    }
};

/**
 * Check if a user has a session already
 */
const checkSession = (req, res) => {
    if (req.session.username)
        return res.send({loginStatus: true, username: req.session.username, role: req.session.role, email: req.session.email});
    return res.send({loginStatus: false});
};

/**
 * Send an email to client containing an otp to reset their password
 */
const sendPasswordResetMail = async (req, res) => {
  try {
    const {email} = req.body;
    const existingAccount = await Account.findOne({ email: email });

    if (!existingAccount) {
      return res.status(404).send('Email not found');
    }

    const otp = otpGenerator.generate(length=6,
      { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
    const otpExpiration = Date.now() + (1000 * 60 * 5); // 5 min

    const filter = { email: email };
    const update = { otp: otp, otpExpiration: otpExpiration };
    await Otp.findOneAndUpdate(filter, update, {upsert: true});

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset Request',
      text: `You have requested a password reset for your account. 
              Your OTP is ${otp}`
    };

    await transporter.sendMail(mailOptions);

    req.session.email = email;
    res.status(200).send('Check your email');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error sending email');
  }
};

/**
 * Verify the otp sent by the user 
 */
const verifyOtp = async (req, res) => {
    try {
        const { otp } = req.body;
        const existingOtp = await Otp.findOne({
            otp: otp,
            otpExpiration: { $gt: Date.now() }, // Check for otp expiration
            email: req.session.email
        });

        if (!existingOtp) {
            return res.status(400).send('Invalid or expired OTP');
        }

        await Otp.findOneAndDelete({email: req.session.email});

        const account = await Account.findOne({ email: req.session.email })
        req.session.username = account.username;
        req.session.role = account.role;
        req.session.email = account.email;
        res.status(200).send({username: req.session.username, role: req.session.role, email: req.session.email});
    } catch (err) {
        console.log(err);
        res.status(500).send('Invalid OTP');
    }
}

/**
 * Handle password change request 
 */
const changePassword = async (req, res) => {
    try {
      const { password } = req.body;

      if (!req.session.username) {
        return res.status(400).send('Who are you?');
      }

      const passwordHash = bcrypt.hashSync(password, 10);
      const filter = { username: req.session.username }
      const update = { passwordHash: passwordHash }

      await Account.findOneAndUpdate(filter, update);

      res.status(200).send('Password reset successfull');
  } catch (error) {
      console.log(error);
      res.status(500).send('Error resetting password');
  }
};

module.exports = { loginController, signupController, checkSession,
                sendPasswordResetMail, verifyOtp, changePassword};
