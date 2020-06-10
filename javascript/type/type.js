const log = console.log;

log(typeof undefined === "undefined"); // true
log(typeof true === "boolean");// true
log(typeof 1 === "number");// true
log(typeof "1" === "string"); // true
log(typeof { name: 1 } === "object"); // true
log(typeof Symbol() === "symbol");// true

