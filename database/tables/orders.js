const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");
const { user } = require("./user");

class orders extends Model {}

orders.init(
  {
    orderID: {
      type: DataTypes.STRING(80),
      primaryKey: true,
      //autoIncrement: true,
    },
    orderNo: {
      type: DataTypes.STRING(34),
      allowNull: false,
      unique: true,
    },
    userID: {
      type: DataTypes.STRING(80),
      unique: true,
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
// session.beforeCreate(async (session) => {
//   session.sessionID = uuid();
// });

module.exports = { orders };
