const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const CustomError = require("../config/errors/CustomError");

const User = require("../models/User");

/*
  1. SIGN UP USER 
*/

module.exports.signup = (req, res, next) => {
  try {
    const { firstname, lastname, email, password, username } = req.body;

    User.findOne({ email }).then(async user => {
      if (user) {
        res.json({ success: false, message: 'User already exists.' });
        return;
      } else {
        /* Custom methods on newUser are defined in User model */
        const user = new User;
        user.firstname = firstname,
        user.lastname = lastname,
        user.email = email,
        user.password = password,
        user.username = username,
        user.avatar = "avatar.png",
        user.cover = "cover.png",
        user.displayName = '',
        user.url = username,
        user.bio = "",
        user.save().then(async err => {
          const accessToken = await user.generateAccessToken(); // Create Access Token

          // Send Response on successful Sign Up
          res.status(201).json({
            success: true,
            accessToken,
          });
        });
      }
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*
  2. LOGIN USER
*/
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    /* Custom methods on user are defined in User model */
    const user = await User.findOne({ email });
    if (!user) {
      res.json({ success: false, message: 'User not exists' });
      return;
    }
    const passwdMatch = await bcrypt.compare(password, user.password);
    if (!passwdMatch) {
      res.json({ success: false, message: 'Wrong email or password' });
      return;
    }

    const accessToken = await user.generateAccessToken(); // Create Access Token

    // Send Response on successful Login
    res.json({
      success: true,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.oauth = (req, res) => {
  const { email, displayName, firstname, lastname } = req.body;

  User.findOne({ email }).then(async user => {
    if (user) {
      const accessToken = await user.generateAccessToken(); // Create Access Token
      res.json({ success: true, accessToken });
    } else {
      const random = Date.now().toString();
      user = new User;
      user.email = email;
      user.displayName = displayName;
      user.firstname = firstname;
      user.lastname = lastname;
      user.avatar = 'avatar.png';
      user.cover = 'cover.png';
      user.username = `${firstname}_${lastname}_${random.slice(0, random.length-3)}`;
      user.url = user.username;
      user.password = '';
      user.bio = '';
      user.save().then(async err => {
        const accessToken = await user.generateAccessToken();
        res.json({ success: true, accessToken });
      });
    }
  })
}