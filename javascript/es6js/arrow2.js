// function Greeter(name) {
//   this.name = name;
// }

// Greeter.prototype.greet = function() { // 화살표 함수가 아니다.
//   setTimeout(function () {
//     console.log('hello ' + this.name); // hello undefined 출력
//   }, 100);
// }

// const greeter = new Greeter('world');
// greeter.greet();


// 화살표 함수 버전

function Greeter(name) {
  this.name = name;
}

Greeter.prototype.greet = function() {
  setTimeout(() => {
    console.log('hello ' + this.name);
  }, 100);
}

const greet = new Greeter('world');
greet.greet();
