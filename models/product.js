"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Merchant, {
        foreignKey: "merchant_id",
        onDelete: "CASCADE",
      });
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
        onDelete: "CASCADE",
      });
      Product.hasMany(models.ProductImage, {
        foreignKey: "product_id",
        as: "ProductImage",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      productImage: DataTypes.INTEGER,
      merchant_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
