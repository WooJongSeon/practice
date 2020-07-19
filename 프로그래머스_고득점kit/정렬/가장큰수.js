function solution(numbers) {
  const arr = numbers.map((n) => n + '') // 문자열로 바꾸기
    .sort((a, b) => (b + a) - (a + b)) // 조합한 숫자들을 내림차순으로 정렬
  // a 가 뒤에있는 숫자, b가 앞에 있는 숫자
  return arr[0] === '0' ? '0' : arr.join(''); // 배열의 모든 요소가 0인경우 처리
}
// 배열에서 만들어 낼 수 있는 가장 큰 수
// [6,10,2] => 6210
const result = solution([9, 90, 534, 52, 910]);

console.log(result);
