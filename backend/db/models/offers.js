'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Offers.init({
    restaurantId: DataTypes.INTEGER,
    offer: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Offers',
  });
  return Offers;
};