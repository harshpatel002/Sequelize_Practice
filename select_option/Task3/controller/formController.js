// const selectMasters = require("../models").selectMaster;
// const optionMasters = require("../models").optionMaster;
const { data1, data2 } = require("../repository/formRepository");

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
    let userEmail = body.userEmail;

    let i, j;

    for (i = 0; i < body.heading.length; i++) {
      let s = "";
      let arrayOfOption = [];
      let heading = body.heading[i];
      let type = body.type[i];
      if (typeof body.optionName[i] == "string") {
        s = { optionValue: `${body.optionName[i]}` };
        arrayOfOption.push(s);
      } else {
        for (j = 0; j < body.optionName[i].length; j++) {
          s = { optionValue: `${body.optionName[i][j]}` };
          arrayOfOption.push(s);
        }
      }

      const createData = await data1({
        userEmail,
        heading,
        type,
        arrayOfOption,
      });
    }

    res.redirect(`/show?userEmail=${userEmail}`);
  } catch (error) {
    console.log(error);
  }
};

const show = async (req, res) => {
  try {
    let html = "";
    let userEmail = req.query.userEmail;

    let selectMaster = await data2({ userEmail });

    selectMaster.forEach((element) => {
      let selectType = element.selectType;
      let selectValue = element.selectValue;
      html += `<br><span class="heading">${selectValue}:</span>   `;
      if (selectType == "dropdown") {
        html += `<select>`;
      }

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

    res.render("formShow.ejs", { html, userEmail });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { form, data, show };
