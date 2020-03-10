function solution(budgets, M) {
    // 일단 평균 부터 출발해서 증가시킨다.
    let answer;
    const sum = budgets.reduce((x, y) => {
        return x + y;
    })
    console.log(sum);
    // 1씩 증가시키면서 최대값인 485(M) 값에 근접한지 살핀다.
    // M과 같아지면 반복문을 빠져나온다.
    // 그때 예산 값을 리턴한다.  
    return answer;
}

console.log(
    solution([120, 110, 140, 150], 485)
)