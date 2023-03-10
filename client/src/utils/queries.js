import { gql } from "@apollo/client";

export const QUERY_ACTIVITY = gql`
  query getActivity($name: ID) {
    activity(name: $name) {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($activities: [ID]!) {
    checkout(activities: $activities) {
      session
    }
  }
`;

export const QUERY_ALL_ACTIVITIES = gql`
  query getAllActivities {
    getAllActivities {
      _id
      name
      description
      price
      quantity
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        activities {
          _id
          name
          activityDate
          price
          quantity
          image
        }
      }
    }
  }
`;
