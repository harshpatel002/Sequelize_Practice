"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class optionMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      optionMaster.belongsTo(models.selectMaster, {
        foreignKey: "selectId",
      });
    }
  }
  optionMaster.init(
    {
      selectId: DataTypes.INTEGER,
      optionValue: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "optionMaster",
      paranoid:true,
    }
  );
  return optionMaster;
};
