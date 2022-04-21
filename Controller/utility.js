const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = mongoose.connection;
var Percent = db.collection('referral_percents');

exports.updatePrecent = async (req, res) => {
user_purchase = await Percent.updateOne({
    _id: "625e87fae0f531522da5c769"
}, {
    $set :{
        buying_bonus:req.body.buying,
        level1:req.body.level1,
        level2:req.body.level2,
        level3:req.body.level3,
    }
   }
)
}