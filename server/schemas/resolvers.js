const { User } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth");
const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("");
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    //todo ? sometimes throws errors
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    saveBook: async (_, { _id, bookDetails }) => {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: _id },
        { $addToSet: { savedBooks: bookDetails } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },

    //TODO MAKE WORK WITH FRONTEND
    removeBook: async (_, { bookId }, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
};
module.exports = resolvers;
