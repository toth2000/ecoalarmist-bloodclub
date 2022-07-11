const { verifyOTP } = require('../Controllers/otpControllers');

const Router = require('express').Router();

Router.post('/', verifyOTP, async(req, res) => {
    try{
        return res.sendStatus(200);
    }catch(error){
        next(error);
    }
})

module.exports = Router;