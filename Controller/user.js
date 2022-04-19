const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('../models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));


exports.signup = async (req, res) => { 

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
    await  User.findOne({ email : req.body.email })
        .exec(async (error, user) => {
            if (user){                                            
                return res.status(400).json({
                    status : "ok",
                    message: "User Already Registered..."
                });
            }else{           
            const {
                email,
                password  
               } = req.body;                    
                  
            const _user = new User({
                email, 
                password   
            });

            _user.save((error, data) => {             
                if (error) {
                    console.log('Error in Sign Up', error.message);
                    return res.status(400).json({
                        status : 'false',
                        message: 'Somthing went wrong'
                    })
                }           

                if (data) {    
                    return res.status(201).json({
                        message: "User Sign Up successfully"
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
  
  exports.logout = async (req, res) => {  
   console.log('hello');
    
  }
  exports.test = async (req, res) => {  
    
    
}