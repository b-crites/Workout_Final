// Importing the gql function from the 'apollo-server-express' package
const { gql } = require('apollo-server-express');

// Defining the GraphQL schema using the gql template literal
const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Exercise{
    _id: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Exercise {
    _id: ID
    name: String
    description: String
    duration: Int
    repetition: Int
    category: Category
    ## image: String
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

// Exporting the typeDefs variable, which contains the GraphQL schema
module.exports = typeDefs;
