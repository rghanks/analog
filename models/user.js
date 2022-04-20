const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email : { 
        type : String,
        unique : true,
        required : [true, 'Please enter an email'],
        lowercase : true,
        dropDups: true,
        validate : [isEmail, 'Please enter a valid email'] 
    },
    refferal : { 
        type: String,
         default: 0 
    },
    password :{ 
        type: String,
        required : [true, 'Please enter an password'],
        minlength : [6, 'Minimum password length is 6 character'] 
    },
    registration_date : { 
        type: Date,
        default: Date.now
    },    
    status : {
        type : Number, 
        default: 0 
    },    
    wallet_balance : { 
        type : Number,
        default : 0
     }
}, { timestamps: true});

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("User", userSchema);