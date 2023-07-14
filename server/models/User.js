// Importing the 'mongoose' library for MongoDB object modeling
const mongoose = require('mongoose');

// Destructuring the 'Schema' object from the mongoose library
const { Schema } = mongoose;

// Importing the 'bcrypt' library for password hashing
const bcrypt = require('bcrypt');

// Creating a new user schema using the mongoose Schema constructor
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
});

// Setting up pre-save middleware to hash the password before saving it to the database
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Adding a method to the user schema to compare passwords
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Creating a User model based on the user schema
const User = mongoose.model('User', userSchema);

// Exporting the User model for use in other files
module.exports = User;
