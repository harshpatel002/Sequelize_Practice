const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3010;

app.set("view-engine", "ejs");
app.use(express.static("assets"));

const form=require('./routes/formRoutes')

app.use('/',form)

app.listen(port, (req, res) => {
  console.log("Connected Successfully");
});
