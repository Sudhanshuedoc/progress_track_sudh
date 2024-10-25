const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is homepage");
  } else if (req.url === "/contact") {
    res.end("This is contact page bro");
  }
});
server.listen(9090, () => {
  console.log("Servr started successfully");
});
//creating a server and endpoint with http module that is an internal module in node js
