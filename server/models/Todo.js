const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const todoSchema = new Schema({
    todoText: {
      type: String,
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    }
  });

const Todo = model('Todo', todoSchema)

module.exports = Todo