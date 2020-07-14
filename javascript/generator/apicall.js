const axios = require('axios');
function* apiCall() {
  for (i in [1, 2, 3, 4, 5]) {
    yield axios.get("https://api.spacexdata.com/v3/launches/latest");
  }
}

const api = apiCall();
for (const key in [1, 2, 3, 4, 5]) {
  api.next().value.then((value) => {
    console.log(value);
  }).catch((error) => {
    console.error(error);
  }) // 0
}

require('fs');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.on('error', () => {
  filesystem.end()
  console.log('an event occurred!');
});

setInterval(() => {
  try {
    myEmitter.emit('event');
  } catch (error) {
    myEmitter.emit('error');
  }
}, 10);
// myEmitter.emit('event');
// other code
// ...

// myEmitter.emit('event');
