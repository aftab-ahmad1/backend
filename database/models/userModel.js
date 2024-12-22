const { models } = require("../index");

module.exports = {
  createUser: async (body) => {
    try {
      const data = await models.user.create({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error };
    }
  },
};
