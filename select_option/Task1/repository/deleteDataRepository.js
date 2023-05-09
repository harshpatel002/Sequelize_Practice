const optionMaster = require("../models").optionMaster;
const selectMaster = require("../models").selectMaster;

const deleteDatas = async ({optionId,selectId,id}) => {
  return await optionMaster.destroy({
      where:{
        id:optionId
      }
    })


  // return optionMaster.destroy({
  //     where:{
  //       selectId:selectId
  //     }
  //   })


  // return selectMaster.destroy({
  //   where:{
  //     id:id
  //   }
  // })


};

module.exports = { deleteDatas };
