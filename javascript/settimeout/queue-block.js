setTimeout(() => {
  console.log('time out');
}, 1000);
let sum = 0;
for (let index = 0; index < 5432154321; index++) {
  sum += index;
}
// set time out 이 1초이다.
// 하지만 call stack 에 for 문이 크다.
// call stack 의 for 문이 처리 될때까지 태스크 큐에서 대기한다.
// 그래서 1초 넘게 걸린다.
