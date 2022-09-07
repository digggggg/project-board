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
  }

  type Query {
    
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
