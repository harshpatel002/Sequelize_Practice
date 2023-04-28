"use strict";

const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");
const videos = require("../models/videos")(sequelize, DataTypes);
const images = require("../models/images")(sequelize, DataTypes);

console.log("-----------", videos);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      commentableId: {
        type: Sequelize.INTEGER,
      },
      commentableType: {
        type: Sequelize.STRING,
        // references: {
        //   model: { images, videos },
        //   key: "id",
        //   constraints: false,
        // },
        // references: [
        //   {
        //     model: "images",
        //     key: "id",
        //     constraints: false,
        //   },
        //   {
        //     model: "videos",
        //     key: "id",
        //     constraint: false,
        //   },
        // ],
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
