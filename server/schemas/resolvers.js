const { User } = require("../models");

const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
    //TODO
    users: async () => {
      return User.find({})
},
  Mutation: {
//TODO
    createUser: async (_, { username, email, password }) => {
      const user = await User.create(body);
  
      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });
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
  }
}
module.exports = resolvers
