const Task = require('../models/Task');

// Create a task
const createTask = async (req, res) => {
  try {


    
  } catch (error) {
    res.status(500).json({ error: 'Task creation failed' });
  }
};



module.exports = { createTask };
