const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = 8080;
server.use(express.json());

const superheroSchema = new mongoose.Schema({
  name: String,
  power: String,
  comic: String,
});
const superheroModel = mongoose.model("hero", superheroSchema);

server.get("/", (req, res) => {
  res.send("data fetched successfully");
});
server.post("/create-hero", async (req, res) => {
  const { name, power, comic } = req.body;
  try {
    let heroes = new superheroModel({
      name,
      power,
      comic,
    });
    await heroes.save();
    res.status(201).send("Profle created Successfully");
  } catch (err) {
    res.send({ err });
  }
});
server.get("/heroes", async (req, res) => {
  try {
    const heroes = await superheroModel.find();
    res.json(heroes);
  } catch (err) {
    res.send({ err });
  }
});

server.patch("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  const updated = await superheroModel.findByIdAndUpdate({ _id: id }, req.body);
  res.status(202).json({ updated });
});

server.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await superheroModel.findByIdAndDelete({ _id: id });
  res.send(deleted);
});

server.listen(port, async () => {
  const connection = await mongoose.connect(
    "mongodb://localhost:27017/Superhero"
  );

  console.log("Server started Successfully");
});
