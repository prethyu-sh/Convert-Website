const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { imageToPDF } = require("../controllers/pdfController");

router.post("/image-to-pdf", upload.single("image"), imageToPDF);

module.exports = router;