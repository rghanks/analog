const mongoose = require('mongoose');
const bonusSchema = new mongoose.Schema({
   
    buying_bonus : { type : Number , default: 0 }, 
    level1 : { type : Number , default: 0 }, 
    level2 : { type : Number , default: 0 }, 
    level3 : { type : Number , default: 0 }, 
   
}, { timestamps: true});


module.exports = mongoose.model("Bonus", bonusSchema);