function solution(numbers) {
    var answer = '';

    for (const number of numbers) {
        const arr = `${number}`.split("");
        console.log(arr);
    }
    return answer;
}
// 배열에서 만들어 낼 수 있는 가장 큰 수
// [6,10,2] => 6210
const result = solution([6, 10, 2]);
console.log(result);