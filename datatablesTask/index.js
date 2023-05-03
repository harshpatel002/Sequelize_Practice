const express = require("express");
const app = express();
const mysql = require("mysql2");

app.set("view-engine", "ejs");
app.use(express.static("assets"));

// const model = require("sequelize");
const { Model } = require("sequelize");
const port = 3006;

const addData = require("./controller/addDataController");
const pagination = require("./controller/indexController");
const dataShow = require("./controller/indexController");

app.use("/addData", addData.addData);
app.use("/pagination", pagination.pagination);
app.use("/", dataShow.dataShow);

app.listen(port, (req, res) => {
  console.log("Successfully Connected");
});
