const express = require("express");
const router = express.Router();
const multer = require('multer');

const storageEngine = multer.diskStorage({
    destination: "upload/",
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
    },
  });
  
  const upload = multer({
    storage: storageEngine,
  });

const bracket = require("../controllers/bracket.controller");

router.get("/index/:id", bracket.index);
router.post("/save", bracket.save);
router.get("/edit/:id", bracket.edit);
router.delete("/remove/:id", bracket.remove);
router.post('/upload_image', upload.array('file'), bracket.upload_image);
router.delete('/remove_image/:id', bracket.remove_image);
router.get('/get_by_url/:url', bracket.getByUrl);

module.exports = router;