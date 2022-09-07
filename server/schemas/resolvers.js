const { AuthenticationError } = require('apollo-server-express');
const { Todo, User } = require('../models');
const { signToken } = require('../utils/auth');





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
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user)
      return { token, user };
    },
    login: async (parent, {username, password}) => {
      const user = await User.findOne({username})
      if (!user){
        throw new AuthenticationError('No user found with that username')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw){
        throw new AuthenticationError("Incorrect credentials")
      }
      const token = signToken(user)
      return {token, user}
    },
    addTodo: async (parent, { todoText }, context) => {
      if (context.user) {
        const todo = await Todo.create({ todoText })
      

      await User.findOneAndUpdate(
        {_id: context.user._id},
        { $addToSet: { todos: todo._id }}
      )

      return todo
      }
      throw new AuthenticationError('You need to be logged in')
    },
    removeTodo: async (parent, { todoId }, context) => {
      if (context.user) {
        const todo = await Todo.findOneAndDelete({
          _id: todoId
        })
      

      await User.findOneAndUpdate(
        {_id: context.user._id},
        { $pull: { todos: todo._id}}
      )

      return todo
      }
      throw new AuthenticationError('You need to be logged in')
    }
  },
};

module.exports = resolvers;
