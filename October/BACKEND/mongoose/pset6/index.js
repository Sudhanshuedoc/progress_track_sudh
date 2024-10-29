const express = require("express");
const { Schema, model, connect } = require("mongoose");
const app = express();
const PORT = 8080;
app.use(express.json());

const friendSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  profession: { type: String, required: true },
  happyStatus: { type: Boolean, required: true },
});

const friendModel = new model("friend", friendSchema);

app.get("/", (req, res) => {
  res.send("This is HOMEPAGE");
});
app.post("/create-friend", async (req, res) => {
  const { name, age, profession, happyStatus } = req.body;
  try {
    const friend = await new friendModel({
      name,
      age,
      profession,
      happyStatus,
    });
    await friend.save();
    res.send("Friend created Successfully");
  } catch (err) {
    res.send();
  }
});
app.get("/friends", async (req, res) => {
  try {
    const friends = await friendModel.find();
    res.status(200).send(friends);
  } catch (err) {
    res.send({ message: err });
  }
});
app.patch("/update_friend/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const friend = await friendModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({ friend });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await friendModel.findByIdAndDelete({ _id: id });
    res.status(203).json({ deleted });
  } catch (err) {
    res.send({ Message: err.message });
  }
});
app.listen(PORT, async () => {
  const connection = await connect("mongodb://localhost:27017/buddyDB");
  console.log("Server Started Successfully");
});
