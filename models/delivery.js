"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Delivery.hasOne(models.OrderItem, {
        foreignKey: "orderItem_id",
        as: "OrderItem",
      });
      Delivery.hasOne(models.Optional, {
        foreignKey: "delivery_id",
        as: "Optional",
      });
    }
  }
  Delivery.init(
    {
      delivery_date: DataTypes.DATE,
      status: DataTypes.ENUM("Delivered", "Out_for_delivery", "Not_delivered"),
      shipping_location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Delivery",
    }
  );
  return Delivery;
};
