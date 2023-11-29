const express = require("express");
const router = express.Router();

const validators = require("../validators/user-validators");
const auth = require("../controllers/auth.controller");


router.post("/signup", validators.signupValidator, auth.signup);
router.post("/signin", validators.loginValidator, auth.login);
router.post('/oauth', auth.oauth);

module.exports = router;