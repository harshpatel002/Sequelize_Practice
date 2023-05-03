const express = require("express");
const app = express();
const mysql = require("mysql2");
const { Op } = require("sequelize");
const { faker } = require("@faker-js/faker");

const { Model } = require("sequelize");

const candidate_basic_info = require("../models").candidate_basic_info;
const work_Experience = require("../models").work_Experience;

const dataShow = async (req, res) => {
  res.render("table1.ejs", {});
};

const pagination = async (req, res) => {
  try {
    // console.log("********************************", req.query);
    // const length = req.query.length;
    // const start = req.query.start;
    let search = req.query.search;
    // console.log("/////////////////////////", search.value);
    let draw = req.query.draw;
    // console.log("draw+++++++++++++++++++++", draw);
    let length = parseInt(req.query.length);
    let start = parseInt(req.query.start);

    let columns = req.query.columns;
    let order = req.query.order;
    let orderCol = order[0].column;
    let orderDir = order[0].dir;
    console.log("columns", columns);
    console.log("orderColumns", orderCol);
    let orderBy = columns[orderCol].data;
    let orderBy1 = orderBy.split(".");
    // console.log("order", order);
    console.log("orderby", orderBy);
    let orderBy10 = orderBy1[0];
    let orderBy11 = orderBy1[1];
    let slice = orderBy10.slice(0, -2);
    console.log("orderby10", orderBy10);
    console.log("orderby11", orderBy11);
    // console.log("order Dir", orderDir);
    // console.log("length", length);
    // console.log("start", start);
    let table;
    let ordertable;

    if (slice == "work_Experiences") {
      table = "work_Experiences";
      ordertable = [table, orderBy11, orderDir];
    } else {
      ordertable = [orderBy, orderDir];
    }
    console.log("******************************", ordertable);

    const data4 = await candidate_basic_info.count();

    if (length == -1) {
      length = data4;
    }

    var data3 = await candidate_basic_info.findAll({
      offset: start,
      limit: length,
      order: [ordertable],
      attributes: ["firstName", "lastName", "email"],
      include: {
        model: work_Experience,
        require: true,
        where: {
          [Op.or]: [
            {
              "$candidate_basic_info.firstName$": {
                [Op.like]: `%${search.value}%`,
              },
            },
            {
              "$candidate_basic_info.lastName$": {
                [Op.like]: `%${search.value}%`,
              },
            },
            {
              "$candidate_basic_info.email$": {
                [Op.like]: `%${search.value}%`,
              },
            },
            {
              companyName: {
                [Op.like]: `%${search.value}%`,
              },
            },
            {
              designation: {
                [Op.like]: `%${search.value}%`,
              },
            },
          ],
        },
        attributes: ["companyName", "designation"],
      },
    });

    return res.json({
      start: start,
      draw: draw,
      recordsTotal: data4,
      recordsFiltered: data4,
      data: data3,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { pagination, dataShow };
