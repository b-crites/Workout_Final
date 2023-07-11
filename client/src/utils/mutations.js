import { gql } from '@apollo/client';

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

export const ADD_EXERCISE = gql`
  mutation addExercise(
    $name: String!
    $description: String!
    $category: String!
    $duration: Int!
    $weight: Int
    $reps: Int
    $sets: Int
  ) {
    addExercise(
      name: $name
      description: $description
      category: $category
      duration: $duration
      weight: $weight
      reps: $reps
      sets: $sets
    ) {
      _id
      name
      description
      category {
        _id
        name
      }
      duration
      weight
      reps
      sets
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

