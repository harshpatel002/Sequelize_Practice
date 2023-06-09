"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class selectMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      selectMaster.hasMany(models.optionMaster, {
        foreignKey: "selectId",
      });
    }
  }
  selectMaster.init(
    {
      userEmail: DataTypes.STRING,
      selectValue: DataTypes.STRING,
      selectType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "selectMaster",
    }
  );
  return selectMaster;
};
