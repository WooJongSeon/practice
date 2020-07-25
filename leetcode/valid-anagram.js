/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  let result = true;
  if (sArr.length !== tArr.length) return false;
  sArr.map((v, index) => {
    if (tArr[index] !== v) {
      result = false;
    }
  })
  return result;
};
console.log(isAnagram("rat", "car"))
