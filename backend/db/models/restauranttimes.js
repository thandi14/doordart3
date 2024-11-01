'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantTimes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RestaurantTimes.init({
    restaurantId: DataTypes.INTEGER,
    monday: DataTypes.STRING,
    tuesday: DataTypes.STRING,
    wednesday: DataTypes.STRING,
    thursday: DataTypes.STRING,
    friday: DataTypes.STRING,
    breakfast: DataTypes.STRING,
    lunch: DataTypes.STRING,
    dinner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RestaurantTimes',
  });
  return RestaurantTimes;
};