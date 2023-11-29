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


const user = require('../controllers/user.controller.js');

// TEST Route
router.get("/", function (req, res) {
  res.send("Hello /api/users routing works 🥂!!");
});

router.post('/save', user.save);
router.delete('/remove/:id', user.remove);
router.post('/follow', user.follow);
router.post('/upload', upload.array('file'), user.upload);
router.post('/remove_image', user.remove_image)

module.exports = router;
