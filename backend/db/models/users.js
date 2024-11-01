'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    door: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};