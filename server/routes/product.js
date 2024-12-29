const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAdmin } = require('../middlewares/authMiddleware');

router.get('/', getAllProducts);
router.post('/', isAdmin, addProduct); // Only accessible by admin users
router.put('/:id', isAdmin, updateProduct);
router.delete('/:id', isAdmin, deleteProduct);

module.exports = router;
