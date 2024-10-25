const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    let data = fs.readFileSync("./sudh.txt", "utf-8");
    res.end(data);
  } else if (req.url === "/contact") {
    res.end("<h1>Hello world<h1/>");
  } else {
    res.end("INVALID ");
  }
});
server.listen(9090, () => {
  console.log("Server started successfully");
});
