const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const ObjectId = mongoose.Schema.Types.ObjectId

const taskSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
        required: true,
        enum: ["in-progress", "completed"]
  },
  dueDate: {
    type: Date,
  },
  UserId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  }
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
