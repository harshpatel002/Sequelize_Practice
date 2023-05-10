const { data1, data2 } = require("../repository/formRepository");
const selectMaster = require("../models").selectMaster;
const optionMaster = require("../models").optionMaster;

const data = async (req, res) => {
  try {
    let html;
    let heading = "";
    res.render("form2.ejs", { html, heading });
  } catch (error) {
    console.log(error);
  }
};
const form = async (req, res) => {
  try {
    let { body } = req;
    console.log(body);

    let i, j, k;

    for (i = 0; i < body.heading.length; i++) {
      let s = "";
      let arrayOfOption = [];
      if (typeof body.optionName[i] == "string") {
        s = { optionValue: `${body.optionName[i]}` };
        arrayOfOption.push(s);
      } else {
        for (j = 0; j < body.optionName[i].length; j++) {
          s = { optionValue: `${body.optionName[i][j]}` };
          arrayOfOption.push(s);
        }
      }

      console.log(arrayOfOption, "oopdifjs");

      await selectMaster.create(
        {
          selectValue: body.heading[i],
          selectType: body.type[i],
          optionMasters: arrayOfOption,
        },
        {
          include: {
            model: optionMaster,
          },
        }
      );
    }

    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { form, data };
