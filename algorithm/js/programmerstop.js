//https://programmers.co.kr/learn/courses/30/lessons/42588
function solution(heights) {
    var answer = [];
    const length = heights.length;
    for (let index = length; index > 0; index--) {
        const height = heights.pop();
        if (height < heights[heights.length - 1]) {
            answer.unshift(index - 1);
        } else if (height === heights[heights.length - 1]) {
            answer.unshift(0);
        } else if (height > heights[heights.length - 1]) {
            // pop 한 상태이므로 본인이 제일 큼
            const exist = heights.find((h) => {
                return h > height; // 현재 팝한 것보다 더 큰게 있다면?
            })
            if (exist) { // 있으면 있는것의 인덱스를 가져와야 함
                answer.unshift(heights.lastIndexOf(exist) + 1);
            } else { // 없다면
                answer.unshift(0);
            }

        }
    }
    console.log(answer);
    return answer;
}
// 4에 대해서 7 이 4보다 크다. 그래서 배열의 마지막 자리는 7의 위치(4)를 입력했다.
// 7에 대해서 5가 7보다 작다. 그래서 그 앞의 숫자인 9랑 비교한다.
// 7에 대해서 9가 7보다 크다. 그래서 그 다음 자리는 9의 위치(2)를 입력했다.
// 5에 대해서 9가 5보다 크다. 그래서 9의 자리(2)를 입력했다.
// 9에 대해서 6이 9보다 작다. 다음 숫자는 없다. 0을 입력했다.
// 6에 대해서 다음 숫자는 없다. 0을 입력했다.

solution([6, 9, 5, 7, 4]);
solution([3, 9, 9, 3, 5, 7, 2]);
solution([7, 6, 5, 4, 3, 2, 1]);
// 0 0 0 3 3 3 6
solution([1, 5, 3, 6, 7, 6, 5]);