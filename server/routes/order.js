const express = require('express');
const router = express.Router();
const { createOrder, getOrder } = require('../controllers/orderController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.post('/', isAuthenticated, createOrder);
router.get('/:id', isAuthenticated, getOrder);

module.exports = router;
