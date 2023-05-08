const optionMaster = require("../models").optionMaster;
const selectMaster = require("../models").selectMaster;

const addData = async (req, res) => {
  try {
    const data = await selectMaster.bulkCreate(
      [
        {
          selectValue: "gender",
          optionMasters: [
            { optionValue: "Male" },
            { optionValue: "Female" },
            { optionValue: "Others" },
          ],
        },
        {
          selectValue: "state",
          optionMasters: [
            { optionValue: "Gujarat" },
            { optionValue: "Maharashtra" },
            { optionValue: "Rajasthan" },
          ],
        },
      ],
      {
        include: { model: optionMaster },
      }
    );
    res.end();
  } catch (error) {
    console.log(error);
  }
};


module.exports={addData}
