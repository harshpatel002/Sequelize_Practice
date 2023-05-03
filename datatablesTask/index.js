const express = require("express");
const app = express();
const mysql = require("mysql2");

app.set("view-engine", "ejs");
app.use(express.static("assets"));

// const model = require("sequelize");
const { Model } = require("sequelize");
const port = 3006;

const addData = require("./routes/addDataRoutes");
const pagination = require("./routes/indexRoutes");
const dataShow = require("./routes/indexRoutes");

app.use("/", addData);
app.use("/", pagination);
app.use("/", dataShow);

app.listen(port, (req, res) => {
  console.log("Successfully Connected");
});
