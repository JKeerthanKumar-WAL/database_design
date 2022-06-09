"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MerchantCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MerchantCategory.hasMany(models.Merchant, {
        foreignKey: "merchant_id",
        as: "Merchant",
      });
      MerchantCategory.hasMany(models.Category, {
        foreignKey: "category_id",
        as: "Category",
      });
    }
  }
  MerchantCategory.init(
    {
      merchant_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MerchantCategory",
    }
  );
  return MerchantCategory;
};
