const User = require('../model/user');
const Contact = require('../model/user');

exports.createUserService = async (args) => {
  try {
    const newUser = await User.create(args);
  } catch (error) {
    throw new Error(`Error while creating Doc: ${error}`, 404);
  }
};
