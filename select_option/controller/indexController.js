const {data1,data2} = require('../repository/indexRepository')

const task = async (req, res) => {
  try {
    const type = req.query.type;
    const field = req.query.field;
    console.log(type);
    console.log(field);

    const { id } = await data1({field})

    console.log(id);

    const data = await data2({id}); 

    let optionValue = [];

    data.forEach((element) => {
      optionValue.push(element.optionValue);
    });
    console.log(optionValue);

    let html = "";

    if (type == "radio" || type == "checkbox") {
      optionValue.forEach((element) => {
        html += `${element}:<input type="${type}" name="${element}" id="${element}"><br>`;
      });
    }

    if (type == "dropdown") {
      html += `<select name="${field}" id="${field}">`;

      optionValue.forEach((element) => {
        html += `<option value="${element}">${element}</option><br>`;
      });

      html += `</select>`;
    }

    // if (type == "text") {
    //   optionValue.forEach((element) => {
    //     html += `<input type="text" name="textField" id="textField" placeholder='${element}'><br>`;
    //   });
    // }

    res.render("index.ejs", { html });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { task };
