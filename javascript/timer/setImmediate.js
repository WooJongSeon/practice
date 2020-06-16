Promise.resolve().then(() => {
  console.log('promise');
})
setTimeout(() => {
  console.log('set timeout')
}, 0);
const obj = setImmediate(() => { console.log('setImmediate') });
console.log(`obj ${JSON.stringify(obj)}`);
Promise.resolve().then(() => {
  console.log('promise');
})
process.nextTick(() =>{ console.log('process'); })

console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');

setInterval(() => {
  console.log('interval')
}, 1000);

console.log('after interval');
setImmediate(() => { console.log('after interval immediate') });
