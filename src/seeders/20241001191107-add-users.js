'use strict';

const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('Users', [
      { name: 'John Doe', email: 'john@example.com', password: hashedPassword, balance: 5000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jane Doe', email: 'jane@example.com', password: hashedPassword, balance: 10000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mike Tyson', email: 'mike@example.com', password: hashedPassword, balance: 2000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sarah Connor', email: 'sarah@example.com', password: hashedPassword, balance: 3000, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bruce Wayne', email: 'bruce@example.com', password: hashedPassword, balance: 15000, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
