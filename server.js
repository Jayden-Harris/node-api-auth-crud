// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requestLogger = require('./middleware/requestLogger');

// App setup
const app = express();
const PORT = process.env.PORT || 8000;

// Logging middlware 
app.use(requestLogger);

// Route imports
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/items');

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON bodies

// Routes
app.use('/api/auth', authRoutes);  // /register, /login
app.use('/api/items', itemRoutes); // CRUD routes for items

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
