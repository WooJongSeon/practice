(async function name(params) {
  const promiseArr = [];
  for (let index = 0; index < 5; index++) {
    if (index === 2) {
      const reject = Promise.reject({ error: 'error' });
      promiseArr.push(reject);
    }
    const promise = Promise.resolve({ value: index });
    promiseArr.push(promise)
  }
  try {
    for await (const iterator of promiseArr) {
      console.log(iterator);
    }
  } catch (error) {
    console.log(error); // 중간에 에러가 나거나 reject가 발생하면 여기서 처리한다.
  }
})();
