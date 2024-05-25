const mongoose = require('mongoose');

const Commmon = new Schema(
    {
        Test:
        {
            type:String,
            required:true
        },
    }  
);

const Common = mongoose.model('Common', Commmon);
module.exports = Common;
