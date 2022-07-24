const axios = require("axios");
const otpGenerator = require('otp-generator');
const OtpModel = require('../models/otpModel');
const { CustomError } = require("./ErrorHandler");

const sendOTP = async(req, res, next) => {
    try{

        const number = req.body.number;
        if(!number || number.length !== 10) return res.status(400).json({error : 'Invalid mobile number!'})
        await OtpModel.deleteOne({number : number});

        const OTP = otpGenerator.generate(6, {
            digits : true,
            lowerCaseAlphabets : false,
            upperCaseAlphabets : false,
            specialChars : false
        })
    
        // send otp from here

        if(!OTP || OTP.length !== 6) return next(new CustomError(500, 'Server Error'))
        
        const newOtp = new OtpModel({
            number : number,
            otp : OTP
        })
        
        await newOtp.save();
        res.generatedOTP = OTP;

        console.log({OTP});
        next();

    }catch(error){
        console.log({error})
        return next(error);
    }

}

const verifyOTP = async(req, res, next) => {
    try{
        const number = req.body.number;
        const typedOtp = req.body.otp;

        const findOtp = await OtpModel.findOne({number : number, otp : typedOtp});
        if(!findOtp) return next(new CustomError(400, 'Wrong OTP!'))

        next();
    }catch(error){
        return next(error);
    }
}

module.exports = {sendOTP, verifyOTP}