const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");

class user extends Model {}

user.init(
  {
    userID: {
      type: DataTypes.STRING(80),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);

module.exports = { user };
