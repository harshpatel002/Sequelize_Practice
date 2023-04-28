"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer.init(
    {
      customerName: DataTypes.STRING,
      status: DataTypes.ENUM('Pending','Success')
    },
    {
      hooks:{
        // beforeCreate:(customer,option)=>{
        //   customer.status='Pending'
        // },
        afterCreate:(customer)=>{
          customer.status='Success'
        }
        
      },
    
      sequelize,
      modelName: "customer",
    }
  );
  return customer;
};
