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
  }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
