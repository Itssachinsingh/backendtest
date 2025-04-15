const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config(); 
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/Post")

const PORT = process.env.PORT || 5000;

//middledwear
app.use(express.json());

// The MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
  
  // Home route
  app.get('/', (req, res) => {
    res.send('Welcome to the Blog API');
  });
  
// Other Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);






















  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });