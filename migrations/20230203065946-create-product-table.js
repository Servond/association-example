'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      stock: {
        type: Sequelize.INTEGER,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  }
};
