// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
  const strArr = line.split(' ').map((v) => +v);
  strArr.sort((a, b) => a - b);
  console.log(strArr.join(' '));
  rl.close();
}).on("close", function () {
  process.exit();
});
