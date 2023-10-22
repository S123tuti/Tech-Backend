const jwt = require('jsonwebtoken');
const user = ('../models/UserModel');

const auth = async(req, res, next) => {
try{
const token = req.header('authorisation').replace('Bearer ', '');
const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
const newUser = await newUser.findOne({
_id: decoded._id,
})
if(!newUser){
    res.status(401).send('Unable to login Invalid credientals')
}
req.newUser = user;
req.token = token; 
next();
}
catch(err){
res.status(500).send('error')
}
}

module.exports = auth;