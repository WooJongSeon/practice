
function Gadget() {
  let name = 'hello'
  this.getName = () => {
    return name;
  }
}

(() => {
  const toy = new Gadget()
  console.log(`toy name ${toy.name}`); // 접근 할 수 없어서 undefined가 출력된다.
  console.log(toy.getName()); // 함수로 접근 가능하다.
  // 클로저 개념을 활용해서 private 한 필드를 만들었다.
})();


// 응용해서 private 한 함수도 만들어보자.
function MakePrivate() {
  const privateMethod = () => {
    console.log('this is private');
  }
  this.publicMethod = () => {
    console.log('this is public');
  }
}

(() => {
  const priv = new MakePrivate();
  priv.privateMethod(); // 접근 할 수 없어서 에러가 난다.
  priv.publicMethod();
})();


