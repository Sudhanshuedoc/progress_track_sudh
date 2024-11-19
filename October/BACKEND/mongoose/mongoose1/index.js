const express = require("express");
const connection = require("./config/db");
const userRoute = require("./routes/user.route");
const port = 8082;
const app = express();
app.use("/api", userRoute);

app.listen(port, async () => {
  await connection;
  console.log("Server Started Successfully");
});
