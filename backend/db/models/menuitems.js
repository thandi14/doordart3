'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MenuItems.init({
    restaurantId: DataTypes.INTEGER,
    item: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    cals: DataTypes.STRING,
    category: DataTypes.STRING,
    imgUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MenuItems',
  });
  return MenuItems;
};