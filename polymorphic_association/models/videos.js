"use strict";
const { Model } = require("sequelize");

const tag_taggable = require("./tag_taggable");
// const comment = require("./comment");
module.exports = (sequelize, DataTypes) => {
  class videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      videos.hasMany(models.comment, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "video",
        },
      });

      videos.belongsToMany(models.tag, {
        through: {
          model: models.tag_taggable,
          scope: {
            taggableType: "video",
          },
        },
        foreignKey: "taggableId",
        constraints: false,
      });
    }
  }
  videos.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "videos",
    }
  );

  return videos;
};
