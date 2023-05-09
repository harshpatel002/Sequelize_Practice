const{deleteDatas}= require('../repository/deleteDataRepository')

const deleteData = async (req, res) => {
  try {
    const optionId= req.query.optionId;
    const selectId= req.query.selectId;
    const id= req.query.id;
    console.log(optionId);

    // const deleteData= await deleteDatas()

    // const deleteData= await deleteDatas()

    const deleteData= await deleteDatas({optionId,selectId,id})
    
    res.end();
  } catch (error) {
    console.log(error);
  }
};


module.exports={deleteData}