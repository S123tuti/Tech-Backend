const Task = require('../models/Task');
const user = require('../models/UserModel');


// Create a task
const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const userId = req.newUser._id;

    const newTask = new Task({ title, description, status, UserId: userId });
    await newTask.save();

    res.status(201).json({ newTask, message: 'Task created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Task creation failed' });
  }
};


const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({ UserId: req.newUser._id });

    res.status(200).json({ tasks, count: tasks.length, message: 'Tasks fetched successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const getById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ task, message: 'Task fetched successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, status, dueDate } = req.body;
    
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    task.title = title;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;

    await task.save();

    res.status(200).json({ task, message: 'Task updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.remove();

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};




module.exports = { createTask, getTask, getById, updateTask, deleteTask };
