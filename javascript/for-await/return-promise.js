(async function name(params) {
  const promiseArr = [];
  for (let index = 0; index < 5; index++) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res({ value: index });
      }, index * 1000);
    })
    promiseArr.push(promise);
  }
  const res = await Promise.all(promiseArr); // await 를 하면 전체 시간을 기다리고 리턴 값이 한번에 나온다
  console.log(res);
})();
