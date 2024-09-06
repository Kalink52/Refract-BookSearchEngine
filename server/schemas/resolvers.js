const { User } = require("../models");

const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    me: async (_, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {
    // TODO saveBook, removeBook
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
  },
};
module.exports = resolvers;
