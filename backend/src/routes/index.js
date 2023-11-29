const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const authRoutes = require('./auth.routes');
const postRoutes = require('./post.routes');

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use('/post', postRoutes);

module.exports = router;
