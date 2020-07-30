// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
  const valueArr = line.split(' ').map((v) => +v);
  const avg = valueArr.reduce((acc, cur) => acc + cur) / valueArr.length;
  if (avg.toFixed(2) >= 90) {
    console.log(`${avg.toFixed(2)} A`);
  }
  if (avg.toFixed(2) >= 80
    && avg.toFixed(2) < 90) {
    console.log(`${avg.toFixed(2)} B`);
  }
  if (avg.toFixed(2) >= 70
    && avg.toFixed(2) < 80) {
    console.log(`${avg.toFixed(2)} C`);
  }
  if (avg.toFixed(2) < 70
    && avg.toFixed(2) >= 60) {
    console.log(`${avg.toFixed(2)} D`);
  }
  if (avg.toFixed(2) < 60) {
    console.log(`${avg.toFixed(2)} F`);
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
