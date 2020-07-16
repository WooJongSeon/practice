
(async function name() {
  const promiseArr = [];
  for (let index = 0; index < 5; index++) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(index);
      }, index * 1000);
    });
    promiseArr.push(promise);
  }
  Promise.all(promiseArr); // await 를 안써도 안쪽 함수는 동작함
})();
