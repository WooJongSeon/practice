(async function name(params) {
  const promiseArr = [];
  for (let index = 0; index < 5; index++) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        console.log(index)
      }, 1000);
    })
    promiseArr.push(promise);
  }
  try {
    Promise.all(promiseArr);
  } catch (error) {
    console.log(`error ${error}`);
  }
})();
