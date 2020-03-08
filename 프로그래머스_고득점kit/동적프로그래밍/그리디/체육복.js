// n 은 학생의 수
// lost는 잃어버린 학생 배열
// reserve는 여분을 가지고 있는 학생 배열
// return 수업을 들을 수 있는 학생 수
function solution(n, lost, reserve) {
    var answer = 0;
    const arr = [];
    for (let i = 0; i < n + 2; i++) {
        arr.push(1);
    }

    lost.forEach((element) => {
        arr[element] -= 1;
    });

    reserve.forEach((element) => {
        arr[element] += 1;
    });

    for (let i = 1; i < n + 1; i++) {
        if (arr[i - 1] === 0 && arr[i] === 2) { // 앞 사람에게 빌려주는 경우
            arr[i - 1] += 1;
            arr[i] -= 1;
        }
        else if (arr[i] === 2 && arr[i + 1] === 0) { // 뒷 사람에게 빌려주는 경우
            arr[i] -= 1;
            arr[i + 1] += 1;
        }
    }

    console.log(arr);
    console.log(arr.length - 2)

    arr.shift();
    arr.pop();
    answer = arr.filter((v) => {
        return v !== 0;
    }).length;
    return answer;
}
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
// 1,1,1,1,1,1,1 배열에서 잃어버린 칸은 모두 -1을 한다
// 여분이 있는 칸은 모두 +1 한다
// 그리고 칸을 돌면서 n-1 이 0이고 n이 2이면 빌려준다.
