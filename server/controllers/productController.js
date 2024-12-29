const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Product updated' });
};

exports.deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Product deleted' });
};
