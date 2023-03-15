const { gql } = require("apollo-server-express");
const Activity = require("./");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
  }

  type GetAllActivities {
    _id: ID
    name: String
    description: String
    image: String
    activityDate: String
    price: Int
    quantity: Int
  }

  # type GetProfile {
  #   _id: ID
  #     firstName: String
  #     lastName: String
  #     username: String
  #     activities: [savedActivities]
  # }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllActivities: [GetAllActivities]
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
    removeActivity(name: ID!): User
  }
`;

module.exports = typeDefs;
