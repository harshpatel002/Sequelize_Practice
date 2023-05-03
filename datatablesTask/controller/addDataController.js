const express = require("express");
const app = express();
const mysql = require("mysql2");
const { Op } = require("sequelize");
const { faker } = require("@faker-js/faker");

const { Model } = require("sequelize");

const candidate_basic_info = require("../models").candidate_basic_info;
const work_Experience = require("../models").work_Experience;

const addData = async (req, res) => {
  try {
    for (var i = 0; i < 100; i++) {
      const data2 = await candidate_basic_info.bulkCreate(
        [
          {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            work_Experiences: [
              {
                companyName: faker.company.name(),
                designation: faker.name.jobTitle(),
              },
            ],
          },
        ],
        {
          include: work_Experience,
        }
      );
    }
    console.log("harshpatel");
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addData };
