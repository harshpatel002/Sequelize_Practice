'use strict';

const actors = require('../models/actors');
const movie = require('../models/movie');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movie_actors', {
       
      movieId: {
        type: Sequelize.INTEGER,
        references:{
          model:'movies',
          key:'id'
        },
        onDelete : 'no action',
        onUpdate : 'no action'
      },
      actorId: {
        type: Sequelize.INTEGER,
        references:{
          model:'actors',
          key:'id'
        },
        onDelete : 'no action',
        onUpdate : 'no action'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movie_actors');
  }
};