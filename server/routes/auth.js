const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { validate } = require('../middlewares/validationMiddleware');
const { registerSchema } = require('../schemas/userSchemas');

router.post('/register', validate(registerSchema), register); // Use Joi validation
router.post('/login', login);

module.exports = router;
