const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { compressImage } = require("../controllers/imageController");

router.post("/compress-image", upload.single("image"), compressImage);

module.exports = router;