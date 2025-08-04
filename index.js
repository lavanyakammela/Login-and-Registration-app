const express = require('express');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
require('dotenv').config();
require('./Models/db'); // MongoDB connection

const app = express();
const PORT = process.env.PORT || 5000;

// === Middleware ===
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// === Health Check ===
app.get('/ding', (req, res) => {
  res.send('Dong');
});

// === API Routes ===
app.use('/api', AuthRouter); // Mount routes like /api/signup, /api/login

// === Start Server ===
app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);

});