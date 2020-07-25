/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => b - a); // 내림차
  nums2.sort((a, b) => b - a); // 내림차

  const result = [];

  if (nums1.length < nums2.length) {
    nums1.map((v) => {
      const num2 = nums2.indexOf(v); // 앞에서부터 찾는다.
      if (num2 !== -1) {
        nums2.splice(num2, 1);
        result.push(v);
      }
    })
  } else {
    nums2.map((v) => {
      const num2 = nums1.indexOf(v); // 앞에서부터 찾는다.
      if (num2 !== -1) {
        nums1.splice(num2, 1);
        result.push(v);
      }
    })
  }
  return result;
};


console.log(
  intersect([1, 2, 2, 1], [2, 2])
)
console.log(
  intersect([4, 9, 5], [9, 4, 9, 8, 4])
)

// 같으면 팝
// 작은 것 기준으로 원소를 하나씩 돌면서 같은게 나오면 없애서 result에 넣는다.
// 팝 한것을
