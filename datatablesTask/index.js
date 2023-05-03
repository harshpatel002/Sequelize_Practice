const express = require("express");
const app = express();
const { Model } = require("sequelize");

const addData = require("./routes/addDataRoutes");
const pagination = require("./routes/indexRoutes");
const dataShow = require("./routes/indexRoutes");

app.set("view-engine", "ejs");
app.use(express.static("assets"));

app.use("/", addData);
app.use("/", dataShow);
app.use("/", pagination);

const port = 3006;


app.listen(port, (req, res) => {
  console.log("Successfully Connected");
});
