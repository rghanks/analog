const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Presale = require('../../models/presale');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.presalelevel = async (req, res) => { 
    console.log(req.body);
      if(req.body.levelname == ''){
          return res.status(400).json({
               status : "false",
               message : "Provide Presale Level Name"  
           });
       }else if(req.body.coinquantity == ''){
           return res.status(400).json({
               status : "false",
               message : "Provide Presale Coin Quantity"  
           });
       }else if(req.body.coinprice == ''){
          return res.status(400).json({
              status : "false",
              message : "Provide Presale Coin Price"  
          });
      }
      else if(req.body.duration == ''){
        return res.status(400).json({
            status : "false",
            message : "Provide Presale Duration"  
        });
      }else if(isNaN(parseFloat(req.body.coinquantity))){
        return res.status(400).json({
            status : "false",
            message : "Quantity Should Be in Numeric"  
        });
      } else if(isNaN(parseFloat(req.body.coinprice))){
        return res.status(400).json({
            status : "false",
            message : "Price Should Be in Numeric"  
        });
      } else if(isNaN(parseFloat(req.body.duration))){
        return res.status(400).json({
            status : "false",
            message : "Duration Should Be in Numeric"  
        });
      }
             
      try{   
      await  Presale.findOne({ levelname : req.body.levelname })
          .exec(async (error, user) => {
              if (user){                                            
                  return res.status(400).json({
                      status : "ok",
                      message: "levelname Already Registered..."
                  });
              }else{ 
                        const data = Presale.insertMany([{
                            levelname : req.body.levelname, 
                            coinquantity : req.body.coinquantity,
                            price : req.body.coinprice,
                            duration : req.body.duration
                        }])

                        if (data) {  
                            return res.status(200).json({
                                status : 'true',
                                message: req.body.levelname+" is added at "+req.body.coinprice+" With Quantity "+req.body.coinquantity+" for Duration of "+req.body.duration+" month"
                            });                     
                        } else {
                            return res.status(400).json({
                                status : 'true',
                                message: "Record Not Saved Please Check Your Code"
                            }); 
                        }
              
          }
        });
     }catch(error){
         console.log("Error in Sign Up ", error.message);
     }
  }