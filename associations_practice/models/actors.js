'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  actors.init({
    actorName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'actors',
    onDelete : 'CASCADE'
  });
  return actors;
};