// 문제의 규칙
// h index의 최대값은 citations 배열의 크기를 넘을 수 없다

function solution(citations) {
  citations = citations.sort((a, b) => b - a); // 정렬한다.
  if (citations[0] === 0) {
    return 0;
  }
  if (citations[citations.length - 1] >= citations.length) {
    return citations.length;
  }
  for (let index = 0; index < citations.length; index++) {
    if (index >= citations[index]) {
      return index;
    }
  }
}
// case 1 일반적인 경우
// 6 5 3 1 0
// 0 1 2 3 4

// case 2 모두 같은 숫자의 경우
// 5 5 5 5 5
// 0 1 2 3 4 5?
//

//case 3 0인 경우
// 0 return 0
// 0

console.log(solution([3, 0, 6, 1, 5]))
console.log(solution([5, 5, 5, 5, 5]))
console.log(solution([2, 2, 2, 2, 2]))
// 0,0,0,0 => 0
// 9,9,9,9 => 9 = 안됨,  4이상 4편 => 4가 답

// 3 0 6 1 5
// 0이상이 0개 이상이고 나머지가 0개 이하인가 ? 아님
// 1이상이 1개 이상이고 나머지가 1개 이하인가 ? 아님
// 2이상이 2개 아니다
// 3이상이 3개인가 맞다 done
// n이상이 n개인가? done


// const getFileExtensionWithDot = (fileName: string) => {
//   // asdf.stp인 경우 .stp를 반환하고, 확장자가 없는 경우 ''를 반환한다.
//   const dotIndex = fileName.lastIndexOf('.');
//   return dotIndex === -1 ? '' : fileName.substring(dotIndex, fileName.length);
// };
