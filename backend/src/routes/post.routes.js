const express = require("express");
const router = express.Router();

const post = require("../controllers/post.controller");

router.post("/save", post.save);

module.exports = router;