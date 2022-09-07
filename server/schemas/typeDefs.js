const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    todos: [Todo]
  }

  type Todo {
    _id: ID
    todoText: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    todos(username: String): [Todo]
  }

  type Mutation {
    addUser(username: String!, password: String!): User
    login(username: String!, passowrd: String!): User
    addTodo(todoText: String!): Todo
    removeTodo(todoId: ID!): Todo
  }
`;

module.exports = typeDefs;
