const sequelize = require("../config/connection");

var {DataTypes}=require('sequelize');

const Consumers=sequelize.define('Consumers',{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'John'
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Doe'
    },
},

// timestamps: false to disable createdAt & updatedAt 
// {
//     timestamps:false
// }
)

module.exports=Consumers;



// timestamps: true,

//   // I don't want createdAt
//   createdAt: false,

//   // I want updatedAt to actually be called updateTimestamp
//   updatedAt: 'updateTimestamp'