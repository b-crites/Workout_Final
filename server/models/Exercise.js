const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: Number,
    required: true,
  },
  repetition: {
    type: Number,
    default: 1
  },
  category: {
    type: String,
    required: true,

    enum: ['arms: decription', 'chest: ', 'back: ', 'legs: ']

    
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
