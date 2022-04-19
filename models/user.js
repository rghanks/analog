const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : { type : String , unique : true, required : true, dropDups: true },
    refferal : { type: String,required : true},
    password :{ type: String },
    my_referral_code: { type: String, unique : true, required : true},
    registration_date : {type: Date, default: Date.now},    
    status : { type : Number , default: 0 }, 
    signup_bonus : { type : Number , default : 0 },
    referral_bonus : { type : Number , unique : true, default : 0 },
    buying_bonus : { type : Number , default : 0 },
    wallet_balance : { type : Number , default : 0 }
}, { timestamps: true});


module.exports = mongoose.model("User", userSchema);