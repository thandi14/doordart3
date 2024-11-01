'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShoppingCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      offerId: {
        type: Sequelize.INTEGER
      },
      dealId: {
        type: Sequelize.INTEGER
      },
      tip: {
        type: Sequelize.DECIMAL
      },
      fees: {
        type: Sequelize.INTEGER
      },
      gift: {
        type: Sequelize.BOOLEAN
      },
      pickup: {
        type: Sequelize.BOOLEAN
      },
      group: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      sessionId: {
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
    await queryInterface.dropTable('ShoppingCarts');
  }
};