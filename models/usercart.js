"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCart.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      UserCart.hasMany(models.CartItem, {
        foreignKey: "cart_id",
        as: "CartItem",
      });
    }
  }
  UserCart.init(
    {
      totalPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserCart",
    }
  );
  return UserCart;
};
