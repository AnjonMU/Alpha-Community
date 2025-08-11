// authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, userController } = require('../controllers/authController');
const authUser = require('../middleware/authUser');

router.post('/register', register);
router.post('/login', login);
router.get('/user', authUser, userController);

module.exports = router;