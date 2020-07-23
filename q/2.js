function solution(countString) {
  const countArr = countString.split(' ').map((v) => +v);
  // return countArr.reduce((acc, cur) => acc + cur);
  let score = 0;
  let frameIndex = 0;
  for (let i = 0; i < 30; i++) {
    if (i < countArr.length - 2) {
      if (countArr[i] === 10) {
        frameIndex += 2;
        score += countArr[i] + countArr[i + 1] + countArr[i + 2];
      }
      else {
        frameIndex++;
        score += countArr[i];
        if (!countArr[i]) {
          break;
        }
        // if (countArr[i] + countArr[i + 1] === 10) {
        //   frameIndex++;
        // }
      }
      // console.log(`frame index ${frameIndex}`);
    }
  }
  return frameIndex;
  // for (const count in countArr) {
  //   if (count === 10) {
  //     score += count;
  //   }
  // }

}

// 볼링 점수 계산기 문제
// 10이 나오면 다음 2번 점수를 더한다.
// 10 , 0 ,5 => 10+5
// 10, 9 , 1 => 10 +10
// console.log(solution('7 3 8 1 3 7 0 9 5 3 7 3 9 1 3 5 6 4 9 1 7')); // 21
// console.log(solution('10 0 5 7 3 8 2 10 0 0 0 10 10 9 1 10 0 10')); // 18
console.log(solution('1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1')); // 20
// 입력
// 7 3 8 1 3 7 0 9 5 3 7 3 9 1 3 5 6 4 9 1 7
// 출력
// 130

// 입력
// 10 0 5 7 3 8 2 10 0 0 0 10 10 9 1 10 0 10
// 출력
// 148

// 입력
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
// 출력
// 20
