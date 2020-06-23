const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
console.log('an event occurred!');
});
setInterval(() => {
  myEmitter.emit('event');
}, 10);
// myEmitter.emit('event');
// other code
// ...

// myEmitter.emit('event');
const proc = require('child_process');
proc.exec()
proc.spawn()
proc.fork()
