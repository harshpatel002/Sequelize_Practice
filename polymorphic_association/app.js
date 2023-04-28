const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 5002;
app.set("view-engine", "ejs");

const { Model } = require("sequelize");

const image = require("./controller/image");
const video = require("./controller/video");

app.use("/image", image.images);
app.use("/video", video.videos);


app.listen(port, async (req, res) => {
  console.log("Connected successfully");
});
