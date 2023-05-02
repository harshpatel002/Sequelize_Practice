"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class work_Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      work_Experience.belongsTo(models.candidate_basic_info, {
        foreignKey: "candidate_id",
      });
    }
  }
  work_Experience.init(
    {
      companyName: DataTypes.STRING,
      designation: DataTypes.STRING,
      candidate_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "work_Experience",
    }
  );
  return work_Experience;
};
