// Import dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import axios from 'axios';

// Configure environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(morgan("dev"));  // Log HTTP requests

// Routes
app.use("/api/v1/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the ecommerce app</h1>");
});

// Define PORT
const PORT = process.env.PORT || 8081;

// Start server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
