import { gql } from "@apollo/client";

export const QUERY_EXERCISES = gql`
  query getExercise($exerciseId: ID!) {
    exercise(exerciseId: $exerciseId) {
      _id
      name
      description
      category {
        _id
        name
      }
      duration
      reps
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_ALL_EXERCISES = gql`
  query getAllExercises {
    exercises {
      _id
      name
      description
      category {
        _id
        name
      }
      duratio
      reps
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      exercises {
        _id
        name
        description
        category {
          _id
          name
        }
        duration
        reps
      }
    }
  }
`;

export const QUERY_SIGNOUT = gql`
  query signout {
    signout {
      message
    }
  }
`;


