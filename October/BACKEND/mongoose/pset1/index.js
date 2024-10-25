const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
  name: String,
  age: Number,
  userName: String,
});
const testModel = mongoose.model("user", testSchema);
async function main() {
  const conn = await mongoose.connect("mongodb://localhost:27017/test");
  // let test = new testModel({
  //   name: "Sudhanshu",
  //   age: 24,
  //   userName: "Sudhanshuedoc",
  // });
  // await test.save();
  console.log("Connected");
  const blog = await testModel.updateOne({ name: "Ranjan" });
  console.log(blog);

  conn.disconnect();
}
main();
