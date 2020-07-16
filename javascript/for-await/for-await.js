(async function name() {
  const promiseArr = [];
  for (let index = 0; index < 5; index++) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res({ value: index });
      }, index * 1000);
    })
    promiseArr.push(promise);
  }
  for await (const promise of promiseArr) {
    console.log(promise); // resolve 했던 값들이 나온다.
  }
  // for await 는 await <Promise>를 여러번 할 수 있게 해준다고 생각하면 된다.
  // Promise 들의 배열을 하나씩 await 하고 싶을때 사용 할 수 있다.
})();
