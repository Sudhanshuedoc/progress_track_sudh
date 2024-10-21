const fs = require("fs");
console.log("one");
fs.writeFile("./sudhanshu.txt", "Sudhanshuranjan", (err) => {
  if (err) {
    console.log("failed to write file");
    return;
  }
  console.log("file written successfully");
});
console.log("two");
