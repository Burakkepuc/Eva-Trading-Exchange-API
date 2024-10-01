'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', [
      { user_id: 1, stock_id: 1, type: 'BUY', quantity: 5, price: 150.00, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, stock_id: 2, type: 'BUY', quantity: 2, price: 700.00, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, stock_id: 3, type: 'SELL', quantity: 1, price: 2800.00, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, stock_id: 4, type: 'BUY', quantity: 1, price: 3300.00, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, stock_id: 5, type: 'BUY', quantity: 3, price: 250.00, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});

  }
};
