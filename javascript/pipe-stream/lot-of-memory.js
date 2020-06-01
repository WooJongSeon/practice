const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big.file', (err, data) => { // 파일을 읽고 data 에 담는다.
    // 메모리가 파일크기인 400mb 소모 된다.
    if (err) throw err;

    res.end(data);
  });
});

server.listen(8000);
