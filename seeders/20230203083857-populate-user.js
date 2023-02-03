'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: "john1@gmail.com",
        firstName: "john",
        lastName: "bravo",
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
      {
        email: "dicky@gmail.com",
        firstName: "dicky",
        lastName: "bravo",
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
      {
        email: "smith@gmail.com",
        firstName: "smith",
        lastName: "john",
        createdAt: "2023-01-27 07:52:27",
        updatedAt: "2023-01-27 07:52:27"
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {})
  }
};
