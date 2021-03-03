const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
