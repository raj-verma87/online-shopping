const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const { sequelize } = require("./models");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parse JSON body

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Serve other routes (Example)
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

sequelize.authenticate().then(() => console.log("Database connected"));

// sequelize.sync({ force: true }) // Drops existing tables and recreates them
//   .then(() => {
//     console.log('All models were synchronized successfully.');
//   })
//   .catch((err) => console.error('Sync failed:', err));

// Error handling middleware (should be the last middleware)

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
