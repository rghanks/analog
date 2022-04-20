const mongoose = require('mongoose');

const buySchema = new mongoose.Schema({
    email : { type : String , unique : true, required : true, dropDups: true },
    date : {type: Date, default: Date.now},    
    status : { type : Number , default: 0 }, 
    token_price : { type : Number , default: 0,  required : true },
    token_quantity : { type : Number , default : 0 },
    bonus_percent : { type : Number , default : 0 }
}, { timestamps: true});


module.exports = mongoose.model("Buy", buySchema);