// const indexRepository= require('../repository/indexRepository')

const { countData, findAllData } = require("../repository/indexRepository");

const dataShow = async (req, res) => {
  res.render("table1.ejs", {});
};

const pagination = async (req, res) => {  
  try {
    let search = req.query.search;
    let searchValue = search.value;
    let draw = req.query.draw;
    let length = parseInt(req.query.length);
    let start = parseInt(req.query.start);
    let columns = req.query.columns;
    let order = req.query.order;
    let orderCol = order[0].column;
    let orderDir = order[0].dir;
    let orderBy = columns[orderCol].data;
    let orderBy1 = orderBy.split(".");
    let orderBy10 = orderBy1[0];
    let orderBy11 = orderBy1[1];
    let slice = orderBy10.slice(0, -2);

    let table;
    let ordertable;

    if (slice == "work_Experiences") {
      table = "work_Experiences";
      ordertable = [table, orderBy11, orderDir];
    } else {
      ordertable = [orderBy, orderDir];
    }

    const data4 = await countData();

    if (length == -1) {
      length = data4;
    }

    let data3 = await findAllData({
      offset: start,
      limit: length,
      order: [ordertable],
      search: searchValue,
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
