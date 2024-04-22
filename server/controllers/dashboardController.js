// control the dashboard access

const Account = require("../models/Account");

const patientDashboard = async (req, res) => {
    if (req.session && req.session.role === "patient") {
        try {
            const account = await Account.findOne({ username: req.session.username });
            if (account) {
                res.status(200).send(account);
            } else {
                res.status(404).send('Account not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.status(403).send('Restricted');
    }
};

const doctorDashboard = async (req, res) => {
    if (req.session && req.session.role === "doctor") {
        try {
            const account = await Account.findOne({ username: req.session.username });
            if (account) {
                res.status(200).send(account);
            } else {
                res.status(404).send('Account not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.status(403).send('Restricted');
    }
};


module.exports = { patientDashboard, doctorDashboard };