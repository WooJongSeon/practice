function solution(budgets, M) {
    budgets.sort((a, b) => {
        return a > b ? 1 : -1;
    });

    // const left = budgets[0];
    // const right = budgets[budgets.length - 1];
    // var mid = (left + right) / 2;
    // let sum = budgets.reduce((x, y) => x + y);

    // if (sum <= M) return budgets[budgets.length - 1];

    // 가장 큰 예산요청을 최대값으로 설정
    var max = budgets[budgets.length - 1];
    // 전체 예산을 예산요청의 개수로 나누어 최저값을 설정
    var min = M / budgets.length;
    var mid = 0;
    var compareMid = 0;

    while (true) {
        mid = max + min / 2;
        sum = 0;

        for (const budget of budgets) {
            sum += (budget > mid) ? mid : budget;
        }

        // 더 이상 상한값의 변화가 없다면 종료
        if (mid == compareMid) {
            answer = mid;
            break;
        }

        if (sum > M) {
            max = mid;
        } else {
            min = mid;
        }
        compareMid = mid;
    }
    return answer;
}

console.log(
    solution([120, 110, 140, 150], 485)
)