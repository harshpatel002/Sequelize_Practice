const express = require("express");
const app = express();
const router = express.Router();

const { deleteData } = require("../controller/deleteDataController");

router.get("/deleteData", deleteData);

module.exports = router;
