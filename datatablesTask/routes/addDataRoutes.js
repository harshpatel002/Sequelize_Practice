const express = require("express");
const app = express();
const router = express.Router();

const { addData } = require("../controller/addDataController");

router.get('/addData',addData);

module.exports= router;