"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.hasMany(models.Product, {
        foreignKey: "merchant_id",
        as: "Product",
      });
    }
  }
  Merchant.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Merchant",
    }
  );
  return Merchant;
};
