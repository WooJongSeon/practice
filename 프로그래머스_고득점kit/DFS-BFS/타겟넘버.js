function solution(numbers, target) {
  var answer = 0;
  function recur(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    recur(idx + 1, sum + numbers[idx]);
    recur(idx + 1, sum - numbers[idx]);
  }

  recur(0, 0);

  return answer;
}
// 트리 구조를 활용해서 푼다.
// 배열을 앞에서부터 하나씩 더했을 경우, 뺀 경우로 나눠서 트리를 뻗는다.
// 뻗는 과정에서 target과 같은 숫자가 나온다면 카운트를 올린다
