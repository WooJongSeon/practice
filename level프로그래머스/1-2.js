function solution(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  var answer = sum / arr.length;
  return answer;
}
