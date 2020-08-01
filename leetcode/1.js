const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const objToOrder = {
    8: 0,
    5: 1,
    2: 2,
    4: 3,
    3: 4,
    7: 5,
    6: 6,
    1: 7,
    0: 8,
    9: 9,
  };
  const reverseObj = Object.assign({}, Object.keys(objToOrder).map((v) => +v));
  // Object.keys(objToOrder);
  // const reverseObj = {
  //   0: 8,
  //   1: 5,
  //   2: 2,
  //   3: 4,
  //   4: 3,
  //   5: 7,
  //   6: 6,
  //   7: 1,
  //   8: 0,
  //   9: 9,
  // };
  const tempArr = line.split(" ");
  const temp = tempArr.map((t) => {
    return objToOrder[t];
  }).sort((a, b) => a - b);

  const result = temp.map((t) => reverseObj[t]);
  console.log(result.join(' '));

  rl.close();
}).on("close", function () {
  process.exit();
});
