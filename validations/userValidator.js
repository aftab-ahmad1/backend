const joi = require("joi");
const responseHandler = require("../responseHandler");

const createValidator = joi.object({
  name: joi.string().min(3).max(34).required,
  username: joi.string().min(6).max(34).required,
  email: joi.string().min(3).max(34).required,
  password: joi.string().min(3).max(34).required,
});
const updateValidator = joi.object({
  name: joi.string().min(3).max(34).required,
  email: joi.string().min(3).max(34).required,
  password: joi.string().min(3).max(34).required,
});
const removeValidator = joi.object({
  username: joi.string().min(6).max(34).required,
});

const createUser = async (req, res, next) => {
  try {
    await createValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const updateUser = async (req, res, next) => {
  try {
    await createValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const removeUser = async (req, res, next) => {
  try {
    await createValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
module.exports = { createUser, updateUser, removeUser };
