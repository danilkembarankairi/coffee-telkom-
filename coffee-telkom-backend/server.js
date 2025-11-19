require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
require('./config/db');

// Setup Passport
require('./config/passport-google');
require('./config/passport-apple');
app.use(passport.initialize());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/menu', require('./routes/menus'));
app.use('/api/checkout', require('./routes/checkout'));
app.use('/api/midtrans', require('./routes/midtrans-notification'));

// Test route
app.get('/', (req, res) => {
  res.send('Coffee Telkom Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));