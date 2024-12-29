const Joi = require('joi');

/**
 * Middleware to validate the request body using Joi schemas.
 * @param {Joi.Schema} schema - Joi schema to validate input data.
 */
exports.validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};
