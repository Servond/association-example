'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: "ipad",
        stock: 2,
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
      {
        name: "macbook",
        stock: 2,
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
      {
        name: "iphone",
        stock: 2,
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {})
  }
};
