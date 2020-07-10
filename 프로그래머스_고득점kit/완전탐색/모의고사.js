
// 문제 링크: https://programmers.co.kr/le풀arn/courses/30/lessons/42840
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
//      1,2,3,4,5 반복
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
//      2,1,2,3,2,4,2,5 반복
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
//      3,3,1,1,2,2,4,4,5,5, 반복
function solution(answers) {
  let number1 = [1, 2, 3, 4, 5];
  let number2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let number3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length / 5; i++) {
    number1.push(...[1, 2, 3, 4, 5]);
    number2.push(...[2, 1, 2, 3, 2, 4, 2, 5]);
    number3.push(...[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
  }
  let count = [0, 0, 0];
  answers.forEach((value, index) => {
    if (value === number1[index]) {
      count[0] += 1;
    }
    if (value === number2[index]) {
      count[1] += 1;
    }
    if (value === number3[index]) {
      count[2] += 1;
    }
  });
  //최대값
  var max = count.reduce(function (previous, current) {
    return previous > current ? previous : current;
  });
  let answer = count.map((value, index) => { if (value === max) { return index + 1 } })
    .filter((value) => { return value !== undefined });
  return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
solution([1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2]);
