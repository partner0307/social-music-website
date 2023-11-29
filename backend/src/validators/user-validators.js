const { body } = require("express-validator");

const User = require("../models/User");

module.exports.signupValidator = [
  body("firstname").trim().notEmpty().withMessage("Firstname CANNOT be empty"),
  body("lastname").trim().notEmpty().withMessage("Lastname CANNOT be empty"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email CANNOT be empty")
    .bail()
    .isEmail()
    .withMessage("Email is invalid")
    .bail()
    .custom(async (email) => {
      // Finding if email exists in Database
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        throw new Error("E-mail already in use");
      }
    }),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("UserName CANNOT be empty")
    .bail()
    .withMessage("UserName MUST be at least 4 characters long")
    .bail()
    .custom(async (username) => {
      // Finding if email exists in Database
      const userNameExists = await User.findOne({ username });
      if (userNameExists) {
        throw new Error("UserName already in use");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password CANNOT be empty")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Password MUST be at least 4 characters long"),
  body("lastname").trim().notEmpty().withMessage("Lastname CANNOT be empty"),
];

module.exports.loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email CANNOT be empty")
    .bail()
    .isEmail()
    .withMessage("Email is invalid"),
  body("password").notEmpty().withMessage("Password CANNOT be empty"),
];
