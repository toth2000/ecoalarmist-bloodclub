// name, email, phn no, age, gender, blood group, village_city, pincode, state, district, status

const Router = require("express").Router();
const { CustomError } = require("../Controllers/ErrorHandler");
const DonorModel = require('../models/donor')
const jwt = require('jsonwebtoken')

Router.post("/", async (req, res) => {

    try {
        const donorName = req.body.name,
            number = req.body.number,
            age = req.body.age,
            gender = req.body.gender,
            bloodGroup = req.body.bloodGroup,
            village_city = req.body.village_city,
            pincode = req.body.pincode,
            state = req.body.state,
            district = req.body.district;

        if (!number || !age || !gender || !bloodGroup || !village_city || !pincode || !state || !district) return next(new CustomError(400, "Empty fields !!"))

        const newDonor = new DonorModel({
            number,
            age,
            gender,
            bloodGroup,
            village_city,
            pincode,
            state,
            district
        });

        
        const accessToken = jwt.sign({id : newDonor._id}, process.env.JWTSECRET, {expiresIn : 60});
        const refreshToken = jwt.sign({id : newDonor._id}, process.env.JWTSECRET, {expiresIn : "30d"});
        
        newDonor.tokens = [refreshToken];
        
        await newDonor.save();

        return res.status(200).json({
            id : newDonor._id,
            accessToken,
            refreshToken
        })
    } catch (error) {
        next(error)
    }

});

module.exports = Router;
