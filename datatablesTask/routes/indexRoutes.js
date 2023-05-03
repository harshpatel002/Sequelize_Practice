const express = require("express");
const app = express();
const router = express.Router();

const { pagination, dataShow } = require("../controller/indexController");

router.get('/pagination',pagination);
router.get('/',dataShow);

module.exports= router;