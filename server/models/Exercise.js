// Importing the mongoose library
const mongoose = require('mongoose');

// Extracting the Schema class from mongoose
const { Schema } = mongoose;

// Creating a new exercise schema
const exerciseSchema = new Schema({
  // Field for email
  email: {
    type: String, // Field type is String
    required: true, // Field is required
    trim: true // Removes leading/trailing whitespace from input
  },
  // Field for duration
  duration: {
    type: Number, // Field type is Number
    required: true // Field is required
  },
  // Field for repetition
  repetition: {
    type: Number, // Field type is Number
    default: 1 // Field has a default value of 1
  },
  // Field for category
  category: {
    type: String, // Field type is String
    required: true, // Field is required

    enum: ['arms: decription', 'chest: ', 'back: ', 'legs: '] // Field value must be one of the specified options
  }
});

// Creating a model based on the exercise schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Exporting the Exercise model
module.exports = Exercise;
