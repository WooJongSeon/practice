const { promisify } = require('util');

const hello = async (param, callback) => {
  let data;
  console.log(JSON.stringify(callback));
  setTimeout(() => { // 바로 처리되지 않는 작업 1
    data = 'this is data';
    const err = null;
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  }, 1000);
}


// hello('param', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// })


const promiseHello = () => {
  console.log(JSON.stringify(hello));
  const promised = promisify(hello.bind(hello))('param');

  console.log(JSON.stringify(hello));
  return promised;
}
// 이제 hello 함수를 bind 를 써서 promise로 바꿔보자

(async () => {
  const result = await promiseHello();
  console.log(result);
})();
