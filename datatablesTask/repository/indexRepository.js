const mysql = require("mysql2");
const { Op } = require("sequelize");

const { Model } = require("sequelize");

const candidate_basic_info = require("../models").candidate_basic_info;
const work_Experience = require("../models").work_Experience;

const countData = () => {
  return candidate_basic_info.count();
};

const findAllData = async ({ offset, limit, order, search }) => {
  console.log("sdjkfguiseyfg", search);
  console.log("order", order);
  console.log("limit", limit);
  return await candidate_basic_info.findAll({
    offset,
    limit,
    order,
    attributes: ["firstName", "lastName", "email"],
    include: {
      model: work_Experience,
      require: true,
      where: {
        [Op.or]: [
          {
            "$candidate_basic_info.firstName$": {
              [Op.like]: `%${search}%`,
            },
          },
          {
            "$candidate_basic_info.lastName$": {
              [Op.like]: `%${search}%`,
            },
          },
          {
            "$candidate_basic_info.email$": {
              [Op.like]: `%${search}%`,
            },
          },
          {
            companyName: {
              [Op.like]: `%${search}%`,
            },
          },
          {
            designation: {
              [Op.like]: `%${search}%`,
            },
          },
        ],
      },
      attributes: ["companyName", "designation"],
    },
  });
};

module.exports = { countData, findAllData };
