// async await 안쓰고 수많은 요청 보내기
const test = () => {
  const arr = [];
  for (let index = 0; index < 100000; index++) {
    const data = new Promise(async (resolve, reject) => {
      resolve('data');
    });
    arr.push(data);
  }
  for (let index = 0; index < arr.length; index++) {
    arr[index].then((value) => { // 동작 안함
      console.log(value);
    })
  }
}
test();

const testFix = () => {
  const arr = [];
  for (let index = 0; index < 100000; index++) {
    const data = new Promise(async (resolve, reject) => {
      resolve('hello');
    });
    arr.push(data);
  }
  for (let index = 0; index < arr.length; index++) {
    fixCall(arr[index]);
  }
}
const fixCall = (resolve) => {
  resolve.then((value) => {
    console.log(value);
  })
}


testFix();
