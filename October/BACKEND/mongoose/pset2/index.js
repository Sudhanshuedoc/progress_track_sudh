const mongoose = require("mongoose");

const glassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const glassModel = mongoose.model("glass", glassSchema);
const main = async function () {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/adtiya"
    );
    let glass = new glassModel({
      name: "Chair",
      price: 200,
      quantity: 10,
    });
    await glass.save();
    connection.disconnect();
  } catch (e) {
    console.log(e);
  }
};

main();
