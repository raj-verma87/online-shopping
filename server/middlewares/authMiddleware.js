const jwt = require('jsonwebtoken');
const { User } = require('../models');

/**
 * Middleware to check if the user is authenticated.
 */
exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the `Authorization` header

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user details to `req`
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

/**
 * Middleware to check if the user has admin privileges.
 */
exports.isAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check user role
    const user = await User.findByPk(decoded.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only' });
    }

    req.user = decoded; // Attach user details to `req`
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
