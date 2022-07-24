const Router=require("express").Router();
const { CustomError } = require("../Controllers/ErrorHandler");
const { isUserAlreadyPresent } = require("../Controllers/isUserAlreadyPresent");
const { sendOTP } = require('../Controllers/otpControllers')

// this route is for asking otp for signing up a user
// isUserAlreadyPresent middleware checks for duplicate user with the same number
// calls sendOTP middleware which has dependency of body : { number }

Router.post('/', isUserAlreadyPresent, sendOTP, async(req, res, next) => {
    try {
        return res.sendStatus(200).json('OTP sent');
    } catch (error) {
        return next(error);
    }
})

module.exports = Router