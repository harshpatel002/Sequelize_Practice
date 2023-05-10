const optionMaster = require("../models").optionMaster;
const selectMaster = require("../models").selectMaster;

const addDatas = async () => {
  return await selectMaster.bulkCreate(
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
          { optionValue: "Punjab" },
          { optionValue: "Madhya Pradesh" },
          { optionValue: "Uttar Pradesh" },
        ],
      },
    ],
    {
      include: { model: optionMaster },
    }
  );
};

module.exports = { addDatas };
