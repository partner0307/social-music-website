const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const CustomError = require("../config/errors/CustomError");

const User = require("../models/User");

/*
  1. SIGN UP USER 
*/

module.exports.signup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, username } = req.body;

    /* Custom methods on newUser are defined in User model */
    const newUser = new User({
      firstname,
      lastname,
      email,
      password,
      username,
      avatar: "avatar.png",
      cover: "cover.png",
      displayName: '',
      url: username,
      bio: "",
    });
    await newUser.save(); // Save new User to DB

    const accessToken = await newUser.generateAccessToken(); // Create Access Token

    // Send Response on successful Sign Up
    res.status(201).json({
      success: true,
      accessToken,
    });
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
