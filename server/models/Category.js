// Import the 'mongoose' library
const mongoose = require('mongoose');

// Destructure the 'Schema' object from mongoose
const { Schema } = mongoose;

// Create a new schema for the 'category' collection
const categorySchema = new Schema({
  // Define the 'name' field with the following properties:
  name: {
    type: String,     // The field should be of type String
    required: true,   // The field is required (cannot be empty)
    trim: true        // Any leading or trailing whitespace will be trimmed
  }
});

// Create a model named 'Category' using the 'categorySchema'
const Category = mongoose.model('Category', categorySchema);

// Export the 'Category' model so that it can be used in other files
module.exports = Category;
