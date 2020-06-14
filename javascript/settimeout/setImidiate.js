console.log('before immediate');

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate');
console.log('after immediate'); // 여기까지 모두 실행 후에 setImmediate가 동작한다.
