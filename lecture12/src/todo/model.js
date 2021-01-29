const mongoose = require('mongoose');

// Create a mongoose schema, make title and createdAt be the properties and make them required
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
