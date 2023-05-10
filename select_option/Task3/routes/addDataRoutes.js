const express = require("express");
const app = express();
const router = express.Router();

const { addData1 } = require("../controller/addDataController");

router.get('/addData',addData1);

module.exports= router;