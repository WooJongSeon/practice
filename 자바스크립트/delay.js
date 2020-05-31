function delay() {
    for (var i = 0; i < 100000; i++);
}
function foo() {
    delay();
    console.log('foo!');
}
function bar() {
    delay();
    console.log('bar!');
}
function baz() {
    delay();
    console.log('baz!');
}

setTimeout(foo, 10);
setTimeout(bar, 10);
setTimeout(baz, 10);