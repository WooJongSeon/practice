// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');
/**
 *
 * @param {Array} A
 * @param {Number} K
 */
function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const max = `${Math.max(...A)}`.split('').length;
  if (A.length < K) { // 배열의 길이가 더 짧은 경우 - 1줄짜리 테이블
    let minus = '';
    for (let i = 0; i < max; i++) {
      minus += '-';
    }
    A.forEach(v => { process.stdout.write('+' + minus); }); process.stdout.write('+'); // +----+
    process.stdout.write('\n');
    A.forEach(v => {
      let space = '';
      for (let i = max - `${v}`.length; i > 0; i--) {
        space += ' ';
      }
      process.stdout.write(`|${space}` + v);
    });
    process.stdout.write(`|`);
    process.stdout.write('\n');
    A.forEach(v => { process.stdout.write('+' + minus); }); process.stdout.write('+'); // +----+
  } else { // 아닌경우 N 줄짜리 테이블
    const rowcount = Math.ceil(A.length / K); // 몇 줄인지
    let minus = '';
    for (let i = 0; i < max; i++) {
      minus += '-';
    }
    for (let i = 0; i < K; i++) { process.stdout.write('+' + minus); } process.stdout.write('+'); // +----+
    process.stdout.write('\n');

    if (A.length % K === 0) {
      let count = 0;
      A.forEach((v, i) => {
        let space = '';
        for (let i = max - `${v}`.length; i > 0; i--) {
          space += ' ';
        }
        process.stdout.write(`|${space}` + v);
        // console.log(`count ${count} rowcount ${rowcount}`)
        if (count === rowcount) {
          process.stdout.write('|\n');
          minus = '';
          for (let i = 0; i < max; i++) {
            minus += '-';
          }
          for (let i = 0; i < K; i++) { process.stdout.write('+' + minus); } process.stdout.write('+'); // +----+
          process.stdout.write('\n');
          count = -1;
        }

        if (i === A.length - 1) {
          if (v === A[A.length - 1]) {
            return;
          }
          process.stdout.write('|');
          process.stdout.write('\n');
          console.log(`${count} ${v}`);
          for (let i = 0; i <= count; i++) {
            minus = '';
            for (let i = 0; i < max; i++) {
              minus += '-';
            }
            process.stdout.write('+' + minus);
          }
          process.stdout.write('+'); // +----+
        }
        count++;
      });
    }
    else {
      let count = 0;
      A.forEach((v, i) => {
        let space = '';
        for (let i = max - `${v}`.length; i > 0; i--) {
          space += ' ';
        }
        process.stdout.write(`|${space}` + v);
        // console.log(`count ${count} rowcount ${rowcount}`)
        if (count === rowcount) {
          process.stdout.write('|\n');
          minus = '';
          for (let i = 0; i < max; i++) {
            minus += '-';
          }
          for (let i = 0; i < K; i++) { process.stdout.write('+' + minus); } process.stdout.write('+'); // +----+
          process.stdout.write('\n');
          count = -1;
        }
        if (i === A.length - 1) {
          process.stdout.write('|\n');
          for (let i = 0; i <= count; i++) {
            minus = '';
            for (let i = 0; i < max; i++) {
              minus += '-';
            }
            process.stdout.write('+' + minus);
          }
          process.stdout.write('+'); // +----+
        }
        count++;
      });
    }
  }
}
// solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 4);
solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 12);
// solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 12);
// solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4)
