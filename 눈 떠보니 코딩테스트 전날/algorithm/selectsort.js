let a = [7, 6, 4, 2, 76, 8];
const result = []
for (let index = 0; index < 6; index++) {
  result.push(Math.min.apply(null, a));
  a.splice(a.indexOf(Math.min.apply(null, a)), 1);
  // console.log(a);
  console.log(result)
}

// pop 뒤에서 꺼내는것
// push 뒤에다 넣는것
// shift 앞에서 빼는 것
// unshift 앞에다 넣는것
