const { Todo, User } = require('../models');
// const { signToken } = require('../utils/auth');





const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId})
    },
    todos: async(parent, { username }) => {
      const params = username ? { username }: {}
      return Todo.find(params).sort({createdAt: -1})
    }
  },

  Mutation: {
    
  },
};

module.exports = resolvers;
