const express = require("express");
const app = express();
const mysql = require("mysql2");
const { Op } = require("sequelize");
const { faker } = require("@faker-js/faker");

app.set("view-engine", "ejs");
app.use(express.static("assets"));

const model = require("sequelize");
const port = 3006;

const options = require("./models").options;
const candidate_basic_info = require("./models").candidate_basic_info;
const work_Experience = require("./models").work_Experience;

app.get("/data/:type", async (req, res) => {
  let type = req.params["type"];
  console.log(type);

  if (type == "addoptions") {
    try {
      const data1 = await options.bulkCreate([
        { optionsList: 5 },
        { optionsList: 10 },
        { optionsList: 15 },
        { optionsList: 20 },
        { optionsList: 25 },
        { optionsList: 30 },
      ]);
      res.end();
    } catch (error) {
      console.log(error);
    }
  }

  if (type == "addData") {
    try {
      // const data2 = await candidate_basic_info.bulkCreate([
      //   { firstName: "Harsh", lastName: "Patel", email: "harsh@gmail.com" },
      //   {
      //     firstName: "Harmil",
      //     lastName: "Sanghavi",
      //     email: "harmil@gmail.com",
      //   },
      //   { firstName: "Vishwa", lastName: "Bhatt", email: "vishwa@gmail.com" },
      //   { firstName: "Om", lastName: "Modi", email: "om@gmail.com" },
      //   { firstName: "Khushi", lastName: "Bhavsar", email: "khushi@gmail.com" },
      //   { firstName: "Bharti", lastName: "Vadher", email: "bharti@gmail.com" },
      //   { firstName: "Jay", lastName: "Patel", email: "jay@gmail.com" },
      //   {
      //     firstName: "Vishwa",
      //     lastName: "Joshi",
      //     email: "vishwajoshi@gmail.com",
      //   },
      //   { firstName: "Isha", lastName: "Desai", email: "isha@gmail.com" },
      //   { firstName: "Sagar", lastName: "Khatri", email: "sagar@gmail.com" },
      //   { firstName: "Manoj", lastName: "Bajiya", email: "manoj@gmail.com" },
      //   { firstName: "Mohit", lastName: "Dangariya", email: "mohit@gmail.com" },
      //   { firstName: "Niyati", lastName: "Patel", email: "niyati@gmail.com" },
      //   {
      //     firstName: "Bhavin",
      //     lastName: "Khandelwal",
      //     email: "bhavin@gmail.com",
      //   },
      //   { firstName: "Nihar", lastName: "Gajjera", email: "nihar@gmail.com" },
      //   {
      //     firstName: "Himani",
      //     lastName: "Prajapati",
      //     email: "himani@gmail.com",
      //   },
      //   {
      //     firstName: "Bhavesh",
      //     lastName: "Purohit",
      //     email: "bhavesh@gmail.com",
      //   },
      //   { firstName: "Krisha", lastName: "Sojitra", email: "krisha@gmail.com" },
      //   { firstName: "Saloni", lastName: "Patel", email: "saloni@gmail.com" },
      //   { firstName: "Utsav", lastName: "Borad", email: "utsav@gmail.com" },
      //   { firstName: "Zeel", lastName: "Patel", email: "zeel@gmail.com" },
      //   {
      //     firstName: "Vishwa",
      //     lastName: "Upadhyay",
      //     email: "vishwa@gmail.com",
      //   },
      //   { firstName: "Heer", lastName: "Upadhyay", email: "heer@gmail.com" },
      //   { firstName: "Krupam", lastName: "Rao", email: "krupam@gmail.com" },
      //   { firstName: "Smit", lastName: "Bhatt", email: "smit@gmail.com" },
      //   {
      //     firstName: "nandani",
      //     lastName: "Gajjar",
      //     email: "nandani@gmail.com",
      //   },
      //   {
      //     firstName: "Khushi",
      //     lastName: "Racchh",
      //     email: "khushiracchh@gmail.com",
      //   },
      //   { firstName: "Sanjay", lastName: "Nagar", email: "sanjay@gmail.com" },
      //   { firstName: "Sagar", lastName: "Patel", email: "sagar@gmail.com" },
      //   { firstName: "Rajesh", lastName: "Parmar", email: "rajesh@gmail.com" },
      //   { firstName: "Kevin", lastName: "Bhimani", email: "kevin@gmail.com" },
      //   { firstName: "Viraj", lastName: "Patoliya", email: "viraj@gmail.com" },
      // ]);

      // const data2 = await candidate_basic_info.create(
      //   {
      //     firstName: "Manoj",
      //     lastName: "Patel",
      //     email: "manoj@gmail.com",
      //     work_Experiences: [
      //       {
      //         companyName: "eSparkBiz Technologies Pvt. Ltd",
      //         designation: "Junor Software developer",
      //       },
      //     ],
      //   },
      //   {
      //     include: work_Experience,
      //   }
      // );

      // const data2 = await candidate_basic_info.bulkCreate(
      //   [
      //     {
      //       firstName: "Jay",
      //       lastName: "Patel",
      //       email: "harsh@gmail.com",
      //       work_Experiences: [
      //         {
      //           companyName: "eSparkBiz Technologies Pvt. Ltd",
      //           designation: "Junor Software developer",
      //         },
      //       ],
      //     },
      //     {
      //       firstName: "Vijay",
      //       lastName: "Patel",
      //       email: "harmil@gmail.com",
      //       work_Experiences: [
      //         {
      //           companyName: "eSparkBiz Technologies Pvt. Ltd",
      //           designation: "Software developer",
      //         },
      //       ],
      //     },
      //   ],
      //   {
      //     include: work_Experience,
      //   }
      // );
      for (var i = 0; i < 150; i++) {
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
      res.end();
    } catch (error) {
      console.log(error);
    }
  }

  if (type == "show") {
    try {
      console.log("hello world");
      const data = await options.findAll({
        attributes: ["optionsList"],
      });
      const data3 = await candidate_basic_info.findAll({
        attributes: ["firstName", "lastName", "email"],
      });
      // console.log(data);
      res.render("table1.ejs", { data, data3 });
    } catch (error) {
      console.log(error);
    }
  }
  if (type == "show1") {
    try {
      console.log("hello world");
      const data = await options.findAll({
        attributes: ["optionsList"],
      });
      const data3 = await candidate_basic_info.findAll({
        attributes: ["firstName", "lastName", "email"],
      });
      // console.log(data);
      res.render("table.ejs", { data, data3 });
    } catch (error) {
      console.log(error);
    }
  }

  // if (type == "pagination") {
  //   try {
  //     console.log("********************************", req.query);
  //     const length = req.query.length;
  //     const start = req.query.start;
  //     const order = req.query.order;
  //     console.log("order", order);
  //     console.log("length", length);
  //     console.log("start", start);

  //     const data3 = await candidate_basic_info.findAll({
  //       offset: start,
  //       limit: length,
  //       attributes: ["firstName", "lastName", "email"],
  //     });
  //     res.render("table1.ejs", { data3 });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
});

app.get("/", (req, res) => {
  res.render("table1.ejs", {});
});

app.get("/pagination", async (req, res) => {
  try {
    // console.log("********************************", req.query);
    // return;
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
      ordertable = [work_Experience, orderBy11, orderDir];
      console.log("aslkdjfhjkasefjhkjsf");
    } else {
      // table = "candidate_basic_info";
      ordertable = [orderBy, orderDir];
    }
    console.log("******************************", ordertable);
    // return;
    if (length < 0) {
      var data3 = await candidate_basic_info.findAll({
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
    } else {
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
    }

    // const data3 = await candidate_basic_info.findAll({
    //   offset: start,
    //   limit: length,
    //   order: [[orderBy, orderDir]],
    //   attributes: ["firstName", "lastName", "email"],
    //   include: {
    //     model: work_Experience,
    //     order: [["model.work_Experience",orderBy, orderDir]],
    //     require: true,
    //     where: {
    //       [Op.or]: [
    //         {
    //           "$candidate_basic_info.firstName$": {
    //             [Op.like]: `%${search.value}%`,
    //           },
    //         },
    //         {
    //           "$candidate_basic_info.lastName$": {
    //             [Op.like]: `%${search.value}%`,
    //           },
    //         },
    //         {
    //           "$candidate_basic_info.email$": {
    //             [Op.like]: `%${search.value}%`,
    //           },
    //         },
    //         {
    //           companyName: {
    //             [Op.like]: `%${search.value}%`,
    //           },
    //         },
    //         {
    //           designation: {
    //             [Op.like]: `%${search.value}%`,
    //           },
    //         },
    //       ],
    //     },
    //     attributes: ["companyName", "designation"],
    //   },
    // });

    const data4 = await candidate_basic_info.count();
    // console.log("---------------------------------------", data3);

    // res.json(data3);
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
});

app.listen(port, (req, res) => {
  console.log("Successfully Connected");
});
