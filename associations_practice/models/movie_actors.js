'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie_actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie_actors.init({
    movieId: DataTypes.INTEGER,
    actorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie_actors',
  });
  return movie_actors;
};