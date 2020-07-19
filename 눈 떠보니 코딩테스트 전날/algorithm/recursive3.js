// 2진법 변환하기
let result = '';
let x = 11;
while (true) {
  if (x % 2 == 0) {
    result = '0' + result;
  } else {
    result = '1' + result;
  }
  x = Math.floor(x / 2);
  if (x == 1 || x == 0) {
    result = String(x) + result
    break;
  }
}
console.log(result.split('').reverse().join(''));

function 이진법(숫자) {
  if (숫자 == 1 || 숫자 == 0) { // 숫자가 1또는 0인경우에는 자신을 리턴한다.
    return String(숫자)
  }
  return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2) // 2보다 큰 경우에는 재귀 호출한다.
}
console.log(이진법(6))
// 원리
// 1 = 1
// 2 = 이진법(Math.floor(2/2)) + String(2%2)
// 2 = 이진법(1) + 0 => 10





