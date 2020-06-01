const test = () => {
  // return Promise.resolve('hello');
  return Promise.reject('no');
}

const errFunc = (err) => {
  console.log(err);
}

const thenFunc = (data) => {
  console.log(data);
}

test().then(thenFunc, errFunc);
// 첫번째 파라미터 함수는 promise 가 값을 리턴했을 때
// 두번째 파라미터 함수는 promise 가 reject 되었을 때
