const mysql = require("mysql2");
// const { Op } = require("sequelize");

const { Model } = require("sequelize");

const selectMasters = require("../models").selectMaster;
const optionMasters = require("../models").optionMaster;

const data1 = async ({ userEmail, heading, type, arrayOfOption }) => {
  return selectMasters.create(
    {
      userEmail: userEmail,
      selectValue: heading,
      selectType: type,
      optionMasters: arrayOfOption,
    },
    {
      include: {
        model: optionMasters,
      },
    }
  );
};

const data2 = async ({ userEmail }) => {
  return selectMasters.findAll({
    attributes: ["id", "userEmail", "selectValue", "selectType"],
    where: {
      userEmail: userEmail,
    },
    include: [{ model: optionMasters, attributes: ["optionValue"] }],
  });
};

module.exports = { data1, data2 };
