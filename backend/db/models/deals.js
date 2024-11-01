'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Deals.init({
    itemId: DataTypes.INTEGER,
    deal: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deals',
  });
  return Deals;
};