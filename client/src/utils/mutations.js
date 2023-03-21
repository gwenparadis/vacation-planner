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
  mutation saveActivity($_id: ID!) {
    saveActivity(_id: $_id) {
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
