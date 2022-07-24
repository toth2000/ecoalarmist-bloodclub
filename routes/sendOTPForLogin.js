const Router=require("express").Router();
const { CustomError } = require("../Controllers/ErrorHandler");
const isUserAlreadyPresent = require("../Controllers/isUserAlreadyPresent");
const { sendOTP } = require('../Controllers/otpControllers')

// this route is for asking otp for logging in a user
// calls sendOTP middleware which has dependency of body : { number }

Router.post('/', sendOTP, async(req, res, next) => {
    try {
        return res.sendStatus(200).json('OTP sent');
    } catch (error) {
        return next(error);
    }
})

module.exports = Router