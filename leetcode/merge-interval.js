Object.defineProperty(Array.prototype, 'flat', {
  value: function (depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
    }, []);
  }
});
/**
 * @returns {number[][]}
 * @param {number[][]} intervals 
 */
function merge(intervals) {
  let left = intervals.slice(0, intervals.length / 2);
  const right = intervals.slice(intervals.length / 2, intervals.length);
  if (left[0][left.length - 1] > left[left.length - 1][0]) {
    left[0].pop()
    left[left.length - 1].shift();
    left = left.flat();
    console.log(left);
  }
  return [[]];
};

/**
 * @returns {nuber[][]}
 * @param {number[][]} arr 
 */
function splitArr(arr) {
  if (arr[0].length === 2) {
    return arr;
  } else {

  }
  // console.log(arr)
}
const result = merge([[1, 3], [2, 6], [8, 10], [15, 18]])
console.log(result);
// Output: [[1, 6], [8, 10], [15, 18]]