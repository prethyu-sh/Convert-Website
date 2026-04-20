const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

//  Enable CORS
app.use(cors({
  origin: "*",
}));

//  Ensure uploads folder exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

//  Routes
const imageRoutes = require("./routes/imageRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
const resizeRoutes = require("./routes/resizeRoutes");
const convertRoutes = require("./routes/convertRoutes");

app.use("/api", imageRoutes);
app.use("/api", pdfRoutes);
app.use("/api", resizeRoutes);
app.use("/api", convertRoutes);

//  Root route (for testing)
app.get("/", (req, res) => {
  res.send("API is running...");
});

//  Dynamic port (Render requirement)
const PORT = process.env.PORT || 5000;

console.log("PORT VALUE:", process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});