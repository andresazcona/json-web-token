const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();

// Ruta para el endpoint de login
router.post('/login', login);

module.exports = router;
