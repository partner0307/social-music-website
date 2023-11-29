const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const validators = require("../validators/user-validators");
const userControllers = require("../controllers/auth.controller");

/**
 * @method - POST
 * @param {string} path - /api/users/signup
 * @description - User Signup
 */
router.post("/signup", validators.signupValidator, userControllers.signup);

/**
 * @method - POST
 * @param {string} path - /api/users/login
 * @description - User Login
 */
router.post("/signin", validators.loginValidator, userControllers.login);

router.use("/users", userRoutes);

module.exports = router;
