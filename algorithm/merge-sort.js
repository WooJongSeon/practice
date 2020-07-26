/**
 * 나눈 배열 합치면서 정렬하기
 * @param {Array} left
 * @param {Array} right
 */
const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) { // 양쪽 다 원소가 있는 경우
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // // 이제 한쪽의 원소가 없는 경우
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  console.log(`result ${result}`);
  return result;
}
/**
 * 재귀적으로 배열 나누기
 * @param {Array} arr
 */
const mergeSort = (arr) => {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }
  const pivot = arr.length / 2;
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([8, 7, 6, 5, 4, 3, 2, 1]);

// console.log(result);
// console.log(result);
