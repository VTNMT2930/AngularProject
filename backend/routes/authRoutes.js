const express = require('express');
const router = express.Router();
const { register, login, createOrder } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/create-order', createOrder);

module.exports = router;