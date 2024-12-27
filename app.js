const express = require("express");
const mongoose = require("mongoose");

const attractionRoutes = require("./routes/attractionRoutes");
const visitorRoutes = require("./routes/visitorRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(express.json());

// Hardcoded environment variables
const PORT = 3000; // Replace with your desired port
const MONGO_URI = "mongodb://0.0.0.0:28017/finallab1"; // Replace with your MongoDB URI

// Routes
app.use("/attractions", attractionRoutes);
app.use("/visitors", visitorRoutes);
app.use("/reviews", reviewRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection error:", err));
