const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
},
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
},
  password: {
    type: String,
    required: true,
    trim: true,
  },
  
}, {timestamps: true});

userSchema.pre('save', async function(next){
  const user = this;
  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
})

const user = mongoose.model('User', userSchema);

module.exports = user;
