import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!){
        user(username: $username){
            _id
            username
            password
            todos {
                _id
                todoText
                todoAuthor
                createdAt
            }
        }
    }
`

export const QUERY_TODOS = gql`
    query getTodos {
        todos {
            _id
            todoText
            todoAuthor
            createdAt
        }
    }
`
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      todos {
        _id
        todoText
        todoAuthor
        createdAt
      }
    }
  }
`;
