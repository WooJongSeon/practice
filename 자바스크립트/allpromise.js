const promiseAll = async () => {
  const promiseArr = [];

  for (const i of [1, 2, 3, 4, 5]) {
    const resolves = new Promise(async (resolve, reject) => {
      resolve(`promise all ${i}`);
    })
    promiseArr.push(resolves);
  }
  const result = await Promise.all(promiseArr);
  return result;
}

const forAwait = async () => {
  const result = [];
  for await (const value of [1, 2, 3, 4, 5]) {
    const resolve = await Promise.resolve(`for await ${value}`);
    result.push(resolve);
  }
  return result;
}

promiseAll().then((value) => {
  console.log(value);
})

forAwait().then((value) => {
  console.log(value);
})
