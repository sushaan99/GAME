const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isActive: { type: Boolean, default: true },
  created_at: { type: String, default: Date.now() },
  updated_at: { type: String, default: Date.now() },
});

module.exports = model("User", userSchema)