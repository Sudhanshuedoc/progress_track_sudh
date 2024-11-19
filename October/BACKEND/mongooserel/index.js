const express = require("express");
const connection = require("./config/db");
const { default: mongoose } = require("mongoose");
const server = express();
server.use(express.json());
const port = 8080;

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});
const userModel = mongoose.model("user", userSchema);

const passportSchema = mongoose.Schema({
    name:String,
    user:{
        type:mongoose.Schema.type.ObjectId,
        ref:"userModel"
    }
})
const passportModel = mongoose.model("passport" , passportSchema)
server.post("/create-user", async (req, res) => {
  const { name, age } = req.body;
  try {
    let user = new userModel({
      name,
      age,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.send(err.message);
  }
});
server.post("/create-passport" , async(req , res) => {
    const 
})
server.listen(port, async () => {
  await connection;
  console.log("Server Started Successfully");
});
