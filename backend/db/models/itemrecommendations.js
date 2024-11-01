'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemRecommendations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemRecommendations.init({
    optionId: DataTypes.INTEGER,
    selectionId: DataTypes.INTEGER,
    recommendation: DataTypes.STRING,
    cals: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    selected: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ItemRecommendations',
  });
  return ItemRecommendations;
};