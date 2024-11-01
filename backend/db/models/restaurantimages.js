'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RestaurantImages.init({
    restaurantId: DataTypes.INTEGER,
    bannerUrl: DataTypes.TEXT,
    thumbnailUrl: DataTypes.TEXT,
    iconUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RestaurantImages',
  });
  return RestaurantImages;
};