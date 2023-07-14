const { AuthenticationError } = require('apollo-server-express');
const { User, Exercise, Category } = require('../models');
const { signToken } = require('../utils/auth');

// Define the resolvers object
const resolvers = {
  Query: {
    // Resolver for the "categories" query
    categories: async () => {
      // Retrieve all categories from the Category model
      return await Category.find();
    },
    // Resolver for the "exercises" query
    exercises: async (parent, { category, name }) => {
      const params = {};

      // Add the category filter to the query parameters if provided
      if (category) {
        params.category = category;
      }

      // Add the name filter to the query parameters if provided
      if (name) {
        params.name = {
          $regex: name
        };
      }

      // Find exercises based on the query parameters and populate the "category" field
      return await Exercise.find(params).populate('category');
    },
    // Resolver for the "exercise" query
    exercise: async (parent, { _id }) => {
      // Find a single exercise by its ID and populate the "category" field
      return await Exercise.findById(_id).populate('category');
    },
    // Resolver for the "user" query
    user: async (parent, args, context) => {
      if (context.user) {
        // If the user is authenticated, find the user by their ID and populate the "exercises" field,
        // including the "category" field for each exercise
        const user = await User.findById(context.user._id).populate({
          path: 'exercises',
          populate: 'category'
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    // Resolver for the "addUser" mutation
    addUser: async (parent, args) => {
      // Create a new user with the provided arguments
      const user = await User.create(args);

      // Generate a token for the newly created user
      const token = signToken(user);

      // Return the token and the user object
      return { token, user };
    },
    // Resolver for the "updateUser" mutation
    updateUser: async (parent, args, context) => {
      if (context.user) {
        // If the user is authenticated, update the user with the provided arguments
        // and return the updated user object
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // Resolver for the "updateExercise" mutation
    updateExercise: async (parent, { _id, duration }) => {
      const decrement = Math.abs(duration) * -1;

      // Update the duration of an exercise by decrementing it and return the updated exercise object
      return await Exercise.findByIdAndUpdate(_id, { $inc: { duration: decrement } }, { new: true });
    },
    // Resolver for the "login" mutation
    login: async (parent, { email, password }) => {
      // Find a user by their email
      const user = await User.findOne({ email });

      if (!user) {
        // If no user is found, throw an error indicating incorrect credentials
        throw new AuthenticationError('Incorrect credentials');
      }

      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        // If the password is incorrect, throw an error indicating incorrect credentials
        throw new AuthenticationError('Incorrect credentials');
      }

      // Generate a token for the authenticated user
      const token = signToken(user);

      // Return the token and the user object
      return { token, user };
    }
  }
};

// Export the resolvers object
module.exports = resolvers;
