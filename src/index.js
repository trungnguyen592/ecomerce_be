const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.send("Hello");
});

console.log("process.env.MONGO_DB", process.env.MONGO_DB);

// Kết nối MongoDB
mongoose
  .connect(
    `mongodb+srv://trungnguyen:${process.env.MONGO_DB}@cluster0.gth9v.mongodb.net/DATN?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connect Success!");
  })
  .catch((err) => {
    console.error("Connection error:", err.message);
  });

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
