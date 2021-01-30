const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String
  },
  phone: {
    type: String
  },
  username: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: Date
});

const User = model('user', userSchema);

module.exports = User;
