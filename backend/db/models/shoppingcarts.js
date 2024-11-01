'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCarts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShoppingCarts.init({
    restaurantId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    offerId: DataTypes.INTEGER,
    dealId: DataTypes.INTEGER,
    tip: DataTypes.DECIMAL,
    fees: DataTypes.INTEGER,
    gift: DataTypes.BOOLEAN,
    pickup: DataTypes.BOOLEAN,
    group: DataTypes.BOOLEAN,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    sessionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShoppingCarts',
  });
  return ShoppingCarts;
};