function solution(N) {
    var answer = 0;

    let i = 1;
    let value1 = 0;
    let value2 = 1;
    let result = [];
    while (i < N) {
        let newValue = value1 + value2;
        result.push(newValue);
        value1 = value2;
        value2 = newValue;
        i++
    }

    answer = ((result[result.length - 1] + (result[result.length - 2])) * 2) + (result[result.length - 1] * 2)

    return answer;
}
// 마지막 항목과 그 직전 항목이 항상 한 변의 길이를 말한다.
// 마지막 항목은 가로 길이를 의미한다.
//     그렇다면((n + (n - 1)) * 2) + (n * 2)
//         (N 만큼의 피보나치 수열 구하기 를 작성하면 된다.)

// console.log(1 + 1 + 2 + 3);

console.log(solution(5));
// 1,2,3,5,8,13,21,34
// 1, 1, 2, 3, 5, 8
// 4 - 16
// 5 - 26
// 6 - 42