const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { form,data } = require("../controller/formController");

router.post('/form',form);
router.get('/data',data)

module.exports= router;