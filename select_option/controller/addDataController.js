const {addDatas} = require('../repository/addDataRepository')

const addData1 = async (req, res) => {
  try {
    const data = await addDatas()
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports={addData1}
