const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../../models/user');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.alluser = async (req, res) => { 
        const user = await User.find({}).limit(per_page).skip(per_page*(page-1));
        // console.log(user,"user")
        
          res.status(200).json({user_data:user,totalCount:user.length});
  }
  