const { Writable } = require('stream');



const outStream = new Writable({
  write(chunk, encodeing, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(outStream);
