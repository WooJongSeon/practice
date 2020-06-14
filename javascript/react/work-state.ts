class React {
  static useState(initValue, arr) {
    let state = initValue;
    const setState = (changeValue) => {
      state = changeValue
    }
    return [state, setState];
  }
  static useEffect() {

  }
}

const { useState, useEffect } = React;
const test = () => {
  const [value, setValue] = useState(10);
  console.log(value);
  setValue(20);
  console.log(value);

  // console.log(`value ${value()}`); // value = 10
  // // setValue(20);
  // console.log(`value ${value()}`); // value = 20
};
test();
