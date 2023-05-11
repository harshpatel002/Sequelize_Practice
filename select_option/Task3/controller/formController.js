const selectMasters = require("../models").selectMaster;
const optionMasters = require("../models").optionMaster;

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

    let i, j;

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

      await selectMasters.create(
        {
          selectValue: body.heading[i],
          selectType: body.type[i],
          optionMasters: arrayOfOption,
        },
        {
          include: {
            model: optionMasters,
          },
        }
      );
    }

    res.redirect('/show')
  } catch (error) {
    console.log(error);
  }
};

const show = async (req, res) => {
  try {
    let html = "";

    let selectMaster = await selectMasters.findAll({
      attributes: ["id", "selectValue", "selectType"],
      include: [{ model: optionMasters, attributes: ["optionValue"] }],
    });

    selectMaster.forEach((element) => {
      console.log("==================================");
      // console.log(element);
      let selectType = element.selectType;
      let selectValue = element.selectValue;
      html += `<br><span class="heading">${selectValue}:</span>   `;
      if (selectType == "dropdown") {
        html += `<select>`;
      }
      console.log(selectType);
      for (const iterator of element.optionMasters) {
        let optionValue = iterator.optionValue;
        if (selectType == "radio" || selectType == "checkbox") {
          html += `<input type="${selectType}" name="${optionValue}" id="${optionValue}" class="radio_checkbox">${optionValue}`;
        }
        if (selectType == "dropdown") {
          html += `<option value="${optionValue}">${optionValue}</option>`;
        }
      }
      if (selectType == "dropdown") {
        html += `</select>`;
      }
    });
    console.log(html);

    res.render("formShow.ejs", { html });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { form, data, show };
