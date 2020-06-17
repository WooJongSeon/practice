const axios = require('axios');
function* name(params) {
  yield
}


async function hello(params) {
  try {
    const result = await axios.get("https://api.spacexdata.com/v3/launches/latest").then((value) => {
      // console.log(value.data); // then을 쓰면 아래 부분이 동작
    })
    console.log(result.data); // then 부분이 주석일 경우 result에 값이 들어가지 않는다. // result가 undefined가 된다.

  } catch (error) {
    return Promise.reject(error);
  }
}

hello();
