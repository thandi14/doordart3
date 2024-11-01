'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemOptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemOptions.init({
    itemId: DataTypes.INTEGER,
    option: DataTypes.STRING,
    required: DataTypes.BOOLEAN,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemOptions',
  });
  return ItemOptions;
};