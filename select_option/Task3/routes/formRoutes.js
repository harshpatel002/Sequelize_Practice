const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { form,data, show,validate } = require("../controller/formController");

router.post('/form',form);
router.get('/data',data)
router.get('/show',show)
router.get('/validate',validate)

module.exports= router;