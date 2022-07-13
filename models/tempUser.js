const mongoose = require('mongoose');
const tempUser = mongoose.Schema({
    number : {
        type : String,
        required : true,
        trim : true
    }
}, { timestamps : true });

module.exports = mongoose.model('TempUser', tempUser);