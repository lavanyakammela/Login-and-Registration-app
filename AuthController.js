const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/Users');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: 'User already exists, You Can Login',
        success: false
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      plainPassword: password // ⚠ Consider removing this in production
    });

    await newUser.save();

    return res.status(201).json({
      message: 'Signup successful',
      success: true
    });

  } catch (err) {
    console.error('Signup Error:', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      success: false
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errorMsg = 'Auth Failed: Email or password is incorrect!';

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: errorMsg, success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: errorMsg, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // ✅ Only one response is sent
    return res.status(200).json({
      message: 'Login successful!',
      success: true,
      jwtToken,
      email: user.email,
      name: user.name
    });

  } catch (err) {
    console.error('Login Error:', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      success: false
    });
  }
};

module.exports = {
  signup,
  login
};