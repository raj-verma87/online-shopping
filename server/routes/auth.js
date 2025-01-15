const express = require('express');
const router = express.Router();
const { register, login, registerAdmin, deleteUser, getUserById, getAllUsers, updateUser } = require('../controllers/authController');
const { validate } = require('../middlewares/validationMiddleware');
const { registerSchema, registerAdminSchema } = require('../schemas/userSchemas');

router.post('/register', validate(registerSchema), register); // Use Joi validation
router.post('/registerAdmin', validate(registerAdminSchema),registerAdmin); // Use Joi validation
router.post('/login', login);
router.get('/getUser/:id', getUserById);
router.get('/getAllUser', getAllUsers);
router.post('/deleteUser/:id', validate(registerAdminSchema), deleteUser);
router.post('/updateUser/:id', validate(registerAdminSchema), updateUser);

module.exports = router;
