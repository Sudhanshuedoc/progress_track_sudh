const express = require("express");
const userModel = require("../model/user.model");
const userRoute = express.Router();

userRoute.post("/create_user", async (req, res) => {
  const { name, age, username } = req.body;
  try {
    const user = new userModel({
      name,
      age,
      username,
    });
    await user.save();
    res.status(201).send("user Created successfully");
  } catch (err) {
    res.send(err);
  }
});
//create user
userRoute.get("/user", async (req, res) => {
  try {
    const user = await userModel.find();
    res.json(user);
  } catch (err) {}
});
//read user

userRoute.patch("/update_user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await userModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ updated });
  } catch (err) {
    res.send(err);
  }
});
userRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await userModel.findByIdAndDelete({ _id: id });
    res.json({ deleted });
  } catch (err) {
    res.send(err);
  }
});

module.exports = userRoute;
