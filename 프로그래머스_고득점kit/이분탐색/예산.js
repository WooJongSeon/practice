// 왜 이분탐색이냐면 최소 값 더한거랑 최대값 더한거랑 그 사이에서
// M 값을 이분 탐색으로 찾아서 빨리 찾아봐라 그 얘기
function solution(budgets, M) {
    // 최저값부터 출발해서 증가시킨다.
    let answer;
    budgets.sort((a, b) => { return a > b ? 1 : -1 });
    let min = 1;
    let max = budgets[budgets.length - 1];
    let mid = 0;
    // 초기 값을 최소 값으로 설정한다.
    while (min <= max) {
        let sum = 0;
        mid = ((max + min) / 2);
        for (let i = 0; i < budgets.length; i++) {
            if (mid < budgets[i]) {
                sum += mid;
            } else if (mid > budgets[i]) {
                sum += budgets[i];
            }
        }
        if (sum < M) {
            min = mid + 1;
            console.log(`mid ${sum}`);
        } else {
            max = mid - 1;
            console.log(`mid2 ${sum}`);
        }
    }
    return Math.floor(min - 1);
}
// 평균말고 최소값에서부터 올라가야 한다.
// 1씩 증가시키면서 최대값인 485(M) 값에 근접한지 살핀다.
// M과 같아지면 반복문을 빠져나온다.
// 그때 예산 값을 리턴한다.  

console.log(
    solution([120, 110, 140, 150], 485)
)
console.log(
    solution([120, 110, 140, 150], 500)
)
