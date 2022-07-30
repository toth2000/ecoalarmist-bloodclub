const { CustomError } = require("./ErrorHandler");
const DonorModel = require('../models/donor')

// checks if the user is present or not during signup
const isUserAlreadyPresent = async(req, res, next) => {
    
    try{
        const number = req.body.number;
        if(!number || number.length !== 10) return next(new CustomError(400, "Invalid Number!"))

        const foundUser = await DonorModel.findOne({phone : number});
        if(foundUser) return next(new CustomError(400, "User already present!"))

        return next();
    }catch(error){
        return next(error)
    }
    
}


// checks if the user is present or not during login
const isUserPresent = async(req, res, next) => {
    try{
        const number = req.body.number;

        if(!number || number.length !== 10) return next(new CustomError(400, "Invalid Number!"))

        const foundUser = await DonorModel.findOne({phone : number});
        if(!foundUser) return next(new CustomError(400, "User is not in database"))

        return next();

    }catch(err){
        return next(err)
    }

}

module.exports = { isUserAlreadyPresent, isUserPresent };