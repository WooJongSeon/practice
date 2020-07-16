(async function name() {
  const promiseArr = [];
  for (let index = 0; index < 5; index++) {
    const promise = new Promise((res, rej) => {
      if (index === 3) {
        setTimeout(() => {
          rej({ error: index });
        }, index * 1000);
      }
      setTimeout(() => {
        res({ value: index });
      }, index * 1000); // 이렇게 하면 1초에 한개씩 나옴
    });
    promiseArr.push(promise);
  }
  try {
    for await (const item of promiseArr) {
      console.log(item);
    }
  } catch (error) {
    console.log(error);
  }
})();
