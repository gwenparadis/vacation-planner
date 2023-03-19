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
    image: String
    activityDate: String
    price: Int
    quantity: Int
    comments: Comment
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  # type Order {
  #   _id: ID
  #   purchaseDate: String
  #   activities: String
  # }

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
    getOrder: [Activity]
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
    removeActivity(name: ID!): User
    # addToOrder(activityId: ID!): User
  }
`;

module.exports = typeDefs;
