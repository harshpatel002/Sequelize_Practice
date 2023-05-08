const express = require("express");
const app = express();

const port = 3010;

app.set("view-engine", "ejs");
app.use(express.static("assets"));

const addData = require("./routes/addDataRoutes");
const task = require("./routes/indexRoutes");
const deleteData = require("./routes/deleteDataRoutes");
// const deleteData= require("./")
app.use("/", addData);
app.use("/", task);
app.use("/", deleteData);

app.listen(port, (req, res) => {
  console.log("Connected Successfully");
});
