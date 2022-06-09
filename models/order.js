"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.UserAddress, {
        foreignKey: "address_id",
        onDelete: "CASCADE",
      });
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      Order.belongsTo(models.Payment, {
        foreignKey: "payment_id",
        onDelete: "CASCADE",
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: "order_id",
        as: "OrderItem",
      });
    }
  }
  Order.init(
    {
      status: DataTypes.ENUM("Success", "Processing", "Failed"),
      totalAmount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
