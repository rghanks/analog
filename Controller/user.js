const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../models/user');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}

exports.signup = async (req, res) => { 
  console.log(req.body);
    if(req.body.email == ''){
        return res.status(400).json({
             status : "false",
             message : "Email field Cannot be Blank"  
         });
     }else if(req.body.password == ''){
         return res.status(400).json({
             status : "false",
             message : "Password field Cannot be Blank"  
         });
     }else if(req.body.referral_code == ''){
        return res.status(400).json({
            status : "false",
            message : "Please Provide a Valid Referral Code"  
        });
    }else if(req.body.password != req.body.confirm_password){
            return res.status(400).json({
                status : 'false',
                message: 'Password Do not Match With Confirm password'
            });
    }
           
    try{   
        console.log(req.body.email); 
    await  User.findOne({ email : req.body.email })
        .exec(async (error, user) => {
            if (user){                                            
                return res.status(400).json({
                    status : "ok",
                    message: "User Already Registered..."
                });
            }else{ 
                await  User.findOne({ my_referral_code : req.body.referral_code })
                .exec(async (error, user) => {
                    if (user){ 
                        const ref_code = randomString(10, 'aA');
                        const signup_bonus = 500;                     
                              console.log(req.body.referral_code); 
                        const _user = new User({
                            email : req.body.email, 
                            password : req.body.password,
                            refferal : req.body.referral_code,
                            signup_bonus : signup_bonus,
                            my_referral_code : ref_code
                        });
            
                        _user.save((error, data) => {             
                            if (error) {
                                console.log('Error in Sign Up', error.message);
                                return res.status(400).json({
                                    status : 'false',
                                    message: 'Somthing went wrong1'
                                })
                            }           
            
                            if (data) {    
                                return res.status(201).json({
                                    message: "User Sign Up successfully"
                                });                     
                            }
                        });
                      } else{
                        return res.status(400).json({
                            status : "ok",
                            message: "Invalid Referral Code"
                        }); 
                    } 
                    
                }); 
        }
        });
   }catch(error){
       console.log("Error in Sign Up ", error.message);
   }
}



exports.signin = async (req, res) => {  
    
    if(req.body.email == ''){
       return res.status(400).json({
            status : "false",
            message : "Email field Cannot be Blank"  
        });
    }else if(req.body.password == ''){
        return res.status(400).json({
            status : "false",
            message : "Password field Cannot be Blank"  
        });
    }
    
    try{
      await User.findOne({ email: req.body.email, password: req.body.password }).exec(async (error, user) => {         
          if (error) return res.status(400).json({               
              status : "false",
              message : "Something Went Wrong"
          });
          if (user) {            
                  const { _id, username } = user;                 
                  res.status(200).json({                                        
                      user: {
                          _id, username 
                      }
                  });           
          } else {
              return res.status(400).json({
                  status : "false",
                  message: "Invalide User"
              })
          }
      });
    } catch (error){      
          console.log('Error in Sign in ', error.message);
          return res.status(200).json({
              status : "false",
              msg :'Something Went Wrong'})
    }
  }
  
  exports.buytoken = async (req, res) => { 
    console.log(req.body);
      if(req.body.email == ''){
          return res.status(400).json({
               status : "false",
               message : "Email field Cannot be Blank"  
           });
       }else if(req.body.token_quantity <= 0){
           return res.status(400).json({
               status : "false",
               message : "Token Quantity Cannot be zero"  
           });
       }else if(req.body.token_price == ''){
          return res.status(400).json({
              status : "false",
              message : "Token Price is undefined"  
          });
      }
             
      try{   
          console.log(req.body.email); 
      await  User.findOne({ email : req.body.email })
          .exec(async (error, user) => {
              if (user){                                            
                  return res.status(400).json({
                      status : "ok",
                      message: "User Already Registered..."
                  });
              }else{ 
                  await  User.findOne({ my_referral_code : req.body.referral_code })
                  .exec(async (error, user) => {
                      if (user){ 
                          const ref_code = randomString(10, 'aA');
                          const signup_bonus = 500;                     
                                console.log(req.body.referral_code); 
                          const _user = new User({
                              email : req.body.email, 
                              password : req.body.password,
                              refferal : req.body.referral_code,
                              signup_bonus : signup_bonus,
                              my_referral_code : ref_code
                          });
              
                          _user.save((error, data) => {             
                              if (error) {
                                  console.log('Error in Sign Up', error.message);
                                  return res.status(400).json({
                                      status : 'false',
                                      message: 'Somthing went wrong1'
                                  })
                              }           
              
                              if (data) {    
                                  return res.status(200).json({
                                    status : 'true',
                                    message: "User Sign Up successfully"
                                  });                     
                              }
                          });
                        } else{
                          return res.status(400).json({
                              status : "ok",
                              message: "Invalid Referral Code"
                          }); 
                      } 
                      
                  }); 
          }
          });
     }catch(error){
         console.log("Error in Sign Up ", error.message);
     }
  }
  