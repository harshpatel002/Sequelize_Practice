"use strict";
const { Model } = require("sequelize");

// const tag_taggable = require("./tag_taggable");
// const comment = require("./comment");
module.exports = (sequelize, DataTypes) => {
  class images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      images.hasMany(models.comment, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "image",
        },
      });

      images.belongsToMany(models.tag, {
        through: {
          model: models.tag_taggable,
          scope: {
            taggableType: "image",
          },
        },
        foreignKey: "taggableId",
        constraints: false,
      });
    }
  }
  images.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "images",
    }
  );

  return images;
};
