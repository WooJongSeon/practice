// n 은 학생의 수
// lost는 잃어버린 학생 배열
// reserve는 여분을 가지고 있는 학생 배열
// return 수업을 들을 수 있는 학생 수
function solution(n, lost, reserve) {
    var answer = 0;
    const arr = [1] * 10
    console.log(arr);
    const count = lost.length;
    for (let i = 0; i < count; i++) {
        const exist = reserve.indexOf(lost[i]);
        if (exist > -1) {
            reserve.splice(exist, 1);
            lost.splice(reserve.indexOf(lost[i]), 1);
        }
    }

    console.log(lost);
    console.log(reserve);
    // 수업을 들을 수 있는 학생의 숫자 = n - lost.length + reverse.length;
    answer = n - lost.length + reserve.length;
    if (answer >= n) {
        return n;
    }
    return answer;
}
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
//2,3,4
//1,2,3,6
// 같으면 remove 해서 없앤다. -> 빌려줄 수는 없고 일단 체육복을 갖고는 있는 학생
// 그리고 잃어버린 학생 숫자 -> lost.length
// 빌려줄 수 있는 학생 숫자 -> reserve.length
