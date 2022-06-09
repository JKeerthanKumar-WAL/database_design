"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MerchantCategory", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      merchant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Merchant",
          key: "id",
          as: "merchant_id",
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Category",
          key: "id",
          as: "category_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Date.now(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Date.now(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MerchantCategory");
  },
};
