const delay = () => {
    for (var i = 0; i < 100000; i++);
};
function foo() {
    delay();
    bar();
    console.log('foo!'); // (3)
}
function bar() {
    delay();
    console.log('bar!'); // (2)
}
function baz() {
    console.log('baz!'); // (4)
}

setTimeout(baz, 1000); // (1)
foo();

// set timeout 때문에 baz는 나중에 실행
// foo 먼저 호출
// foo 에서 bar 호출
// bar 에서 console.log bar
// foo에서 foo
// 마지막 set timeout 의 baz호출
// 그러나 이것은 시간 때문은 아니고 호출 스택에 있는 순서 때문에 그렇다

