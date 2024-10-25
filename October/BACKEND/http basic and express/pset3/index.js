const express = require("express");
const fs = require("fs");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("This is homepage");
});
server.get("/contact", (req, res) => {
  res.send("This is Contact page");
});
server.post("/addData", (req, res) => {
  console.log(req.body);
  let data = JSON.stringify(req.body);
  fs.appendFileSync("./sudh.txt", `${data}\n`, "utf-8");
  res.status(201).send("Data added successfully");
});

server.listen(8080, () => {
  console.log("Server is started successfully");
});
