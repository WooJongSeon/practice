const axios = require('axios').default;

const testFunc = async () => { // controller
  try {
    const data = await testFunc1();
    console.log(data);
  } catch (error) {
    console.log('error');
  }
}

const testFunc1 = async () => { // service
  const { data } = await testFunc2(); // try catch 를 안써도 된다.
  await testFunc3();
  return data;
}

const testFunc2 = async () => { // dal
  return await axios.get(`http://localhost:3000/api-docs`)
}

const testFunc3 = async () => {
  return await axios.get(`http://localhost:3000/`)
}

const testFunc4 = () => {

}



testFunc().finally(() => {
  console.log('done');
})
