const numbers =[1,2,3,4,5];
const even = numbers.filter(function (x) {
  return x % 2 === 0;
})


const even = numbers.filter((x) => { return x % 2 === 0; })
