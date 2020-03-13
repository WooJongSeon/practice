function solution(participant, completion) {
    // completion 배열에서 하나씩 participant 에 있는지 확인한다.
    // 찾아보다가 없는 녀석이 나오면 걔가 완주 못한애
    var answer = '';
    participant.map((p) => {
        const loc = completion.includes(p);
        if (!loc) {
            answer = p;
        }
    })
    return answer;
}

const ans = solution(["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"])
console.log(ans);
