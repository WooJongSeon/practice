/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const splitStr = s.split('');
  if (splitStr[0] === ')' || splitStr[0] === '}' || splitStr[0] === ']') {
    return false;
  }
  const stack = [];
  // const rightBrace = [];
  // const leftBrace = [];
  splitStr.forEach((v, i) => {
    if (v === '(') { stack.push(v); }
    if (v === '{') { stack.push(v); }
    if (v === '[') { stack.push(v); }
  })
  splitStr.forEach((v, i) => {
    if (v === ')' && stack[stack.length - 1] === '(') { stack.pop() }
    if (v === '}' && stack[stack.length - 1] === '{') { stack.pop() }
    if (v === ']' && stack[stack.length - 1] === '[') { stack.pop() }
  })


  console.log(stack);
  // splitStr.forEach((v) => {
  //   if (v === ')') rightBrace.push(v);
  //   if (v === '}') rightBrace.push(v);
  //   if (v === ']') rightBrace.push(v);
  // })
  // let count = 0;
  // console.log(rightBrace);
  // console.log(leftBrace);
  // while (rightBrace.length) { // } ) ]
  //   const data = rightBrace.shift();
  //   console.log(data);
  //   if (data === '}' && leftBrace[count] !== '{') {
  //     return false;
  //   }
  //   if (data === ']' && leftBrace[count] !== '[') {
  //     return false;
  //   }
  //   if (data === ')' && leftBrace[count] !== '(') {
  //     return false;
  //   }
  //   count++;
  // }
  return stack.length === 0 ? true : false; // 모두 검사했는데 정상인 경우
};
// console.log(isValid("(])"))
// console.log(isValid("]")) // false
// console.log(isValid("()")) // true
// console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
// console.log(isValid("{[]}")) // true - 이거만 안 맞음
// if (value === '(') { // 다음 괄호가 ( 가 나와야 됨
//   // 안 나오면 모두 false 리턴
//   const nextValue = stack.pop(); // 한번 더 팝
//   if (nextValue !== ')') return false;
// }
// if (value === '{') { // 다음 괄호가 { 가 나와야 됨
//   const nextValue = stack.pop(); // 한번 더 팝
//   if (nextValue !== '}') return false;
//   // 안 나오면 모두 false 리턴
// }
// if (value === '[') { // 다음 괄호가 [ 가 나와야 됨
//   const nextValue = stack.pop(); // 한번 더 팝
//   if (nextValue !== ']') return false;
//   // 안 나오면 모두 false 리턴
// }
