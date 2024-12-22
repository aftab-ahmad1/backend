const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");
const { user } = require("./user");

class session extends Model {}

session.init(
  {
    sessionID: {
      type: DataTypes.STRING(80),
      primaryKey: true,
      //autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    userID: {
      type: DataTypes.STRING(80),
      unique: true,
      allowNull: false,
      references: {
        model: user,
        key: "userID",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
session.beforeCreate(async (session) => {
  session.sessionID = uuid();
});

module.exports = { session };
