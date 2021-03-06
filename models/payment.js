"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.hasOne(models.Order, {
        foreignKey: "payment_id",
        as: "Order",
      });
    }
  }
  Payment.init(
    {
      status: DataTypes.ENUM("Success", "Processing", "Failed"),
      type: DataTypes.ENUM("Card", "UPI", "COD"),
      transaction_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
