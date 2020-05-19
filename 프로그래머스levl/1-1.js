function solution(arr1, arr2) {
  let sum1 = [];
  let sum2 = [];
  for (let index = 0; index < arr1[0].length; index++) {
    sum1.push(arr1[0][index] + arr2[0][index]);
  }
  for (let index = 0; index < arr2[1].length; index++) {
    sum2.push(arr2[1][index] + arr1[1][index]);
  }

  var answer = [];
  answer.push(sum1);
  answer.push(sum2);
  return answer;
}
const re = solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]);
console.log(re);
