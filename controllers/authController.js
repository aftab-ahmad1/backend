require("dotenv").config();
const responseHandler = require("../responseHandler");
const { compare } = require("bcrypt js");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    try {
      const { password, username } = req.body;
      const isExist = await getUser({ username, userID: false });
      if (isExist.error || !isExist.data) {
        return responseHandler(res, {
          error: isExist.error || "User not found",
        });
      }
      const isValid = await compare(password, isExist.data.dataValues.password);
      if (!isValid) {
        return responseHandler(res, { error: "Invalid credentials" });
      }
      delete isExist.data.dataValues.password;
      const token = await sign(isExist.data.dataValues, process.env.SECRET, {
        expiresIn: 30000,
      });
      res.cookie("auth", token, { maxAge: 30000, httpOnly: true });

      return responseHandler(res, { data: token });
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};
