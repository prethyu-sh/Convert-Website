const sharp = require("sharp");
const fs = require("fs");

exports.compressImage = async (req, res) => {
  try {
    console.log("COMPRESS API HIT");
    console.log("Target size:", req.body.targetSize); // 👈 DEBUG

    const inputPath = req.file.path;
    const outputPath = "uploads/compressed-" + Date.now() + ".jpg";

    const targetKB = parseInt(req.body.targetSize) || 200;
    const targetBytes = targetKB * 1024;

    let quality = 90;
    let buffer;

    for (let i = 0; i < 10; i++) {
  quality = Math.max(10, quality); // never go below 10

  buffer = await sharp(inputPath)
    .jpeg({ quality })
    .toBuffer();

  if (buffer.length <= targetBytes) break;

  quality -= 10;
}

    fs.writeFileSync(outputPath, buffer);

    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Compression failed" });
  }
};