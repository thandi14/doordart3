'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemSelection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ItemSelection.belongsTo(
        models.ItemOption,
          { foreignKey: 'optionId' }
      );
      ItemSelection.hasMany(
        models.CartItemNotes,
          { foreignKey: 'selectionId', onDelete: 'CASCADE',  hooks: true }
      );
      ItemSelection.hasMany(
        models.ItemRecommendation,
          { foreignKey: 'selectionId', onDelete: 'CASCADE',  hooks: true }
      );

    }
  }
  ItemSelection.init({
    optionId: DataTypes.INTEGER,
    selection: DataTypes.STRING,
    cals: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    selected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'ItemSelection',
  });
  return ItemSelection;
};
