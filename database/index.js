const { ForeignKeyConstraintError } = require("sequelize");
const sequelize = require("./dbconnection");
const { session } = require("./tables/session");

const { user } = require("./tables/user");
const { orders } = require("./tables/orders");
const models = { user, session, orders }; // wrap up all the tables in one object

// const db = {};
//db relation
//user.hasOne(session, { foreignkey: "userID", as: "session" });
//session.belongsTo(user, { foreignKey: "userID", as: "user" });

//users.hasMany(orders, { foreignKey: "userID", as: "orders" });
//orders.belongsTo(user, { foreignKey: "userID", as: "user" });

// db.sequelize = sequelize;
sequelize.models = models;
module.exports = { sequelize, models };
