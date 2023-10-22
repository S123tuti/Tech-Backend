const user = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration
const registerUser = async (req, res) => {
  try {
    const {username, email, password} = req.body
    const newUser = new user({username, email, password});
   await newUser.save();
   res.status(201).send({newUser, message: 'user created successfully'})
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
  
};

// User login
const loginUser = async (req, res) => {
  try {

    const {email, password} = req.body;
    const newUser = await user.findOne({email})
  
    if(!newUser){
      res.status(400).json({error:'User not found in database'})
    }
   const isMatch = await bcrypt.compare(password, newUser.password);
   if(!isMatch){
    res.status(400).json({error:'Invalid Password'})
  }
 const token = jwt.sign({
  _id: newUser._id.toString()
 }, process.env.JWT_SECRET_KEY);
 res.status(200).send({newUser, token, message: "User loggedin successfully"})

  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = { registerUser, loginUser };
