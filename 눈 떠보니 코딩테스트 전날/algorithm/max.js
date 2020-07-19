let a = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(Math.max(10, 20));
console.log(Math.max.apply(null, a)); // 배열의 최대값 구하기
console.log(a.sort((a, b) => b - a)); // 내림차순 정렬
