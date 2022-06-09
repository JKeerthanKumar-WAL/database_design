"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CartItem", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "id",
          as: "product_id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cart_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "UserCart",
          key: "id",
          as: "cart_id",
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
    await queryInterface.dropTable("CartItem");
  },
};
