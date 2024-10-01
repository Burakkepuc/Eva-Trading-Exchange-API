'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Stocks', [
      {
        symbol: 'APL',
        price: 150.00,
        quantity: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        symbol: 'TSL',
        price: 700.00,
        quantity: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        symbol: 'GGL',
        price: 2800.00,
        quantity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        symbol: 'AMN',
        price: 3300.00,
        quantity: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        symbol: 'ASN',
        price: 2300.00,
        quantity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Stocks', null, {});

  }
};
