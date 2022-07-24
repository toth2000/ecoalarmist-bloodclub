const { verifyOTP } = require('../Controllers/otpControllers');
const Router = require('express').Router();

// route for verifying otp which intern calls verifyOTP middleware
// required fields : { number, otp }

Router.post('/', verifyOTP, async(req, res) => {
    try{
        return res.sendStatus(200);
    }catch(error){
        next(error);
    }
})

module.exports = Router;