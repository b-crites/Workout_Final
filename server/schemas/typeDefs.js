const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Exercise {
    _id: ID
    name: String
    description: String
    # image: String
    duration: Int
    repetition: Float
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    exercises: [Exercise]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    exercises(category: ID, name: String): [Exercise]
    exercise(_id: ID!): Exercise
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateExercise(_id: ID!, quantity: Int!): Exercise
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
