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
    todoAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    todos(username: String): [Todo]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTodo(todoText: String!, todoAuthor: String!): Todo
    removeTodo(todoId: ID!): Todo
  }
`;

module.exports = typeDefs;
