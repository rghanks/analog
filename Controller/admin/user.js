const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../../models/user');
const percent = require('../../models/referral_percent');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.alluser = async (req, res) => { 
        const {per_page,page} = req.query
        const user = await User.find({}).limit(per_page).skip(per_page*(page-1));
        // console.log(user,"user")
        
          res.status(200).json({user_data:user,totalCount:user.length});
  }
  
  exports.bonuspercent = async (req, res) => { 
        const user = await percent.find({})
        res.status(200).json({Bonus_percent:user});
  }