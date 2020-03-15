function solution(participant, completion) {
    // completion 배열에서 하나씩 participant 에 있는지 확인한다.
    // 찾아보다가 없는 녀석이 나오면 걔가 완주 못한애
    participant.sort((a, b) => a > b ? 1 : -1);
    completion.sort((a, b) => a > b ? 1 : -1);

    // for of 는 값
    // for in 은 인덱스
    for (let i in participant) {
        console.log(`i ${i}`);
        console.log(`participant[i] ${participant[i]} completion[i] ${completion[i]}`);
        if (participant[i] !== completion[i]) return participant[i];
    }
}

// let ans = solution(["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"])
// console.log(ans);

let ans = solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
// console.log(ans);
