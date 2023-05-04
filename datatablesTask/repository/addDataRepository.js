const mysql = require("mysql2");
const { Op } = require("sequelize");


const { Model } = require("sequelize");

const candidate_basic_info = require("../models").candidate_basic_info;
const work_Experience = require("../models").work_Experience;

const addDatas = async ({
  firstName,
  lastName,
  email,
  companyName,
  designation,
  include,
}) => {
  return await candidate_basic_info.bulkCreate(
    [
      {
        firstName,
        lastName,
        email,
        work_Experiences: [
          {
            companyName,
            designation,
          },
        ],
      },
    ],
    {
      include: work_Experience,
    }
  );
};

module.exports = { addDatas };
