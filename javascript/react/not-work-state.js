const React  =  {
  // 리액트 useEffect, useState 구현
  useEffect: (callback, arr) => {
    callback();
  },
  useState: (defaultValue) => {
    let value;
    value = defaultValue;
    const setValue = (param) => {
      value = param;
    }

    return [value, setValue]
  }
}

const { useState, useEffect } = React;
const test = () => {
  const [value, setValue] = useState(10);
  console.log(`value ${value}`); // value = 10
  setValue(20);
  console.log(`value ${value}`); // value = 10
};
test();
