function fibo(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  return fibo(number - 1) + fibo(number - 2);
}
console.log(fibo(8));
// 1 1 2 3 5 8 13 21 ... 피보나치 수열
