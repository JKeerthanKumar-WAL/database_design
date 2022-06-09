"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Optional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Optional.belongsTo(models.Delivery, {
        foreignKey: "delivery_id",
        onDelete: "CASCADE",
      });
    }
  }
  Optional.init(
    {
      type: DataTypes.ENUM("Return", "Exchange"),
      status: DataTypes.STRING,
      reason: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Optional",
    }
  );
  return Optional;
};
