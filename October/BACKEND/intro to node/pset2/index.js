const fs = require("fs");
console.log("one");
fs.readFile("./sudhanshu.txt", "utf-8", (err, data) => {
  console.log(data);
});
// readfile is asyn way run this code to get ouptut
console.log("two");
// example of readfile
