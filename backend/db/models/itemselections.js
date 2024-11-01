'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemSelections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemSelections.init({
    optionId: DataTypes.INTEGER,
    selection: DataTypes.STRING,
    cals: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    selected: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ItemSelections',
  });
  return ItemSelections;
};