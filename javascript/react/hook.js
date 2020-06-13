const getAdd = () => {
  let foo = 1;
  return () => {
    foo += 1;
    return foo;
  }
}

const add = getAdd();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
