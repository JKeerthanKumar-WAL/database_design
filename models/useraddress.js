"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAddress.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      UserAddress.hasOne(models.Order, {
        foreignKey: "address_id",
        as: "Order",
      });
    }
  }
  UserAddress.init(
    {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      pincode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserAddress",
    }
  );
  return UserAddress;
};
