const mongoose = require('mongoose');
require('dotenv').config();

const mongo_uri = process.env.MONGO_CON;

mongoose.connect(mongo_uri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });