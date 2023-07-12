const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  // image: {
  //   type: String
  // },
  // discuss with team to see if images is desired
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
    enum: ['arms: ', 'chest: ', 'back: ', 'legs: ']
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
