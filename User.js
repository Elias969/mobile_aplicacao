// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  email: { type: String },
  created_at: { type: Date, default: Date.now },
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password_hash);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password_hash')) return next();
  this.password_hash = await bcrypt.hash(this.password_hash, 10);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
