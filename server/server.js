const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

const app = express();

// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

// Middlewares
app.use(cors());
app.use(express.json()); // Parse JSON body

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error handling middleware (should be the last middleware)
const { errorHandler } = require('./middlewares/errorMiddleware');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
