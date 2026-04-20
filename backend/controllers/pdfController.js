const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const sharp = require("sharp");

exports.imageToPDF = async (req, res) => {
  try {
    console.log("Image to PDF API hit");

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const inputPath = req.file.path;

    // Convert ANY image to JPEG
    const convertedPath = inputPath + "-converted.jpg";

    await sharp(inputPath)
      .jpeg()
      .toFile(convertedPath);

    const imageBytes = fs.readFileSync(convertedPath);

    const pdfDoc = await PDFDocument.create();

    const image = await pdfDoc.embedJpg(imageBytes);

    const page = pdfDoc.addPage([image.width, image.height]);

    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });

    const pdfBytes = await pdfDoc.save();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=converted.pdf");

    res.end(Buffer.from(pdfBytes));

    // Cleanup
    fs.unlinkSync(inputPath);
    fs.unlinkSync(convertedPath);

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};