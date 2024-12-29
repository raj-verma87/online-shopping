/**
 * Global error handler middleware.
 */
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
  
    // Check if it's a validation error (like Joi validation errors)
    if (err.isJoi) {
      return res.status(400).json({ message: err.details[0].message });
    }
  
    // If it's any other error, send a generic message
    res.status(500).json({ message: 'Something went wrong' });
  };
  