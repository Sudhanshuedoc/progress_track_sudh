const userModel = require("../models/user.model");
const express = require("express");
const userRoute = express.Router();

userRoute.post("/user-create", async (req, res) => {
  const { name, age, gender } = req.body;
  try {
    const usercreate = new userModel({
      name,
      age,
      gender,
    });
    await usercreate.save();
    res.send(usercreate);
  } catch (err) {
    res.json({ message: err.message });
  }
});

userRoute.get("/user", async (req, res) => {
  try {
    const user = await userModel.find();
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

userRoute.patch("/user-update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
userRoute.delete("/user-delete/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete({ _id: id });
    res.status(203).json({ user });
  } catch (err) {
    res.send({ message: err.message });
  }
});
module.exports = userRoute;
