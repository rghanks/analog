const express = require('express');
const router = express.Router();
const { signup, signin } = require('../Controller/user');
const { buytoken } = require('../Controller/buy');
const { updatePrecent } = require('../Controller/utility');
const { alluser,bonuspercent,alluserbydate,allusertoday } = require('../Controller/admin/user');
const { presalelevel,getpresale,deletepresale,updatepresale,getpresalebyid} = require('../Controller/admin/presale');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/buytoken', buytoken);
router.post('/updatePrecent', updatePrecent);
router.post('/findReffer', findparent);
router.post('/addpresale', presalelevel);
router.post('/updatepresale', updatepresale);
router.get('/alluser', alluser);
router.get('/getpresale', getpresale);
router.get('/bonuspercent', bonuspercent);
router.get('/alluserbydate', alluserbydate);
router.get('/allusertoday', allusertoday);
router.get('/deletepresale', deletepresale);
router.get('/getpresalebyid', getpresalebyid);

async function findparent(req, res) {
    const { my_referral_code } = req.body
    const User = require("../models/user");
    try {
      const data = await User.aggregate([
        { $match: { my_referral_code: my_referral_code } },
        {
          $graphLookup: {
            from: "user",
            startWith: "$refferal",
            connectFromField: "my_referral_code",
            connectToField: "refferal",
            depthField: "level",
            maxDepth: 4,
            as: "referral",
          },
        },
        // {
        //   $project: {
        //     my_referral_code: 1,
        //     refferal: 1,
        //     level: 1,
        //     "referal.my_referral_code": 1,
        //     // "referal.level": 1,
        //     // "referal.member_name": 1,
        //   },
        // },
      ]);
      if (data && data.length > 0) {
        return res.status(200).json({data: data})
      } else {
        // console.log("Hello")
        return res.status(400).json({"error": "Somthing went wrong"})

      }
    } catch (error) {
      //getDirectAndtotalmember
      console.log(
        "Error from functions >> function >> findparent: ",
        error.message
      );
      return res.status(400).json({error: error})

    }
  }

module.exports = router;