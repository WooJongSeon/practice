const { promisify } = require('util');

const makePromisify = (callback) => {
  return callback(null, 'data');
}

// makePromisify((err, data) => {
//   console.log(data);
// })

const func = promisify(makePromisify)

async function asyncFunc() {
  const data = await func();
  console.log(data);
}

asyncFunc();
