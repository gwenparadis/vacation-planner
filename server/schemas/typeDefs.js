const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    savedActivities: [Activity]
  }

  type Activity {
    _id: ID
    name: String
    description: String
    activityDate: String
    price: Int
    quantity: Int
  }

  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    savedActivities: [Activity]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getActivities: [Activity]
    getProfile: Profile
    getUsers: [User]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    saveActivity(activity: String!): User
    removeActivity(id: ID!): User
  }
`;

module.exports = typeDefs;
