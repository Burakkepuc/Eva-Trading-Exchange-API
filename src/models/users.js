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
      Users.hasMany(models.UserStocks, { foreignKey: 'user_id' });
      Users.hasMany(models.Transactions, { foreignKey: 'user_id' });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};