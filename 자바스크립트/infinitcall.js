const foo = () => {
    return foo();
}
foo();
// RangeError: Maximum call stack size exceeded