// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (input) {
  const inputArr = input.split('/');
  const data = JSON.parse(inputArr[0]).filter((i) => i.is_active); // is_active값 반환
  const target_value = inputArr[1]; // 1번 인덱스 값 지정

  // target이 되는 첫번째 child를 찾는다. 없다면 INACTIVE를 반환한다.
  const first_child = data.find((item) => item.value === target_value);
  if (!first_child) {
    console.log('INACTIVE')
    return;
  };

  const result = [first_child.value];
  let flag = true;
  let child = first_child; // 초기값
  // 부모를 더이상 찾지 못할 때까지 반복을 돌며 부모의 value를 찾는다.
  while (flag) {
    const parent = data.find((i) => i.pk === child.parent);
    if (child.parent && !parent) {
      console.log('INACTIVE');
      return;
    };
    if (!parent || result.length === 3) {
      flag = false;
      break;
    }
    result.unshift(parent.value);
    child = parent;
  }
  console.log(result.join('>'))
  rl.close();
}).on("close", function () {
  process.exit();
});
