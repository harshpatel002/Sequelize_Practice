'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  team.init({
    teamId: DataTypes.INTEGER,
    teamName: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    modelName: 'team',
  });
  return team;
};