const { createUser } = require("../database/models/userModel");

const create = (req, res, next) => {
  return res.send({
    message: "ccccc",
    data: {},
  });
};
const getAll = (req, res, next) => {
  console.log("");
  return res.send({
    message: "ggggg",
    data: {},
  });
};
const update = (req, res, next) => {
  return res.send({
    message: "uuuuuu",
    data: "create path",
  });
};
const remove = (req, res, next) => {
  return res.send({
    message: "ddddd",
    data: "create path",
  });
};

module.exports = { create, getAll, update, remove };
