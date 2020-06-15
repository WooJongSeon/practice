const obj = {}
const symbolProperty = Symbol('key');
obj[symbolProperty] = 'value';

console.log(obj); // { [Symbol(key)]: 'value' }

const symbolKey = Symbol.for('name');
obj[symbolKey] = 'dasf';
console.log(obj);
console.log(JSON.stringify(obj)); // {} 빈 객체 나옴
