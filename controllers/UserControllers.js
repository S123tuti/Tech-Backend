const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration
const registerUser = async (req, res) => {
  try {
    const {userName, email, password} = req.body
  
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// User login
const loginUser = async (req, res) => {
  try {

    const {email, password} = req.body;
   
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = { registerUser, loginUser };
