const Router=require("express").Router();
const { CustomError } = require("../Controllers/ErrorHandler");
const isUserAlreadyPresent = require("../Controllers/isUserAlreadyPresent");
const { sendOTP_forSignup } = require('../Controllers/otpControllers')
const DonorModel = require('../models/donor')
const OtpModel = require('../models/otpModel')

Router.post('/', isUserAlreadyPresent, sendOTP_forSignup, async(req, res, next) => {
    try {
        // const number = req.body.number;
        // const otp = res.generatedOTP;
        // if(!otp || otp.length !== 6) return next(new CustomError(500, 'Server Error'))
        
        // const newOtp = new OtpModel({
        //     number : number,
        //     otp : otp
        // })
        
        // await newOtp.save();
        return res.sendStatus(200).json('OTP sent');
    } catch (error) {
        return next(error);
    }
})

module.exports = Router