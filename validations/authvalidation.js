const joi = require("joi");
const responseHandler = require("../responseHandler");

const loginValidator = joi.object({
  username: joi.string().min(6).max(34).required,
  password: joi.string().min(3).max(34).required,
});

const Login = async (req, res, next) => {
  try {
    await loginValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

module.exports = { Login };
