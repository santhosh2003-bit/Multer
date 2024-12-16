const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    // methods: ["GET", "HEAD", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    // credentials: true,
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const updated = multer({
  storage: storage,
});
app.post("/upload", updated.single("avatar"), (req, res) => {
  //   res.setHeader("Access-Control-Allow-Origin", "http://localhost");this is for if you don't want to use the cors type external libraries you want to allow access to the uploaded files
  try {
    res.json({ message: "File uploaded successfully" });
  } catch (err) {
    console.log(err);
  }
});
app.listen(3000, () => {
  console.log("Server Running on port 3000");
});
