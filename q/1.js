// 최소 값 찾고 최대에서 매도 하는 문제
const solution = (N, priceString) => {
  const priceArr = priceString.split(' ').map((v) => +v);

  const sortedPrice = JSON.parse(JSON.stringify(priceArr));
  sortedPrice.sort((a, b) => a - b);

  const arr = [];
  for (let i = 0; i < priceArr.length; i++) {
    for (let j = i; j < priceArr.length; j++) {
      arr.push(priceArr[i] - priceArr[j]);
    }
  }
  return - arr.sort((a, b) => a - b)[0]
}

console.log(
  solution(10, '3 5 9 2 1 5 3 8 7 5')
) // 7
console.log(
  solution(10, '10 9 6 7 2 2 4 3 5 1')
) // 3
console.log(
  solution(5, '100 100 100 100 1')
) // 0


