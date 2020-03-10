function solution(array, commands) {

    const answer = [];
    for (const arr of commands) {
        const slice = array.slice(arr[0] - 1, arr[1]);
        slice.sort((a, b) => { return a > b ? 1 : -1 });
        answer.push(slice[arr[2] - 1]);
    }
    return answer;
}
const result = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);
console.log(result);