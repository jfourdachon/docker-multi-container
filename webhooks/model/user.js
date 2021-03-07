const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  hygieOffer: {
      type: String
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
