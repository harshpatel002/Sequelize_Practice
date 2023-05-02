const { Model } = require('sequelize');
const Consumers=require('./models/query');
const { Op } = require("sequelize");
Consumers.sync();
// User.sync({alter:true});
// Consumers.sync({force:true});

async function myfun(){
    // Inserting Single data into Table
    // const data=User.create({firstName:"Harsh",lastName:"Patel"});

    // Inserting Data in Bulk
    const data1=await Consumers.bulkCreate([
        {firstName:"Rajesh"},
        {firstName:"Harmil",lastName:"Sanghavi"},
        {firstName:"Bharti",lastName:"Vadher"},
        {firstName:"Isha",lastName:"Desai"},
        {firstName:"Bhavesh",lastName:"Purohit"}
    ])
    


    // Destroy to delete specific row    
    // const data=await Consumers.destroy({
    //     where:{},
    //     truncate: true
    // })



    // drop to drop whole table
    // await Consumers.drop();
    // console.log('Table Dropped');
    
}

myfun()