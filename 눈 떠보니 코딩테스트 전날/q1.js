let data = [
  '   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   ',
]

for (let s of data) {
  // console.log(s.replace(/ /g, '')); // 공백 제거
  s = s.replace(/ /g, '');
  // console.log('------------------------------------------');
  // console.log(s.replace(/\+/g, '1')) // + 문자열을 1로 바꾼다.
  s = s.replace(/\+/g, '1')

  // console.log('------------------------------------------');
  // console.log(s.replace(/-/g, '0')) // - 문자열을 0으로 바꾼다

  s = s.replace(/-/g, '0');

  console.log(s); // 1001010 같은 문자열 출력
  parseInt(s, 2) // 74 69 74 85 숫자 출력
  console.log(String.fromCharCode(parseInt(s, 2))) // J , E , J , U 출력
  // String.fromCharCode(숫자) => 아스키 코드표에서 숫자에 해당하는 문자열을 가져온다.

}
