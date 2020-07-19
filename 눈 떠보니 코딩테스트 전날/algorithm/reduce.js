let a = [1, 2, 54, 32, 23, 465, 23, 3, 5, 6]

const reduce1 = (acc, cur) => acc + cur;
const reduce2 = (acc, cur) => acc - cur;
const reduce3 = (acc, cur) => acc > cur ? acc : cur; // 가장 큰 수 찾기
const reduce4 = (acc, cur) => acc < cur ? acc : cur; // 가장 작은 수 찾기

console.log(a.reduce(reduce1));
console.log(a.reduce(reduce2));
console.log(a.reduce(reduce3));
console.log(a.reduce(reduce4));
