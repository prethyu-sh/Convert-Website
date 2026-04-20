const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { convertImage } = require("../controllers/convertController");

router.post("/convert-image", upload.single("image"), convertImage);

module.exports = router;