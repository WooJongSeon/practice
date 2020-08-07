/**
 * @param {Array} progresses
 * @param {Array} speeds
 */
function solution(progresses, speeds) {
  const answer = [];
  const arr = progresses.map((p, i) => {
    return Math.ceil((100 - p) / speeds[i])
  });

  let count = 1;
  let temp = arr[0]; // 첫번째 숫자
  for (let i = 1; i < arr.length; i++) {
    if (temp > arr[i]) { // 2번째 부터 arr값보다 첫번째 숫자가 작은 경우
      count++;
    } else { // 첫번째 숫자가 더 작은 경우
      answer.push(count);
      temp = arr[i]//다음 temp 값을 넣는다.
      count = 1;
      if (i === arr.length - 1) {
        answer.push(count);
      }
    }
  }
  return answer;
}

console.log(
  solution([93, 30, 55], [1, 30, 5])
)

console.log(
  solution([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])
)

console.log(
  solution([30, 30, 30], [30, 30, 30])
)
// 7 3 9 이 경우 3이 더 작다. 앞의 기능보다 먼저 나갈 수 없으므로 2개 출시, 1개 출시
// 1 2 3 4 5
// 7, 3, 9
// 0번째 기준 값을 가지고
// 더 큰게 있는지 찾는다.
// 큰게 나오면 그 전까지 증가한 숫자를 배열에 넣는다.
// 그리고 다음 인덱스부터 다시 카운트를 증가시킨다.



