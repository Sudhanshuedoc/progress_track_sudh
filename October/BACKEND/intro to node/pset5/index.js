const fs = require("fs");
const data = "Sudhanshu is a good boy and he keep on losing every game";
fs.writeFileSync("./sudh.txt", data, "utf-8");
console.log("file written successfully");
console.log("file");
