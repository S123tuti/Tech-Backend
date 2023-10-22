const express = require('express');
const { registerUser, loginUser } = require('../controllers/UserControllers');
const { createTask, getTask, getById, updateTask, deleteTask } = require('../controllers/TaskControllers');
const router = express.Router();
const auth = require('../middlewares/authMiddleware')

// ====================================== User ==========================================================

router.post('/register', registerUser );
router.get('/login',auth, loginUser)

// =================================== Task ================================================================

router.post('/creatTask', auth, createTask );
router.get('/getTask', auth, getTask );
router.get('/get/:id', auth, getById );
router.put('/update', auth, updateTask );
router.delete('/remove', auth, deleteTask );
module.exports = router