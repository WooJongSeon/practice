const obj = {};

obj.prop = 'myProp';
obj[123] = 123; // 123은 문자열로 변환된다.
// obj.123 = 123;  // SyntaxError: Unexpected number
obj['prop' + 123] = false;

console.log(obj); // { '123': 123, prop: 'myProp', prop123: false }


