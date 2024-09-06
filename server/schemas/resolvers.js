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
    // TODO
    createUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    // updateUser: async (_, { _id, username, email, password }) => {
    //   const updatedUser = await User.findByIdAndUpdate(_id, { username, email, password }, { new: true });
    //   return updatedUser;
    // },
    // deleteUser: async (_, { _id }) => {
    //   const deletedUser = await User.findByIdAndDelete(_id);
    //   return deletedUser;
    // },
  },
};
module.exports = resolvers;
