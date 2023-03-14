const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
  }
  type getAllActivities {
    _id: ID
    firstName: String
    lastName: String
    
  }
  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllActivities: String
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveActivity(newActivites: input): User
    removeActivity(name: ID!): User
  }
`;

module.exports = typeDefs;
