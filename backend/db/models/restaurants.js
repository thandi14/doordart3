'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurants.init({
    userId: DataTypes.INTEGER,
    franchiseId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    deliveryFee: DataTypes.DECIMAL,
    deliveryTime: DataTypes.INTEGER,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    pickup: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurants',
  });
  return Restaurants;
};