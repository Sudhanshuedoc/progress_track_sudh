const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, require: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", userSchema);
async function main() {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/users"
    );
    const users = new userModel({
      name: "Manish",
      age: 22,
      userName: "Manishedoc",
      email: "manish2dbit@gmailcom",
      password: "123",
      isAdmin: true,
    });
    await users.save();
    connection.disconnect();
  } catch (err) {
    console.log(err);
  }
}
main();

// pset3 is basically same as pset2 that i was just practising
