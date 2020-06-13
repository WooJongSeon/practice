// 리액트 useEffect, useState 구현
const useEffect = (callback) => {
  callback();
}

const useState = (defaultValue) => {
  let value;
  value = defaultValue;
  const setValue = (param) => {
    value = param;
  }

  return [value, setValue]
}

const test = () => {
  const [value, setValue] = useState(10);
  console.log(`value ${value}`); // value = 10
  useEffect(() => {

  })
};
test();
