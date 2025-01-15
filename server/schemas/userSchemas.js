const Joi = require('joi');

exports.registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

exports.registerAdminSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    adminToken: Joi.string().required(), // Include the adminToken field
  });
  