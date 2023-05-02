"use strict";
const { Model } = require("sequelize");
const tag_taggable = require("./tag_taggable");
const videos = require("./videos");
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {


    async getTaggables(options) {
      const images = await this.getImages(options);
      const videos = await this.getVideos(options);
      // Concat images and videos in a single array of taggables
      return images.concat(videos);
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag.belongsToMany(models.images, {
        through: "tag_taggable",
        foreignKey: "tagId",
        constraints: false,
      });

      tag.belongsToMany(models.videos, {
        through: "tag_taggable",
        foreignKey: "tagId",
        constraints: false,
      });
    }
  }
  tag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return tag;
};
