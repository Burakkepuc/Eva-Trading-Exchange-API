'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stocks.hasMany(models.UserStocks, { foreignKey: 'stock_id' });
      Stocks.hasMany(models.Transactions, { foreignKey: 'stock_id' });
    }
  }
  Stocks.init({
    symbol: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stocks',
  });
  return Stocks;
};