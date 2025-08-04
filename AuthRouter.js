const router = require('express').Router();


const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../middlewares/authValidation');

// Optional: simple test route to verify backend API is running
/*  */
// Signup route
router.post('/signup', signupValidation, signup);

// Login route
router.post('/login', loginValidation, login);

module.exports = router;