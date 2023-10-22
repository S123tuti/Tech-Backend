const express = require('express');
const { registerUser, loginUser } = require('../controllers/UserControllers');
const router = express.Router();


// ====================================== User ==========================================================

router.post('/register', registerUser );
router.get('/login', loginUser)

module.exports = router