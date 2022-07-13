const { CustomError } = require("./ErrorHandler");
const DonorModel = require('../models/donor')

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

module.exports = isUserAlreadyPresent;