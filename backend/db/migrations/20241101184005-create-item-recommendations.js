'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemRecommendations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      optionId: {
        type: Sequelize.INTEGER
      },
      selectionId: {
        type: Sequelize.INTEGER
      },
      recommendation: {
        type: Sequelize.STRING
      },
      cals: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      selected: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('ItemRecommendations');
  }
};