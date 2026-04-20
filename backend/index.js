const express = require("express");
const cors = require("cors");

const imageRoutes = require("./routes/imageRoutes");

const app = express();
app.use(cors());

app.use("/api", imageRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const pdfRoutes = require("./routes/pdfRoutes");
app.use("/api", pdfRoutes);

const resizeRoutes = require("./routes/resizeRoutes");
app.use("/api", resizeRoutes);

const convertRoutes = require("./routes/convertRoutes");
app.use("/api", convertRoutes);