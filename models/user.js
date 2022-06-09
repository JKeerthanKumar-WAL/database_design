"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserCard, {
        foreignKey: "user_id",
        as: "UserCard",
      });
      User.hasMany(models.UserAddress, {
        foreignKey: "user_id",
        as: "UserAddress",
      });
      User.hasOne(models.UserCart, {
        foreignKey: "user_id",
        as: "UserCart",
      });
      User.hasOne(models.Order, {
        foreignKey: "user_id",
        as: "Order",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
