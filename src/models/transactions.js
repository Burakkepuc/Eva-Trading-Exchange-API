'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Users, { foreignKey: 'user_id' });
      Transactions.belongsTo(models.Stocks, { foreignKey: 'stock_id' });
    }
  }
  Transactions.init({
    user_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};