const express = require("express");
const app = express();
const router = express.Router();

const { task } = require("../controller/indexController");

router.get('/task',task);

module.exports= router;