const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', (line) => {
  const length = Number(line);
  let sum = '';
  const arr = [];
  const getInterval = (length, arr) => {
    if (length > 9) {
      arr.push(9)
      return getInterval(length - 9, arr);
    } else {
      arr.push(length);
      return;
    }
  }
  getInterval(length, arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      readCharacter(j, (error, result) => {
        sum += result;
        if (i + 1 === length) {
          console.log(sum);
        }
        rl.close();
      });
    }
  }
});

// 구간을 나눠주는 함수가 필요하다.
// 200을 넣으면 10씩 빼서
// 1~10, 11~20, 21~30
// 12를 넣으면 10을 뺀다
// 10을 리턴하고
// 2를 리턴한다.
// 9 까지 해서 구간 나누기
