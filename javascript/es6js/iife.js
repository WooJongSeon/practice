let number = { // number가 object가 아니고 number = 2인 경우에는 delete하지 않고 코드가 동작한다.
  num: 1,
};
const result = (function name() {
  delete number[num]; // 이렇게 지우면 정상적으로 지워진다.
  // number.num인 경우에는 코드가 동작한다.
  number[num] = 2;
  return number[num];
})()

console.log(result);
