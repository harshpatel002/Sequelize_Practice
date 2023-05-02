"use strict";

const db = require("../models");
const user = require("../models/user");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("users", [
      {
        firstName: "Harsh",
        lastName: "Patel",
        email: "harsh@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Bhavesh",
        lastName: "Purohit",
        email: "bhavesh@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Harmil",
        lastName: "Sanghavi",
        email: "harmil@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // console.log(db);
    await db.user.destroy({
      where: {id:8}
    })
    
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
