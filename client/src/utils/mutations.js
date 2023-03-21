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
    $price: Int!
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

export const REMOVE_ACTIVITY = gql`
  mutation removeActivity($id: ID!) {
    removeActivity(id: $id) {
      _id
      email
      firstName
      lastName
      savedActivities {
        _id
        activityDate
        name
        description
      }
    }
  }
`;
