class React {
  static useState(initValue: any, arr?: Array<any>) {
    let state = initValue;
    const setState = (changeValue: any) => {
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
