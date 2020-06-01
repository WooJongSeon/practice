for (let i = 0; i < 3; i += 1) { // 0 1 2 출력
  setTimeout(() => {
    console.log(i);
  }, 100);
}

for (var i = 0; i < 3; i += 1) { // 3 3 3 출력
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// 변수 스코프가 달라서 그렇다.
// let 은 for 안에 변수가 선언된 형태
// var 는 전역으로 변수가 선언 된 형태
