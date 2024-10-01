'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserStocks.belongsTo(models.Users, { foreignKey: 'user_id' });
      UserStocks.belongsTo(models.Stocks, { foreignKey: 'stock_id' });
    }
  }
  UserStocks.init({
    user_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserStocks',
  });
  return UserStocks;
};