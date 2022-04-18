const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : { type : String , unique : true, required : true, dropDups: true },
    refferal : { type: String, default: 0 },
    password :{ type: String },
    registration_date : {type: Date, default: Date.now},    
    status : { type : Number , default: 0 },    
    wallet_balance : { type : Number , default : 0 }
}, { timestamps: true});


module.exports = mongoose.model("User", userSchema);