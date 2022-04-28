const express = require("express");
const axios = require("axios");
const router = express.Router();
const {
  signup,
  signin,
  buytoken,
  varify,
  sendotp,
  forgetPassword,
  resetPassword,
  createWallet,
  walletData,
} = require("../Controller/user");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/varify", varify);
router.post("/buytoken", buytoken);
router.post("/findReffer", findparent);
router.post("/sendotp", sendotp);
router.post("/forget", forgetPassword);
router.post("/reset", resetPassword);
router.post("/createWallet", createWallet);
router.get("/getCoinData", getCMCData);
router.post("/getwalletdata", walletData);

async function findparent(req, res) {
  const { my_referral_code } = req.body;
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
      return res.status(200).json({ data: data });
    } else {
      // console.log("Hello")
      return res.status(400).json({ error: "Somthing went wrong" });
    }
  } catch (error) {
    //getDirectAndtotalmember
    console.log(
      "Error from functions >> function >> findparent: ",
      error.message
    );
    return res.status(400).json({ error: error });
  }
}

async function getCMCData(req, res) {
  try {
    const query_coin_symbol_array = [
      "btc",
      "eth",
      "trx",
      "usdt",
      "busd",
      "shib",
      "bnb",
      "matic",
      "sol",
    ];
    var coin_symbols = query_coin_symbol_array.join(",");
    var conver_currency = "usd";
    const final_third_party_api_url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coin_symbols}&convert=${conver_currency}`;
    const ress = await axios.get(final_third_party_api_url, {
      headers: {
        "Content-Type": "Application/json",
        // "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY
        "X-CMC_PRO_API_KEY": "024d5931-52b8-4c1f-8d99-3928fd987163",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(ress.data.data);
    return res.status(200).json(ress.data.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
module.exports = router;
