const express = require("express");
const connection = require("./config/db");
// const userModel = require("./model/user.model");
const userRoute = require("./routes/user.route");

const server = express();
server.use(express.json());
server.use("/Route", userRoute);

server.get("/", (req, res) => {
  res.send("Data from /endpoint");
});

server.listen(8080, async () => {
  await connection;

  console.log("Server started Successfully");
});
