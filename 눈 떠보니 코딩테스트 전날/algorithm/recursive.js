// 재귀 함수
let sum = 0;
for (let index = 0; index < 101; index++) { // O(N)
  sum += index;
}
console.log(sum);

const n = 100;
console.log(n * (n + 1) / 2) // O(1)
