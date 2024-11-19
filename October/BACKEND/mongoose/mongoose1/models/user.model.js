const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    age: Number,
    gender: String,
  },
  { timestamps: true }
);
const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;
