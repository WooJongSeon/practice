const React  =  {
  // 리액트 useEffect, useState 구현
  useState: (initValue) => {
    let value = initValue;
    const state = () => value;
    const setState = (param) => {
      value = param;
    }
    return [state, setState]
  }
}

const { useState, useEffect } = React;
const test = () => {
  const [value, setValue] = useState(10);
  console.log(`value ${value()}`); // value = 10
  setValue(20);
  console.log(`value ${value()}`); // value = 20
};
test();
