import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($activities: [ID]!) {
    addOrder(activities: $activities) {
      purchaseDate
      activities {
        _id
        name
        activityDate
        price
        quantity
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_ACTIVITY = gql`
  mutation saveActivity(
    $_id: String!
    $name: String!
    $activityDate: String!
    $price: Number
  ) {
    saveActivity(
      _id: $_id
      name: $name
      activityDate: $activityDate
      price: $price
    ) {
      _id
      name
      activityDate
      price
    }
  }
`;
