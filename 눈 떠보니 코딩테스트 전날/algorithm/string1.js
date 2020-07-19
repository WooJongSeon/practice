// 문자열 뒤집기
let x = 'asdf';
const arr = [];
const result = x.split('')
  .map((v) => {
    arr.push(v);
  }).map((v) => {
    return arr.pop();
  })
console.log(result.join(''));
// for (let index = 0; index < x.length; index++) {
//   arr.push(x[index]);
// }
// console.log(arr.pop())

