const express = require("express");
const app = express();
const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/index");

const video = require("../models").videos;
const comment = require("../models").comment;
const tag = require("../models").tag;

const videos = async (req, res) => {
  try {
    // Data insertion in one to many polymorphic AssociationError

    // const data6 = await video.create(
    //   {
    //     title: "hcjshfjsdhfjkn",
    //     url: "csdkjfksdjhfiok.com",
    //     comments: [
    //       {
    //         title: "8eruweyruiweu",
    //       },
    //     ],
    //   },
    //   {
    //     include: comment,
    //   }
    // );

    // Data insertion in many to many polymorphic AssociationError

    const data6 = await video.create(
      {
        title: "hello",
        url: "hello.com",
        tags: [
          {
            name: "hello",
          },
        ],
      },
      {
        include: tag,
      }
    );

    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { videos };
