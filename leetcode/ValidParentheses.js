/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const splitStr = s.split('');
  if (splitStr[0] === ')' || splitStr[0] === '}' || splitStr[0] === ']') {
    return false;
  }
  const stack = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === '(') stack.push(')');
    else if (splitStr[i] === '{') stack.push('}');
    else if (splitStr[i] === '[') stack.push(']');
    else if (stack.pop() !== splitStr[i]) return false;
  }

  return stack.length === 0; // 모두 검사했는데 정상인 경우
};
console.log(isValid("(])")) // false
console.log(isValid("]")) // false
console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
