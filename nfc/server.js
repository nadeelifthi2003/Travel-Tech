// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/UserRoutes');
const JobRoutes = require('./routes/JobRoutes');
const OrganizationRoutes = require("./routes/OrganizationRoutes")

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Middleware(express assceesing json data)
app.use(express.json());

// Routes
app.use("/api/User",UserRoutes);
app.use('/api/Jobs', JobRoutes);
app.use('/api/Organization',OrganizationRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(port, () => {
    console.log(`Connected to DB & listning on port: ${port}`);
  });
})
.catch((error) => {
  console.log(error);
})
