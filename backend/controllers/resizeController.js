const sharp = require("sharp");
const fs = require("fs");

exports.resizeImage = async (req, res) => {
  try {
    const inputPath = req.file.path;
    const outputPath = "uploads/resized-" + Date.now() + ".jpg";

    console.log("RESIZE API HIT");
    
    const width = req.body.width ? parseInt(req.body.width) : null;
const height = req.body.height ? parseInt(req.body.height) : null;

let resizeOptions = {};

if (width && height) {
  resizeOptions = { width, height };
} else if (width) {
  resizeOptions = { width };
} else if (height) {
  resizeOptions = { height };
} else {
  resizeOptions = { width: 800 };
}

await sharp(inputPath)
  .resize(resizeOptions)
  .jpeg({ quality: 80 })
  .toFile(outputPath);

    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Resize failed" });
  }
};