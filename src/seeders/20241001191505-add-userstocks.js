'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserStocks', [
      { user_id: 1, stock_id: 1, quantity: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, stock_id: 2, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, stock_id: 3, quantity: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, stock_id: 4, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, stock_id: 5, quantity: 3, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserStocks', null, {});

  }
};
