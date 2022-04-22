const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.updatePrecent = async (req, res) => {
var db = mongoose.connection;
var Percent = db.collection('referral_percents');
console.log(req.body.level1);
user_purchase = await Percent.updateOne({
    _id: '625e87fae0f531522da5c769'
}, {
    $set :{
        buying_bonus:req.body.buying,
        level1:req.body.level1,
        level2:req.body.level2,
        level3:req.body.level3,
    }
   }
)
console.log(user_purchase);
}