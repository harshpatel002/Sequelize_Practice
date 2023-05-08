const mysql = require("mysql2");
const { Op } = require("sequelize");

const { Model } = require("sequelize");

const optionMaster = require("../models").optionMaster;
const selectMaster = require("../models").selectMaster;

const data1 = async ({field}) => {
  return selectMaster.findOne({
    attributes: ["id", "selectValue"],
    where: { selectValue: field },
  });
};

const data2 = async ({id}) => {
  return optionMaster.findAll({
    attributes: ["optionValue"],
    where: { selectId: id },
  });
};

module.exports = { data1, data2 };
