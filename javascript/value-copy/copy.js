function foo(x) {
  x = [4, 5, 6]
  console.log(x); // 4,5,6 이 출력된다.
}
const a = [1, 2, 3, 4]
foo(a);

console.log(a); // 하지만 출력하면 여전히 1,2,3,4이다.

