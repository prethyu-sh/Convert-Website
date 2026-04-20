const sharp = require("sharp");
const fs = require("fs");

exports.convertImage = async (req, res) => {
  try {
    const inputPath = req.file.path;
    const format = req.body.format || "jpeg";

    console.log("CONVERT API HIT");

    const outputPath = `uploads/converted-${Date.now()}.${format}`;

    let sharpInstance = sharp(inputPath);

    if (format === "png") {
      sharpInstance = sharpInstance.png();
    } else if (format === "webp") {
      sharpInstance = sharpInstance.webp();
    } else {
      sharpInstance = sharpInstance.jpeg();
    }

    await sharpInstance.toFile(outputPath);

    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Conversion failed" });
  }
};