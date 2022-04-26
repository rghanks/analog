const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const User = require("../models/user");
const Buy = require("../models/buy");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const forgetPassword = require("../models/forgetPassword");

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

function randomString(length, chars) {
  var mask = "";
  if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("#") > -1) mask += "0123456789";
  if (chars.indexOf("!") > -1) mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = length; i > 0; --i)
    result += mask[Math.floor(Math.random() * mask.length)];
  return result;
}

async function sendMail(subject, message) {
  var transporter = nodemailer.createTransport({
    host: "mail.hrlw.in",
    port: 465,
    auth: {
      user: "analog@hrlw.in",
      pass: "Analog@123",
    },
  });

  var mailOptions = {
    from: "analog@hrlw.in",
    to: "vipinatraura@gmail.com",
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

exports.sendotp = async (req, res) => {
  if (req.body.email == "") {
    return res.status(400).json({
      status: "false",
      message: "Email field Cannot be Blank",
    });
  } else {
    var otp = Math.floor(Math.random() * 1000000 + 1);
    var subject = "Varify your Email";
    var message =
      "<h1>Wecome to Analog, <br> To Varify your email on Analog. Your OTP is : <br>" +
      otp +
      "</h1>";
    let varify = await User.updateOne(
      { email: req.body.email },
      { $set: { otp: otp } }
    );
    if (varify) {
      sendMail(subject, message);
      return res.status(200).json({
        status: 1,
        message: "OTP sended successfully",
      });
    } else {
      return res.status(400).json({
        status: 0,
        message: "Something went wrong",
      });
    }
  }
};

function checkEmail(email) {
  const emailToValidate = email ? email : "";
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const res = emailRegexp.test(emailToValidate);
  console.log("CHECK EMAIL : ", res);
  return res;
}

function checkPassword(password) {
  console.log("Password: ", password);
  const passwordToValidate = password ? password : "";
  const passwordRegexp =
    /(?=^.{8,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[0-9])(?=.*[@_*&.])(?=.*[a-z]).*$/;
  const res = passwordRegexp.test(passwordToValidate);
  console.log("Check Password: ", res);
  return res;
}

exports.signup = async (req, res) => {
  const email = req.body.email ? req.body.email : "";
  const password = req.body.password ? req.body.password : "";
  const confirmPassword = req.body.confirm_password
    ? req.body.confirm_password
    : "";
  const referral_code = req.body.referral_code;
  if (confirmPassword !== password) {
    return res.json({
      status: 0,
      message: "Password and confirm password do not Match",
    });
  }

  //return res.send("executed..");
  if (email && checkEmail(email) && password) {
    try {
      await User.findOne({ email: email }).exec(async (error, user) => {
        if (user) {
          return res.json({
            status: -1,
            message: "User is already exist",
          });
        } else {
          var otp = Math.floor(Math.random() * 1000000 + 1);
          const ref_code = randomString(10, "aA");
          const signup_bonus = 500;
          const _user = new User({
            email: req.body.email,
            password: req.body.password,
            refferal: req.body.referral_code,
            signup_bonus: signup_bonus,
            my_referral_code: ref_code,
            otp: otp,
          });

          _user.save((error, data) => {
            if (error) {
              console.log("Error in Sign Up", error.message);
              return res.status(400).json({
                status: 0,
                message: "Somthing went wrong",
              });
            } else if (data) {
              var subject = "Registration completed successully";
              var message =
                "<h1>Hello Rahul, <br> Your have Registerd successully on Analog. Your OTP is : <br>" +
                otp +
                "</h1>";
              sendMail(subject, message);
              return res.status(200).json({
                status: 1,
                message: "User Sign Up successfully",
              });
            }
          });
        }
      });
    } catch (error) {
      console.log("Error in Sign Up ", error.message);
    }
  } else {
    return res.status(400).json({
      status: 0,
      message: "somthing went wrong",
    });
  }
};

exports.signin = async (req, res) => {
  console.log(req.body);
  const email = req.body.email ? req.body.email : "";
  const password = req.body.password ? req.body.password : "";
  if (email && checkEmail(email) && password) {
    try {
      await User.findOne({ email: email }).exec(async (error, user) => {
        if (error) {
          return res.status(400).json({
            status: 4,
            message: "Email not registered",
          });
        }
        if (user) {
          console.log(user);
          const { _id, email, password, isVarify } = user;

          if (bcrypt.compareSync(req.body.password, password)) {
            if (isVarify == 0) {
              return res.status(400).json({
                status: 3,
                message: "OTP is not varified",
              });
            }
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: "1h",
            });
            res.status(200).json({
              status: 1,
              token: token,
              user: _id,
              message: "Login Successful",
            });
          } else {
            return res.status(400).json({
              status: 0,
              message: "Password do not match",
            });
          }
        } else {
          return res.status(400).json({
            status: 4,
            message: "Email Not exist",
          });
        }
      });
    } catch (error) {
      console.log("Error in Sign in ", error.message);
      return res.status(200).json({
        status: 0,
        msg: "Something Went Wrong",
      });
    }
  }
};

exports.varify = async (req, res) => {
  const email = req.body.email ? req.body.email : "";
  const otp = req.body.otp ? req.body.otp : "";
  if (email && otp != "") {
    try {
      await User.findOne({ email: req.body.email }).exec(
        async (error, user) => {
          if (error)
            return res.status(400).json({
              status: 0,
              message: "Something Went Wrong",
            });
          if (user) {
            const { _id, email, otp } = user;
            if (otp == req.body.otp) {
              let varify = await User.updateOne(
                { email: email },
                { $set: { isVarify: 1 } }
              );
              if (varify) {
                console.log(varify);
                console.log(email);
                res.status(200).json({
                  status: 1,
                  message: "OTP Varyfied successully",
                });
              } else {
                res.status(200).json({
                  status: 0,
                  message: "Something went wrong",
                });
              }
            } else {
              return res.status(400).json({
                status: "false",
                message: "Incorrect OTP",
              });
            }
          } else {
            return res.status(400).json({
              status: "false",
              message: "Invalide User",
            });
          }
        }
      );
    } catch (error) {
      console.log("Error in Sign in ", error.message);
      return res.status(200).json({
        status: "false",
        msg: "Something Went Wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: 0,
      message: "Email and OTP field cannot be blank",
    });
  }
};

exports.buytoken = async (req, res) => {
  console.log(req.body);
  if (req.body.email == "") {
    return res.status(400).json({
      status: "false",
      message: "Email field Cannot be Blank",
    });
  } else if (req.body.token_quantity <= 0) {
    return res.status(400).json({
      status: "false",
      message: "Token Quantity Cannot be zero",
    });
  } else if (req.body.token_price == "") {
    return res.status(400).json({
      status: "false",
      message: "Token Price is undefined",
    });
  }

  try {
    console.log(req.body.email);
    await User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user) {
        var db = mongoose.connection;
        var Percent = db.collection("referral_percents");
        const token_buying = req.body.token_quantity;
        const token_price = req.body.token_price;
        const token_quantity = token_buying * token_price;

        const percnt = await Percent.findOne();
        console.log(percnt.buying_bonus);
        const bonus_perc = parseInt(percnt.buying_bonus);
        const lev1 = parseInt(percnt.level1);
        const lev2 = parseInt(percnt.level2);
        const lev3 = parseInt(percnt.level3);
        const buying_bonus = (bonus_perc / 100) * token_quantity;
        const token_balance = token_quantity;
        let referral1 = user.refferal;
        const ref1 = (lev1 / 100) * token_quantity;
        let referral2 = "";
        let referral3 = "";
        // get referral ids

        await User.findOne({ my_referral_code: referral1 }).exec(
          async (error, rid) => {
            if (rid) {
              referral2 = rid.refferal;
              const ref2 = (lev2 / 100) * token_quantity;
              console.log(referral2);
              await User.findOne({ my_referral_code: referral2 }).exec(
                async (error, ridi) => {
                  if (ridi) {
                    referral3 = ridi.refferal;
                    const ref3 = (lev3 / 100) * token_quantity;
                    console.log(referral3);
                  }
                }
              );
            }
          }
        );

        user_purchase = await User.updateOne(
          {
            email: req.body.email,
          },
          {
            $set: {},
            $inc: {
              buying_bonus: buying_bonus,
              token_balance: token_balance,
              referral_bonus: ref1,
            },
          }
        ).then(async (d) => {
          const _userbuy = new Buy({
            email: req.body.email,
            token_price: req.body.token_price,
            token_buying: req.body.token_quantity,
            token_quantity: token_quantity,
            bonus_percent: bonus_perc,
          });

          _userbuy.save((error, data) => {
            if (error) {
              console.log("Error in Sign Up", error.message);
              return res.status(400).json({
                status: "false",
                message: "Somthing went wrong1",
              });
            }

            if (data) {
              return res.status(200).json({
                status: "true",
                message: "Token Purchase Successfull",
              });
            }
          });
        });
      } else {
        return res.status(400).json({
          status: "ok",
          message: "User Not Found",
        });
      }
    });
  } catch (error) {
    console.log("Error in Sign Up ", error.message);
  }
};

exports.forgetPassword = async (req, res) => {
  if (req.body.email == "") {
    return res.status(400).json({
      status: 0,
      message: "Email field Cannot be Blank",
    });
  } else {
    try {
      await User.findOne({ email: req.body.email }).exec(
        async (error, user) => {
          if (user) {
            var randCode = randomString(20, "aA");
            var subject = "Reset your password";
            var msg = `<h1>Hello Rahul, <br> Click on the reset button below to reset your password.<br> <a href='http://localhost:3000/ResetPassword?resetcode=${randCode}' > Reset </a></h1>`;
            // var msg = "http://localhost:3000/ResetPassword?restcode=123456";
            _forgetPass = new forgetPassword({
              email: req.body.email,
              forgetString: randCode,
            });
            _forgetPass.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  status: 0,
                  message: "Something went wrong",
                });
              }
              if (data) {
                sendMail(subject, msg);
                return res.status(200).json({
                  status: 1,
                  message: "Reset link is sended",
                });
              }
            });
          } else {
            return res.status(400).json({
              status: 4,
              message: "Email is not registerd",
            });
          }
        }
      );
    } catch (error) {
      console.log("Error in Sign in ", error.message);
      return res.status(200).json({
        status: 0,
        msg: "Something Went Wrong",
      });
    }
  }
};

exports.resetPassword = async (req, res) => {
  if (req.body.resetCode == "") {
    return res.status(400).json({
      status: 0,
      message: "Invalid Access...",
    });
  } else if (req.body.password == "") {
    return res.status(400).json({
      status: 0,
      message: "Password field Cannot be Blank",
    });
  } else if (req.body.confirmPassword == "") {
    return res.status(400).json({
      status: 0,
      message: "Confirm password field Cannot be Blank",
    });
  } else if (req.body.password != req.body.confirmPassword) {
    return res.status(400).json({
      status: 0,
      message: "Password and confirm password cannot match",
    });
  } else {
    try {
      await forgetPassword
        .findOne({ forgetString: req.body.resetCode, status: 0 })
        .exec(async (err, fdata) => {
          if (err) {
            return res.status(400).json({
              status: 0,
              message: "Something went wrong",
            });
          }
          if (fdata) {
            const { _id, email } = fdata;
            await forgetPassword.updateOne(
              { _id: _id },
              { $set: { status: 1 } }
            );
            await User.findOne({ email: email, status: 1 }).exec(
              async (error, user) => {
                if (user) {
                  //console.log("exe..1");
                  const hashPass = bcrypt.hashSync(req.body.password, 10);
                  let passwordUpdate = await User.updateOne(
                    { email: email },
                    { $set: { password: hashPass } }
                  );

                  if (passwordUpdate) {
                    var subject = "Password changed successfully";
                    var message =
                      "<h1>Hello Rahul, <br> Your password has been updated successfully.</h1>";
                    sendMail(subject, message);
                    return res.status(200).json({
                      status: 1,
                      message: "Password updated successully...",
                    });
                  } else {
                    return res.status(400).json({
                      status: 0,
                      message: "Something went wrong",
                    });
                  }
                } else {
                  return res.status(400).json({
                    status: 0,
                    message: "Something went wrong",
                  });
                }
              }
            );
          }
        });
    } catch (error) {
      console.log("Error in Reset Password in ", error.message);
      return res.status(200).json({
        status: 0,
        msg: "Something Went Wrong",
      });
    }
  }
};

exports.createWallet = async (req, res) => {
  const btc_wallet = await createBTCAddress();
  const eth_wallet = await createETHAddress();
  const trx_wallet = await createTRXAddress();
  return res.status(200).json({
    status: 1,
    message: btc_wallet,
  });
};

async function createBTCAddress() {
  const bitcore = require("bitcore-lib");
  const privateKey = new bitcore.PrivateKey();
  var address = privateKey.toAddress();
  if (bitcore.PrivateKey.isValid(privateKey)) {
    address = bitcore.Address.isValid(address) ? address : undefined;
  }
  if (address !== undefined) {
    return {
      address: address.toString(),
      privateKey: privateKey.toString(),
      type: "bitcoin",
      symbol: "BTC",
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      symbol: "",
    };
  }
}
async function createETHAddress() {
  const ethWallet = require("ethereumjs-wallet");
  console.log(ethWallet.default);
  const address = ethWallet.default.generate();
  if (address !== undefined) {
    console.log(address);
    return {
      address: address.getAddressString(),
      privateKey: address.getPrivateKeyString(),
      type: "ethereum",
      symbol: "ETH",
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      symbol: "",
    };
  }
}
async function createTRXAddress() {
  const TronWeb = require("tronweb");
  let wallet = TronWeb.utils.accounts.generateAccount();
  if (wallet && wallet.address && wallet.address.base58 && wallet.privateKey) {
    return {
      address: wallet.address.base58,
      privateKey: wallet.privateKey,
      type: "TRON",
      symbol: "TRX",
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      symbol: "",
    };
  }
}
async function createBCHAddress() {
  const bitcore = require("bitcore-lib-cash");
  const privateKey = new bitcore.PrivateKey();
  var address = privateKey.toAddress();
  if (bitcore.PrivateKey.isValid(privateKey)) {
    address = bitcore.Address.isValid(address) ? address : undefined;
  }
  console.log(address.toString());
  console.log(privateKey.toString());
  if (address !== undefined) {
    return {
      address: address.toString(),
      privateKey: privateKey.toString(),
      type: "Bitcoin Cash",
      symbol: "BCH",
      type_id: 1831,
      balance: 0,
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      type_id: 0,
    };
  }
}
async function createLTCAddress() {
  const litecore = require("litecore-lib");
  var privateKey = new litecore.PrivateKey();
  var address = privateKey.toAddress();
  if (litecore.PrivateKey.isValid(privateKey)) {
    address = litecore.Address.isValid(address) ? address : undefined;
  }
  console.log(address.toString());
  console.log(privateKey.toString());
  if (address !== undefined) {
    return {
      address: address.toString(),
      privateKey: privateKey.toString(),
      type: "Litecoin",
      symbol: "LTC",
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      symbol: "",
    };
  }
}
async function createDASHAddress() {
  const dashcore = require("@dashevo/dashcore-lib");
  var privateKey = new dashcore.PrivateKey();
  var address = privateKey.toAddress();
  if (dashcore.PrivateKey.isValid(privateKey)) {
    address = dashcore.Address.isValid(address) ? address : undefined;
  }
  console.log(address.toString());
  console.log(privateKey.toString());
  if (address !== undefined) {
    return {
      address: address.toString(),
      privateKey: privateKey.toString(),
      type: "Dash",
      symbol: "DASH",
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      symbol: "",
    };
  }
}
// use block shypher for this
async function createXRPAddress() {
  const keypair = require("ripple-keypairs");
  const seed = keypair.generateSeed();
  const keys = keypair.deriveKeypair(seed);
  const address = keypair.deriveAddress(keys.publicKey);
  const privateKey = keys.privateKey;
  if (address !== undefined) {
    return {
      address: address,
      privateKey: privateKey,
      type: "XRP",
      symbol: "XRP",
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      symbol: "",
    };
  }
}
async function createUSDTAddress() {
  let usdt_address = await createTRXAddress();
  usdt_address.type = "Tether";
  usdt_address.symbol = "USDT";
  usdt_address.type_id = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  return usdt_address;
}
async function createBTTAddress() {
  let btt_address = await createTRXAddress();
  btt_address.type = "BitTorrent";
  btt_address.symbol = "BTT";
  return btt_address;
}
async function createUNIAddress() {
  let uni_address = await createETHAddress();
  uni_address.type = "Uniswap";
  uni_address.symbol = "UNI";
  uni_address.type_id = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
  return uni_address;
}
async function createDOGEAddress() {
  var CoinKey = require("coinkey");
  var coinInfo = require("coininfo");

  var dogeInfo = coinInfo("DOGE").versions;

  var address = new CoinKey.createRandom(dogeInfo);
  if (address !== undefined) {
    return {
      address: address.publicAddress,
      privateKey: address.privateKey.toString("hex"),
      type: "DOGE",
      symbol: "doge",
    };
  } else {
    return {
      address: "",
      privateKey: "",
      type: "",
      symbol: "",
    };
  }
}
async function createBNBAddress() {
  let bnb_address = await createETHAddress();
  bnb_address.type = "Binance";
  bnb_address.symbol = "BNB";
  return bnb_address;
}
