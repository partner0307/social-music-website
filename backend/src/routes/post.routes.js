const express = require("express");
const router = express.Router();
const multer = require('multer');

const storageEngine = multer.diskStorage({
  destination: "upload/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const upload = multer({
    storage: storageEngine,
});

const post = require("../controllers/post.controller");


router.post("/save", post.save);
router.post("/upload", upload.array('file'), post.upload);

module.exports = router;