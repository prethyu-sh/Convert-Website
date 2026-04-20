const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { resizeImage } = require("../controllers/resizeController");

router.post("/resize-image", upload.single("image"), resizeImage);

module.exports = router;