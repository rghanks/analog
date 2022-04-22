const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../models/user');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.alluser = async (req, res) => { 
        User.find({}, function(err, users) {
          var userMap = {};
      
          users.forEach(function(user) {
            userMap[user._id] = user;
          });
      
          res.send(userMap);  
        });
  }
  