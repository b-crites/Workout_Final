const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
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
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
