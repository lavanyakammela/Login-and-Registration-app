const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    plainPassword: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // adds createdAt and updatedAt
  }
);

// Use 'User' as model name (collection will be 'users' in MongoDB)
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;