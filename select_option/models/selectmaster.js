'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class selectMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      selectMaster.hasMany(models.optionMaster,{
        foreignKey:"selectId"
      })
    }
  }
  selectMaster.init({
    selectValue: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'selectMaster',
    paranoid:true,
  });
  return selectMaster;
};