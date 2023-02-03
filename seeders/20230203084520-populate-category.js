'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: "Tablet",
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
      {
        name: "Laptop",
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
      {
        name: "HP",
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {})
  }
};
