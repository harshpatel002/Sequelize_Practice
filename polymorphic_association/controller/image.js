const express = require("express");
const app = express();
const { DataTypes, AssociationError } = require("sequelize");
const { sequelize } = require("../models/index");
const tag_taggable = require("../models/tag_taggable");

// console.log("==================", sequelize);

// const image = require("../models/images")(sequelize, DataTypes);
// const comment = require("../models/comment")(sequelize, DataTypes);
// const video = require("../models/videos")(sequelize, DataTypes);

const image = require("../models").images;
const comment = require("../models").comment;
const tag = require("../models").tag;
const tag_taggables = require("../models").tag_taggable;

const images = async (req, res) => {
  try {
    // Data insertion in one to many polymorphic AssociationError

    // const data5 = await image.create(
    //   {
    //     title: "hp",
    //     url: "hp.com",
    //     comments: [
    //       {
    //         title: "hp123",
    //       },
    //     ],
    //   },
    //   {
    //     include: comment,
    //   }
    // );

    // Data insertion in many to many polymorphic AssociationError
    const data6 = await image.create(
      {
        title: "welcome123",
        url: "welcome123.com",
        tags: [
          {
            name: "welcome123",
          },
        ],
      },
      {
        include: tag,
      }
    );

    // const data7 = await tag_taggables.destroy(
    //   {
    //     where: { taggableId: 5 },
    //     tags: [
    //       {
    //         where: { tagId: 11 },
    //       },
    //     ],

    //     // tags: [
    //     //   {
    //     //     where: { id: 3 },
    //     //   },
    //     // ],
    //   },
    //   {
    //     include: tag,
    //   }
    // );
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { images };
