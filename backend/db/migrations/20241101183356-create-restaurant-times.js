'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RestaurantTimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantId: {
        type: Sequelize.INTEGER
      },
      monday: {
        type: Sequelize.STRING
      },
      tuesday: {
        type: Sequelize.STRING
      },
      wednesday: {
        type: Sequelize.STRING
      },
      thursday: {
        type: Sequelize.STRING
      },
      friday: {
        type: Sequelize.STRING
      },
      breakfast: {
        type: Sequelize.STRING
      },
      lunch: {
        type: Sequelize.STRING
      },
      dinner: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('RestaurantTimes');
  }
};