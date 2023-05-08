const express = require("express");
const app = express();

const port = 3010;

app.set("view-engine", "ejs");
app.use(express.static("assets"));

const addData = require("./routes/addDataRoutes");
const task = require("./routes/indexRoutes");
app.use("/", addData);
app.use("/", task);

app.listen(port, (req, res) => {
  console.log("Connected Successfully");
});
