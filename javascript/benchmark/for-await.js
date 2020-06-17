const Benchmark = require('benchmark');
const axios = require('axios');

const forAwait = async () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  for await (const item of arr) {
    console.log('here');
    const result = await axios.default.get("https://api.spacexdata.com/v3/launches/latest")
    console.log(result.data);
  }
}
const promiseAll = async () => {

}

const benchForAwait = new Benchmark(
  'for await',
  forAwait,
)

const benchPromiseAll = new Benchmark(
  'promise all',
  promiseAll
)

console.log(benchForAwait.stats);
console.log(benchForAwait.aborted);
console.log(benchForAwait.count);
console.log(benchForAwait.cycles);
// forAwait().then((value) => value);
// axios.default.get("https://api.spacexdata.com/v3/launches/latest").then((value) => value)
