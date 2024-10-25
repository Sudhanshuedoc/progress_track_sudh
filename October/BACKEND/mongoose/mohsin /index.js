const express = require("express");
const mongoose = require("mongoose");
const PORT = 8080;
const server = express();
let userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  userName: String,
});
let userModel = mongoose.model("user", userSchema);

server.listen(PORT, async () => {
  let connection = await mongoose.connect("mongodb://localhost:27017/mohsin");
  let users = userModel.insertMany([
    { name: "Sudhanshu", age: 24, userName: "Sudhanshuedoc" },
    { name: "Aditya", age: 23, userName: "Choli" },
  ]);
  //   await users.save();
  console.log("Server started successfully");
});
